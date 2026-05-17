---
title: What it took to put six cities' affordable housing data on one map
pub_date: "2026-05-17"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/six-cities-one-map
description: I wanted to compare affordable housing per capita across NYC and San Francisco. Their open-data portals had other ideas. Six cities, one PostGIS schema, and the year-long work of making other people's work possible.
tags: postgresql, postgis, civictech, nextjs
---

# What it took to put six cities' affordable housing data on one map

I had a screen open with NYC's HPD pipeline dataset on the left and San Francisco's MOHCD dataset on the right, and I was trying to answer what should have been a simple question. Who's building more housing for low-income renters per capita right now, New York or SF.

The columns didn't match. NYC's records have a "borough" and an "income tier" with five buckets. SF's records have a "neighborhood" and an "AMI bracket" with three. NYC tracks construction type as "preservation" vs "new construction." SF calls it "rehab" vs "ground-up." Both have a unit count, but NYC bundles rental and homeownership into one column and SF splits them. The two cities are notionally measuring the same thing. The column-by-column overlap is maybe forty percent.

That afternoon turned into the project. I have a working version now: six cities (NYC, SF, LA, DC, Chicago, Philadelphia), about 6,500 affordable housing projects on one map, shared filters across cities, a real PostGIS-backed gap analysis, and the answer to my original question, which I'll get to. The repo's at github.com/c-tonneslan/groundwork. This is what it actually took.

The honest part first. There is no canonical "affordable housing" schema. Every city's housing department made up their own, on their own timeline, for their own internal reasons. NYC's HPD has been collecting unit-level data since 1987 and the schema reflects three decades of policy changes. SF's MOHCD has done the same but with different priorities. LA's HCID rolls things up differently again. DC publishes a tidy table that throws away half the detail. Chicago publishes a list of projects with no completion dates at all. (I'll come back to that one.)

So normalization is the entire project, basically. You pick a target schema, you write a loader per city, you accept that some columns are going to be null for some cities. My target schema lives in a `projects` table with the columns you'd expect: `name`, `address`, `lat`, `lng`, `units`, `unit_mix`, `income_tier`, `construction_type`, `start_date`, `completion_date`, `funding_source`, `city_id`, `external_id`. The loaders are one Node script per city in `scripts/load-*.mjs`. Each one maps that city's API onto the shared shape, fills the columns it can, leaves the rest null, and upserts on `(city_id, external_id)` so re-running it doesn't duplicate.

The mapping work itself is mostly boring. This city's borough becomes our `area_id`. This city's `tot_units` becomes our `units`. The interesting stuff is where the mappings don't exist. NYC tracks income tier in five bins, SF in three, LA in something else again. There's no faithful translation. So I picked the loosest common denominator (extremely low, very low, low, moderate, middle, other) and forced each city's bins into the nearest match, with an `income_tier_original` column that preserves the source's exact label so you can audit. The choropleth on the map uses the normalized column. The detail page shows both.

Two things from that surprised me. The bigger one was that admitting what's missing matters more than getting everything right. Every page on the live site has a data-quality footnote saying when this city's dataset was last updated, what's missing, and what assumptions the normalization made. A reader who actually cares about housing policy in DC versus LA will trust a tool that admits it forced three income bins into five. The reader who doesn't care isn't reading footnotes anyway.

The smaller surprise, which I almost dropped to keep the data tidy, was that the city with the worst data is sometimes the most useful one to include. Chicago's affordable rental inventory doesn't ship completion dates. None of the production-over-time charts work for it. Including Chicago anyway, and being upfront about the limitation, is more useful than dropping it. A reader in Chicago can still use the map and the per-project detail. A reader doing a national comparison gets to see how big the gap is between cities that publish good data and cities that don't.

Most of groundwork is plumbing. But there's one query that does the thing I built the project to do, which is to surface where the supply-demand mismatch is worst. For every census tract in a city, count the rent-burdened households (renters paying more than 30% of income on housing, from ACS 5-year), count the affordable units within 1 km of the tract centroid, order by the ratio. Worst-served tracts at the top.

In PostGIS this is one query:

```sql
SELECT
  t.tract_id,
  t.name,
  t.rent_burdened_households,
  COUNT(p.id) FILTER (
    WHERE ST_DWithin(t.centroid::geography, p.geom::geography, 1000)
  ) AS nearby_units,
  t.rent_burdened_households::float / NULLIF(
    COUNT(p.id) FILTER (
      WHERE ST_DWithin(t.centroid::geography, p.geom::geography, 1000)
    ), 0
  ) AS burden_per_unit
FROM civic.tracts t
LEFT JOIN civic.projects p ON p.city_id = t.city_id
WHERE t.city_id = $1
GROUP BY t.tract_id, t.name, t.rent_burdened_households, t.centroid
ORDER BY burden_per_unit DESC NULLS LAST
LIMIT 25;
```

`ST_DWithin` with a geography cast does the meters-native radius check. The `FILTER` clause lets the same aggregate count once with a spatial constraint without shuttling rows out of Postgres to filter in Node. The whole thing runs in about forty milliseconds on six cities' worth of data.

What I'd want a developer who's never used PostGIS to take from this is that the spatial filter has to happen at the database, not in your application code. The temptation is always to pull all the projects, pull all the tracts, and do the within-radius check in a for-loop in your service layer. That works for two cities. It doesn't work for six. It really doesn't work the moment you put a 1 km radius slider on the page and the user starts dragging it.

The other thing I had to figure out, which civic-data tutorials rarely touch, is that you can't compare across cities until you've normalized to population. The first version of the map ranked tracts by raw rent-burdened household count. NYC's outer boroughs dominated the top. So did LA County. Of course they did, they're huge. So I added a `population` column on `tract` (ACS 5-year totals), a per-10k field on the API responses, and a toggle on the map between raw and per-capita. Per-capita re-ranks everything. Larger wealthier neighborhoods drop off the top. Dense smaller neighborhoods rise.

The thing nobody mentions, that I had to figure out the hard way, is that per-capita on residential population has a problem of its own. Some places (the Loop in Chicago, downtown DC, midtown Manhattan) have small residential populations but huge daytime populations of workers, tourists, hospital patients. A per-capita-by-residents metric makes them look fine. They aren't fine. The Loop has almost no affordable housing because almost nobody lives there full time. Per-capita on residential population is correct for who-lives-there questions and wrong for who-needs-it questions. I lean on the residential version and note the caveat on the methodology page, but the right answer is to use both.

What about the question I started with, NYC versus SF per capita. I'll let people who want to load the data look for themselves. Two things I noticed, though. The first is that per-capita is rarely the same answer as raw. The second is that the gap between cities that publish complete data and cities that don't is bigger than the gap between cities themselves. NYC looks bigger than SF in raw numbers, of course it does. But Chicago's missing dates are a bigger missing piece than any of the headline city-vs-city numbers ever show.

The reason I built this isn't that I want everyone to use my specific tool. It's that comparing across cities should be possible from any laptop and most of the time it isn't, and that's a worse problem than the tool is. The work of normalizing is unglamorous and it's the whole project. The PostGIS query is one query. The data normalization is the rest of the year. If you're a junior councillor's staffer the day before a hearing trying to spot-check a number your boss is about to quote, the tool you wanted was someone else's normalization work. That's what civic data is. Most of it is making other people's work possible.

Code's at github.com/c-tonneslan/groundwork. The Philadelphia-only sibling project (same PostGIS schema, deeper on a single city: council district briefs, displacement signals from L&I demolition permits, email alerts on new projects within a saved radius) lives at civic-philly.vercel.app.
