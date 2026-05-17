---
title: Live mapping SEPTA, and the small ways the data fights you
pub_date: "2026-05-17"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/septa-live-data-fights-you
description: SEPTA publishes plenty of realtime data. Putting all of it on one map turned up the kind of small, specific data problems that don't show up until you actually try.
tags: nextjs, leaflet, gtfs, civictech, typescript
---

# Live mapping SEPTA, and the small ways the data fights you

I wanted a SEPTA map that showed every train and bus moving in real time. The official app is a list of departures. The agency's website is a static schedule PDF. Neither one lets you actually see the system working. So I built [septa-live.vercel.app](https://septa-live.vercel.app). The repo's [c-tonneslan/septa-live](https://github.com/c-tonneslan/septa-live), and what I want to write about is the unglamorous part: the small, specific data problems that don't show up until you've actually built the thing.

## SEPTA spells the same line three different ways in one response

The Arrivals endpoint returns a list of upcoming departures from a station. Each entry has a `line` field. Across one response, Chestnut Hill East showed up as `Chestnut Hill East`, `Chestnut Hl East`, and `Chestnut H East`. Three different strings, same line. This isn't a TODO comment in their code or a deprecated field. It's just how the API responds today.

If your line-color lookup keys off the raw string, your map ends up with one route drawn three colors. The fix is to canonicalize at the boundary. My line registry carries an `apiNames` array per line that lists every spelling I've seen, and a single `lookupLine` resolves any of them to one entry with one color. New spellings will surface as gray on the map, which I treat as a regression to add to the array.

The same pattern shows up elsewhere. TransitView returns route IDs like `T2` (the new SEPTA Metro letters). Alerts returns the legacy long name `Market-Frankford`. The route_id in the bus GTFS feed is `L1` for the MFL. All three point to the same line. None of the SEPTA endpoints agree with each other.

## Market Street doesn't run along a flat latitude

My first version of the map had the MFL underground stations as a hand-curated list. I figured Market Street through Center City was roughly E-W, picked the latitude at City Hall (39.9525), and used it for every Market Street station. The stations rendered ~800 meters south of where they actually are.

Turns out Market Street drifts about 340 meters north between 15th Street and 30th Street. It's not perfectly E-W. It tilts northwest. The City Hall station sits at lat 39.9525. The 30th Street station sits at lat 39.9558. Different latitude. The Frankford El curves further still, up Front Street then onto Kensington Avenue then onto Frankford Avenue.

I rewrote everything to pull from SEPTA's published GTFS feed instead of hand-curating. A Python generator script (`scripts/gen-gtfs.py`) downloads https://www3.septa.org/developer/gtfs_public.zip, parses both inner zips (rail + bus), and emits a TypeScript module with every stop at its real WGS-84 coordinates and every route's actual shape polyline. About 4 seconds end to end. 294 rail stations, 150 bus routes, all coordinates from the agency itself.

The lesson here is: if you find yourself hand-curating coordinates, you're going to be wrong, and you're going to be wrong in ways that don't surface in testing. Just use the upstream data.

## Bus stops sit on the curb, polylines sit on the street centerline

The first time I rendered bus routes on top of rail, half the bus stops floated off their own polyline. That's not a bug, that's geography: GTFS records bus stops at the actual curb where passengers wait, and route shapes at the street centerline. There's always going to be a small offset.

But the offset I was seeing was larger than the curb. My generator was picking the shape from the longest trip on a route and the stop list from the longest direction-0 trip. Those would often land on different trips: a deadhead going back to the depot, a special school-day variant, or the reverse direction. The stops then weren't even on the same geometry as the shape.

The fix was small. Bundle shape and stops per-trip, pick one representative trip, use both its shape and its stop list. The stops are now literally the stops the bus on that trip drives past, in the order it drives past them, with the shape that traces the path between.

## Some realtime data doesn't exist, and you have to be honest about that

SEPTA publishes positions for Regional Rail trains (TrainView), trolleys, NHSL cars, and buses (TransitViewAll). They do not publish positions for the Broad Street or Market-Frankford subway trains in any public endpoint. They have GTFS-RT internally. It's not exposed.

So those two lines show as shapes plus station markers, and that's it. No dots moving. I considered scraping their internal feed or interpolating from headways. Both felt wrong. The honest answer is that the map shows you what SEPTA publishes, and what they publish doesn't include BSL or MFL train positions. The README says so. The alerts banner shows the agency's general service alerts which work for those lines anyway.

Same story with bus stop predictions. SEPTA used to expose an endpoint that gave next-arrival times per stop. They deprecated it. Stops still show on the map and you can click them, but the live countdown isn't there.

## What the project ended up being

About 7,700 stops, 173 routes, 31,000 walking transfers between nearby stops, all in a 1.8MB network graph that supports trip planning across every mode. The map polls SEPTA every 15 seconds and animates trains between polls so they glide instead of jumping. There's a reliability dashboard at /stats that snapshots on-time performance into a separate git branch every 15 minutes via a GitHub Action, so over time you can see which lines you can actually count on. An embed mode (`/embed?lines=PAO,TRE`) returns a chrome-less map for iframing into another site.

But the part that interested me was the part nobody sees: the canonicalization layer that hides SEPTA's inconsistencies, the GTFS-driven coordinates that put each station on its actual street, the trip-coherent generator that keeps stops on their polylines. The map looks clean because the data underneath isn't, and there's about 200 lines of code dedicated to making the seams invisible.

If you've shipped a thing on top of real-world municipal data and it didn't break in exactly these ways, I'd love to hear what you ran into.
