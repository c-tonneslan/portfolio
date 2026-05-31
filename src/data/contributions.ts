export interface PR {
  title: string;
  number: number;
  // Only set on PRs that were merged. Open PRs leave this off — they're
  // the default. Closed (unmerged) PRs aren't added to this file at all.
  status?: "merged";
}

export interface Contribution {
  repo: string;
  name: string;
  stars: string;
  prs: PR[];
  url: string;
}

export const notable: Contribution[] = [
  {
    repo: "datamade/usaddress",
    name: "usaddress (DataMade)",
    stars: "1.6K+",
    prs: [
      { title: "stub: add RepeatedLabelError to __init__.pyi", number: 408 },
    ],
    url: "https://github.com/datamade/usaddress",
  },
  {
    repo: "openstates/openstates-core",
    name: "openstates-core (Open States)",
    stars: "200+",
    prs: [
      { title: "Validate event document URLs as URIs", number: 192 },
      { title: "Stop using deprecated datetime.utcnow()", number: 193 },
      { title: "cli: drop utcnow() from latest_bill_update / latest_people_update writes", number: 194 },
      { title: "Validate bill citation URLs as URIs", number: 195 },
      { title: "ansistrm: narrow bare except to Exception", number: 196 },
    ],
    url: "https://github.com/openstates/openstates-core",
  },
  {
    repo: "openstates/openstates-scrapers",
    name: "openstates-scrapers (Open States)",
    stars: "1K+",
    prs: [
      { title: "Default the action categorizer Rule to case-insensitive matching", number: 5672 },
      { title: "Drop redundant (?i) prefixes from utils.actions.Rule patterns", number: 5673 },
      { title: "utils.actions: import Iterable from collections.abc", number: 5674, status: "merged" },
      { title: "nh: drop deprecated datetime.utcnow() in get_session_list", number: 5675, status: "merged" },
      { title: "utils.actions: drop six.string_types in favour of str", number: 5676, status: "merged" },
      { title: "Replace deprecated Logger.warn with .warning", number: 5677 },
    ],
    url: "https://github.com/openstates/openstates-scrapers",
  },
  {
    repo: "mysociety/alaveteli",
    name: "Alaveteli (mySociety FOI platform)",
    stars: "700+",
    prs: [
      { title: "Stop relying on contributor order in update_contributors spec", number: 9258 },
      { title: "Move setSelect into the Jcrop init callback on the photo crop page", number: 9259 },
      { title: "Mask attachment HTML text nodes only, not href/src attributes", number: 9260 },
      { title: "Pick up replacement file's content_type before regenerating filename", number: 9261 },
      { title: "Move setSelect into the Jcrop init callback", number: 9270 },
    ],
    url: "https://github.com/mysociety/alaveteli",
  },
  {
    repo: "BlinkTagInc/gtfs-to-html",
    name: "gtfs-to-html",
    stars: "225+",
    prs: [
      { title: "Pin pbf to v3 to fix the missing dist/pbf.js error", number: 199 },
    ],
    url: "https://github.com/BlinkTagInc/gtfs-to-html",
  },
  {
    repo: "openstates/openstates.org",
    name: "openstates.org",
    stars: "70+",
    prs: [
      { title: "Validate lat/lon as floats before interpolating into the geo GraphQL query", number: 463 },
      { title: "Stop using deprecated datetime.utcnow() across the repo", number: 464 },
    ],
    url: "https://github.com/openstates/openstates.org",
  },
  {
    repo: "openstates/pyopenstates",
    name: "pyopenstates",
    stars: "30+",
    prs: [
      { title: "Sync legislator/district docstrings with actual signatures", number: 28 },
    ],
    url: "https://github.com/openstates/pyopenstates",
  },
  {
    repo: "mysociety/mysoc-validator",
    name: "mysoc-validator",
    stars: "10+",
    prs: [
      { title: "Don't choke on duplicate identifier rows in from_identifier", number: 15 },
    ],
    url: "https://github.com/mysociety/mysoc-validator",
  },
  {
    repo: "mysociety/fixmystreet",
    name: "FixMyStreet (mySociety)",
    stars: "900+",
    prs: [
      { title: "FAQ: point downtime guidance at the status page, not Twitter", number: 5979, status: "merged" },
      { title: "Fix a few comment/doc typos", number: 5980, status: "merged" },
      { title: "Don't redirect inspector form back to /report/update referer", number: 5981 },
    ],
    url: "https://github.com/mysociety/fixmystreet",
  },
  {
    repo: "MobilityData/awesome-transit",
    name: "awesome-transit (MobilityData)",
    stars: "1.5K+",
    prs: [
      { title: "Update Dede entry; mark Instabus as no longer maintained", number: 371 },
      { title: "Add 'Is SEPTA Fucked?' and 'Is Metro Burning?' status dashboards", number: 372 },
      { title: "Add BUS DATA (London ON) and Amtraker tracker", number: 373 },
      { title: "Add El Tracker (CTA) and three WMATA tools", number: 374 },
      { title: "Add GTFS.guru validator and gtfs-osm-import", number: 375 },
      { title: "Add awesome-europe cross-link under a Related lists subhead", number: 376 },
    ],
    url: "https://github.com/MobilityData/awesome-transit",
  },
  {
    repo: "MobilityData/gtfs-validator",
    name: "gtfs-validator (MobilityData)",
    stars: "300+",
    prs: [
      { title: "notice(non_ascii_or_non_printable_char): use standard fieldName", number: 2165 },
    ],
    url: "https://github.com/MobilityData/gtfs-validator",
  },
  {
    repo: "MobilityData/gtfs.org",
    name: "gtfs.org (MobilityData)",
    stars: "100+",
    prs: [
      { title: "active projects: drop merged GTFS Governance, link to open PRs", number: 675 },
    ],
    url: "https://github.com/MobilityData/gtfs.org",
  },
  {
    repo: "simonw/datasette.io",
    name: "datasette.io (Simon Willison)",
    stars: "100+",
    prs: [
      { title: "data-journalism: replace dead sba-loans demo link with archive", number: 182 },
    ],
    url: "https://github.com/simonw/datasette.io",
  },
  {
    repo: "simonw/datasette",
    name: "Datasette (Simon Willison)",
    stars: "9K+",
    prs: [
      { title: "docs: mention WAL mode for concurrently written databases", number: 2718 },
    ],
    url: "https://github.com/simonw/datasette",
  },
  {
    repo: "simonw/json-flatten",
    name: "json-flatten (Simon Willison)",
    stars: "50+",
    prs: [
      { title: "Fix unflatten crashing on keys that contain a dollar sign", number: 11 },
    ],
    url: "https://github.com/simonw/json-flatten",
  },
  {
    repo: "simonw/symbex",
    name: "symbex (Simon Willison)",
    stars: "300+",
    prs: [
      { title: "Render dotted base classes and metaclass values instead of dropping them", number: 49 },
    ],
    url: "https://github.com/simonw/symbex",
  },
  {
    repo: "huggingface/accelerate",
    name: "Hugging Face Accelerate",
    stars: "9.7K+",
    prs: [
      { title: "logging: stop warning_once from crashing on unhashable kwargs like extra={...}", number: 4047 },
    ],
    url: "https://github.com/huggingface/accelerate",
  },
  {
    repo: "huggingface/tokenizers",
    name: "Hugging Face Tokenizers",
    stars: "10.7K+",
    prs: [
      { title: "Fix typo in EncodingVisualizer.annotation_converter attribute", number: 2068 },
    ],
    url: "https://github.com/huggingface/tokenizers",
  },
  {
    repo: "huggingface/peft",
    name: "Hugging Face PEFT",
    stars: "21K+",
    prs: [
      { title: "Return False from is_gptqmodel_available when gptqmodel isn't installed", number: 3255 },
    ],
    url: "https://github.com/huggingface/peft",
  },
  {
    repo: "18F/charlie",
    name: "charlie (18F Slack bot)",
    stars: "30+",
    prs: [
      { title: "tau-bot: skip times the author marked as local", number: 602, status: "merged" },
      { title: "InclusionBot: move religious-tradition entries from Racist to Other", number: 603 },
    ],
    url: "https://github.com/18F/charlie",
  },
  {
    repo: "codeforboston/maple",
    name: "MAPLE (Code for Boston)",
    stars: "60+",
    prs: [
      { title: "Remove showLLMFeatures feature flag", number: 2142, status: "merged" },
      { title: "Send logged-out users to login when clicking Follow", number: 2143 },
    ],
    url: "https://github.com/codeforboston/maple",
  },
  {
    repo: "bloom-housing/bloom",
    name: "Bloom (Exygy affordable housing)",
    stars: "100+",
    prs: [
      { title: "listing: skip amiChart findMany when no units carry an AMI chart", number: 6316 },
    ],
    url: "https://github.com/bloom-housing/bloom",
  },
  {
    repo: "nycdb/nycdb",
    name: "NYCDB (NYC Housing Database)",
    stars: "200+",
    prs: [
      { title: "docs: cover scripts/test and create_dataset.py in the new-dataset guide", number: 401 },
      { title: "src/README: correct Python and Postgres minimums", number: 402 },
      { title: "List sql/data subdirectories in packages to silence build warnings", number: 403 },
      { title: "download_file: narrow bare except, include cause in message", number: 404 },
    ],
    url: "https://github.com/nycdb/nycdb",
  },
  {
    repo: "DemocracyClub/WhoCanIVoteFor",
    name: "WhoCanIVoteFor (Democracy Club UK)",
    stars: "70+",
    prs: [
      { title: "Strip query strings when extracting Facebook/Instagram usernames", number: 2392 },
      { title: "Clear emblem_url when a party drops its emblem upstream", number: 2393 },
      { title: "Fix 'Idenfitier' and 'psuedo' typos on Party.ec_id", number: 2394 },
      { title: "Sweep up stale wikipedia_bio rows in the daily import", number: 2395 },
      { title: "show_data_on_error: catch Exception, not BaseException", number: 2398 },
    ],
    url: "https://github.com/DemocracyClub/WhoCanIVoteFor",
  },
  {
    repo: "DemocracyClub/UK-Polling-Stations",
    name: "UK-Polling-Stations (Democracy Club UK)",
    stars: "60+",
    prs: [
      { title: "councils: don't pick import_fake_*.py as the import script", number: 9418 },
    ],
    url: "https://github.com/DemocracyClub/UK-Polling-Stations",
  },
  {
    repo: "DemocracyClub/yournextrepresentative",
    name: "yournextrepresentative (Democracy Club UK)",
    stars: "150+",
    prs: [
      { title: "Allow 18-year-olds to enter their birth year", number: 2752 },
      { title: "Strip mailto: prefix from email identifiers", number: 2753 },
      { title: "Shuffle the open duplicate-suggestion list", number: 2754 },
      { title: "Fix 'seperate' / 'moemnt' typos in comments and docs", number: 2755 },
      { title: "Reject adding a person to two ballots from the same election", number: 2756 },
      { title: "Skip diff_html for photo actions", number: 2757 },
      { title: "Stop using deprecated datetime.utcnow()", number: 2759 },
      { title: "moderation_queue: drop the cgi import", number: 2760 },
    ],
    url: "https://github.com/DemocracyClub/yournextrepresentative",
  },
  {
    repo: "openelections/openelections-core",
    name: "openelections-core",
    stars: "400+",
    prs: [
      { title: "bake: tell the user when there's nothing to bake", number: 293, status: "merged" },
      { title: "tests: replace deprecated assertEquals with assertEqual", number: 294 },
      { title: "Replace deprecated logging.warn with .warning", number: 295 },
      { title: "Narrow bare excepts in id/oh datasources", number: 296, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-core",
  },
  {
    repo: "openelections/openelections-data-pa",
    name: "openelections-data-pa",
    stars: "30+",
    prs: [
      { title: "readme: update year range from 2000-2012 to 2000 onward", number: 171, status: "merged" },
      { title: "clarity_parser: narrow bare excepts to Exception", number: 172, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-pa",
  },
  {
    repo: "openelections/openelections-data-ma",
    name: "openelections-data-ma",
    stars: "15+",
    prs: [
      { title: "parsers: pass html.parser to BeautifulSoup explicitly", number: 35, status: "merged" },
      { title: "primary_parser: narrow bare excepts to IndexError", number: 36, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-ma",
  },
  {
    repo: "openelections/openelections-data-ga",
    name: "openelections-data-ga",
    stars: "20+",
    prs: [
      { title: "county_parser: pass lxml to BeautifulSoup to match the rest of the repo", number: 299, status: "merged" },
      { title: "clarity_parser: narrow bare except to Exception", number: 300, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-ga",
  },
  {
    repo: "openelections/openelections-data-tx",
    name: "openelections-data-tx",
    stars: "40+",
    prs: [
      { title: "readme: add 2022 + 2024 to the precinct results coverage table", number: 461 },
      { title: "Narrow bare excepts to Exception across the TX parsers", number: 462 },
    ],
    url: "https://github.com/openelections/openelections-data-tx",
  },
  {
    repo: "openelections/openelections-data-ny",
    name: "openelections-data-ny",
    stars: "30+",
    prs: [
      { title: "readme: add 2018/2020/2022/2024 to precinct results table", number: 150 },
      { title: "Narrow bare excepts to Exception in el30 / ulster parsers", number: 151 },
    ],
    url: "https://github.com/openelections/openelections-data-ny",
  },
  {
    repo: "openelections/openelections-data-az",
    name: "openelections-data-az",
    stars: "10+",
    prs: [
      { title: "clarity_parser: narrow bare except to Exception", number: 72, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-az",
  },
  {
    repo: "openelections/openelections-data-nj",
    name: "openelections-data-nj",
    stars: "10+",
    prs: [
      { title: "Narrow file-open bare excepts to OSError", number: 102, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-nj",
  },
  {
    repo: "openelections/openelections-data-co",
    name: "openelections-data-co",
    stars: "10+",
    prs: [
      { title: "colorado_scraper: narrow bare excepts to IndexError", number: 71 },
      { title: "clarity_parser: narrow bare except to Exception", number: 72, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-co",
  },
  {
    repo: "openelections/openelections-data-sc",
    name: "openelections-data-sc",
    stars: "10+",
    prs: [
      { title: "clarity_parser: narrow bare excepts to Exception", number: 47 },
    ],
    url: "https://github.com/openelections/openelections-data-sc",
  },
  {
    repo: "openelections/openelections-data-ky",
    name: "openelections-data-ky",
    stars: "10+",
    prs: [
      { title: "clarity_parser: narrow bare excepts to Exception", number: 50 },
    ],
    url: "https://github.com/openelections/openelections-data-ky",
  },
  {
    repo: "openelections/openelections-data-ia",
    name: "openelections-data-ia",
    stars: "10+",
    prs: [
      { title: "Narrow bare excepts to Exception across the parsers", number: 58 },
    ],
    url: "https://github.com/openelections/openelections-data-ia",
  },
  {
    repo: "openelections/openelections-data-in",
    name: "openelections-data-in",
    stars: "10+",
    prs: [
      { title: "el30_parser: narrow bare except to IndexError/ValueError", number: 90 },
    ],
    url: "https://github.com/openelections/openelections-data-in",
  },
  {
    repo: "openelections/openelections-data-ar",
    name: "openelections-data-ar",
    stars: "10+",
    prs: [
      { title: "Narrow clarity bare excepts to Exception", number: 30 },
    ],
    url: "https://github.com/openelections/openelections-data-ar",
  },
  {
    repo: "openelections/openelections-data-or",
    name: "openelections-data-or",
    stars: "10+",
    prs: [
      { title: "Narrow per-line bare excepts in the OR parsers", number: 234 },
    ],
    url: "https://github.com/openelections/openelections-data-or",
  },
  {
    repo: "openelections/openelections-data-al",
    name: "openelections-data-al",
    stars: "10+",
    prs: [
      { title: "Narrow bare excepts to Exception across the AL helpers", number: 26 },
    ],
    url: "https://github.com/openelections/openelections-data-al",
  },
  {
    repo: "openelections/openelections-data-ri",
    name: "openelections-data-ri",
    stars: "10+",
    prs: [
      { title: "converter: narrow bare except to IndexError", number: 34 },
    ],
    url: "https://github.com/openelections/openelections-data-ri",
  },
  {
    repo: "openelections/openelections-data-ut",
    name: "openelections-data-ut",
    stars: "10+",
    prs: [
      { title: "clarity_parser: narrow bare except to Exception", number: 84 },
    ],
    url: "https://github.com/openelections/openelections-data-ut",
  },
  {
    repo: "openelections/openelections-data-mn",
    name: "openelections-data-mn",
    stars: "10+",
    prs: [
      { title: "Narrow per-row bare excepts in the MN parsers", number: 22 },
    ],
    url: "https://github.com/openelections/openelections-data-mn",
  },
  {
    repo: "openelections/openelections-data-wv",
    name: "openelections-data-wv",
    stars: "10+",
    prs: [
      { title: "clarity_parser: narrow bare except to Exception", number: 73 },
    ],
    url: "https://github.com/openelections/openelections-data-wv",
  },
  {
    repo: "openelections/openelections-data-mi",
    name: "openelections-data-mi",
    stars: "10+",
    prs: [
      { title: "Narrow bare excepts to Exception in clarity_parser / macomb", number: 81 },
    ],
    url: "https://github.com/openelections/openelections-data-mi",
  },
  {
    repo: "openelections/openelections-data-de",
    name: "openelections-data-de",
    stars: "10+",
    prs: [
      { title: "Narrow bare excepts to KeyError/IndexError in the DE parsers", number: 22 },
    ],
    url: "https://github.com/openelections/openelections-data-de",
  },
  {
    repo: "openelections/openelections-data-nh",
    name: "openelections-data-nh",
    stars: "10+",
    prs: [
      { title: "Narrow bare excepts to Exception in the 2012 NH scrapers", number: 38, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-nh",
  },
  {
    repo: "openelections/openelections-data-nv",
    name: "openelections-data-nv",
    stars: "10+",
    prs: [
      { title: "README: note 2016/2018/2020/2022 coverage", number: 49 },
    ],
    url: "https://github.com/openelections/openelections-data-nv",
  },
  {
    repo: "openstates/api-v3",
    name: "api-v3 (Open States)",
    stars: "20+",
    prs: [
      { title: "Stop using deprecated datetime.utcnow()", number: 43 },
    ],
    url: "https://github.com/openstates/api-v3",
  },
  {
    repo: "codeforamerica/safety-net-blueprint",
    name: "safety-net-blueprint (Code for America)",
    stars: "10+",
    prs: [
      { title: "mock-server: skip CAST AS REAL for ISO date comparisons", number: 297 },
    ],
    url: "https://github.com/codeforamerica/safety-net-blueprint",
  },
  {
    repo: "unitedstates/python-us",
    name: "python-us (@unitedstates)",
    stars: "500+",
    prs: [
      { title: "states.lookup: strip 'State' / 'State of' / 'Commonwealth of' qualifiers", number: 96 },
    ],
    url: "https://github.com/unitedstates/python-us",
  },
  {
    repo: "unitedstates/congress-legislators",
    name: "congress-legislators (@unitedstates)",
    stars: "2K+",
    prs: [
      { title: "readme: refresh 'Who's Using This Data' to drop discontinued projects", number: 1048 },
      { title: "Narrow bare excepts in retire and house_history scripts", number: 1049 },
    ],
    url: "https://github.com/unitedstates/congress-legislators",
  },
  {
    repo: "unitedstates/districts",
    name: "districts (@unitedstates)",
    stars: "280+",
    prs: [
      { title: "readme: clarify that newer year folders only contain states that changed", number: 33 },
    ],
    url: "https://github.com/unitedstates/districts",
  },
  {
    repo: "alephdata/aleph",
    name: "Aleph (ICIJ data investigation platform)",
    stars: "2K+",
    prs: [
      { title: "ui: format Audio.duration as h:mm:ss instead of raw seconds", number: 4414 },
    ],
    url: "https://github.com/alephdata/aleph",
  },
  {
    repo: "freelawproject/courts-db",
    name: "courts-db (Free Law Project)",
    stars: "100+",
    prs: [
      { title: "Fix 'Washignton' typo in courts.json locations", number: 134, status: "merged" },
    ],
    url: "https://github.com/freelawproject/courts-db",
  },
  {
    repo: "openelections/openelections-data-wi",
    name: "openelections-data-wi",
    stars: "10+",
    prs: [
      { title: "Drop dead Travis badge from README", number: 75, status: "merged" },
    ],
    url: "https://github.com/openelections/openelections-data-wi",
  },
  {
    repo: "5calls/5calls",
    name: "5 Calls",
    stars: "20+",
    prs: [
      { title: "Use state-specific titles for state legislators", number: 130 },
    ],
    url: "https://github.com/5calls/5calls",
  },
  {
    repo: "opencivicdata/docs.opencivicdata.org",
    name: "docs.opencivicdata.org",
    stars: "49",
    prs: [
      { title: "Point Popolo links at https://www.popoloproject.com", number: 118 },
    ],
    url: "https://github.com/opencivicdata/docs.opencivicdata.org",
  },
  {
    repo: "mysociety/theyworkforyou",
    name: "TheyWorkForYou (mySociety)",
    stars: "1K+",
    prs: [
      { title: "Use Plaid Cymru's green for the party dot", number: 2017, status: "merged" },
      { title: "Fix 'seperate' typos in two comments", number: 2018, status: "merged" },
    ],
    url: "https://github.com/mysociety/theyworkforyou",
  },
  {
    repo: "rclone/rclone",
    name: "rclone",
    stars: "55K+",
    prs: [
      { title: "operations: fix DeleteFile godoc, it doesn't honor --backup-dir", number: 9440 },
    ],
    url: "https://github.com/rclone/rclone",
  },
  {
    repo: "sharkdp/hyperfine",
    name: "hyperfine",
    stars: "26K+",
    prs: [
      { title: "Expose HYPERFINE_ITERATION to prepare and conclude commands", number: 882 },
    ],
    url: "https://github.com/sharkdp/hyperfine",
  },
  {
    repo: "pola-rs/polars",
    name: "polars",
    stars: "35K+",
    prs: [
      { title: "py: make next() on GroupBy lazily set up iteration state", number: 27652 },
    ],
    url: "https://github.com/pola-rs/polars",
  },
  {
    repo: "CodeForPhilly/philly-ward-leaders",
    name: "philly-ward-leaders (Code for Philly)",
    stars: "20+",
    prs: [
      { title: "Shrink font further on long ward-leader names", number: 357, status: "merged" },
    ],
    url: "https://github.com/CodeForPhilly/philly-ward-leaders",
  },
  {
    repo: "CodeForPhilly/balancer-main",
    name: "Balancer (Code for Philly)",
    stars: "19+",
    prs: [
      { title: "Rename 'Click To Enter New Patient' button to 'Enter New Patient'", number: 511 },
      { title: "Fix mobile nav 'Medication Suggester' link target and label", number: 512 },
    ],
    url: "https://github.com/CodeForPhilly/balancer-main",
  },
  {
    repo: "datamade/census",
    name: "census (DataMade)",
    stars: "681",
    prs: [
      { title: "Switch ACS/SF1/PL endpoints on fields() too", number: 168 },
      { title: "ACS5: restrict state_county_blockgroup to 2013+", number: 169 },
    ],
    url: "https://github.com/datamade/census",
  },
  {
    repo: "datamade/django-councilmatic",
    name: "django-councilmatic (DataMade)",
    stars: "50+",
    prs: [
      { title: "Escape Solr-special chars and colons in RSS facet values", number: 295 },
    ],
    url: "https://github.com/datamade/django-councilmatic",
  },
  {
    repo: "datamade/parserator",
    name: "parserator (DataMade)",
    stars: "800+",
    prs: [
      { title: "docs: fix represention typo", number: 55 },
      { title: "Skip XML comments and empty sequences in TrainingData iteration", number: 56 },
    ],
    url: "https://github.com/datamade/parserator",
  },
  {
    repo: "datamade/searchable-map-template-csv",
    name: "searchable-map-template-csv (DataMade)",
    stars: "60+",
    prs: [
      { title: "Skip CSV rows with empty or non-numeric lat/lng", number: 33 },
      { title: "about.html: use relative asset paths so the template works in a subdir", number: 34 },
    ],
    url: "https://github.com/datamade/searchable-map-template-csv",
  },
  {
    repo: "datamade/cookiecutter-django-app",
    name: "cookiecutter-django-app (DataMade)",
    stars: "30+",
    prs: [
      { title: "Make flake8 pre-commit exclude a proper regex", number: 15 },
    ],
    url: "https://github.com/datamade/cookiecutter-django-app",
  },
  {
    repo: "datamade/chi-councilmatic",
    name: "chi-councilmatic (DataMade)",
    stars: "40+",
    prs: [
      { title: "get_legistar_link: rewrite stale chicago.legistar.com URLs to eLMS", number: 430 },
    ],
    url: "https://github.com/datamade/chi-councilmatic",
  },
  {
    repo: "tailscale/tailscale",
    name: "Tailscale",
    stars: "29K+",
    prs: [
      { title: "Wrap ACME errors with more context for cert timeouts", number: 19688 },
      { title: "Don't emit broken hint for invalid legacy tcp serve args", number: 19690 },
    ],
    url: "https://github.com/tailscale/tailscale",
  },
  {
    repo: "etcd-io/etcd",
    name: "etcd",
    stars: "48K+",
    prs: [
      { title: "clientv3: don't log warn/error for expected context cancellation on shutdown", number: 21739 },
    ],
    url: "https://github.com/etcd-io/etcd",
  },
  {
    repo: "grpc/grpc-go",
    name: "grpc-go",
    stars: "21K+",
    prs: [
      { title: "stats/opentelemetry: set ai.method in clientTracingHandler.TagRPC", number: 9116 },
    ],
    url: "https://github.com/grpc/grpc-go",
  },
  {
    repo: "jackc/pgx",
    name: "pgx",
    stars: "13K+",
    prs: [
      { title: "pgconn: use fresh context for fallback connection in connectPreferred", number: 2554, status: "merged" },
      { title: "pgconn: preserve full error chain in normalizeTimeoutError", number: 2556, status: "merged" },
      { title: "pgconn: add ErrConnClosed sentinel and unwrap it from connLockError", number: 2559, status: "merged" },
      { title: "pgproto3: hex-decode CopyData.Data in UnmarshalJSON", number: 2569, status: "merged" },
    ],
    url: "https://github.com/jackc/pgx",
  },
  {
    repo: "livekit/livekit-cli",
    name: "LiveKit CLI",
    stars: "1K+",
    prs: [
      { title: "Add --id flag to agent deploy command", number: 839 },
      { title: "install: create GOBIN directory if it doesn't exist", number: 840 },
      { title: "token create: don't show default localhost URL in output", number: 841 },
      { title: "agentfs: use forward slashes in Dockerfile entrypoint paths on Windows", number: 842 },
    ],
    url: "https://github.com/livekit/livekit-cli",
  },
  {
    repo: "livekit/server-sdk-go",
    name: "LiveKit Server SDK Go",
    stars: "500+",
    prs: [
      { title: "cloudagents: increase scanner buffer to avoid token too long errors", number: 903 },
    ],
    url: "https://github.com/livekit/server-sdk-go",
  },
  {
    repo: "livekit/rust-sdks",
    name: "LiveKit Rust SDKs",
    stars: "300+",
    prs: [
      { title: "webrtc-sys: don't panic when C++ hands us a malformed RtcError string", number: 1098 },
    ],
    url: "https://github.com/livekit/rust-sdks",
  },
  {
    repo: "pterm/pterm",
    name: "pterm",
    stars: "5K+",
    prs: [
      { title: "fix: BasicTextPrinter.Sprintln appends two newlines instead of one", number: 784 },
      { title: "fix: InteractiveMultiselect right arrow selects only filtered options", number: 785 },
      { title: "fix(spinner): remove data race on SpinnerPrinter IsActive and Text", number: 786 },
      { title: "fix(table): use unicode vertical bar in default Separator", number: 787 },
    ],
    url: "https://github.com/pterm/pterm",
  },
  {
    repo: "charmbracelet/bubbles",
    name: "charmbracelet/bubbles",
    stars: "5K+",
    prs: [
      { title: "list: fix RemoveItem using wrong index when a filter is active", number: 970 },
      { title: "fix(textinput): stop applying Text/Placeholder style to padding", number: 973 },
      { title: "fix(textarea): stop wordLeft from spinning on an empty buffer", number: 974 },
      { title: "textinput: render the full placeholder when Width is 0", number: 976 },
      { title: "stopwatch: default Interval to 1s in New() to match the documented default", number: 985 },
    ],
    url: "https://github.com/charmbracelet/bubbles",
  },
  {
    repo: "charmbracelet/log",
    name: "charmbracelet/log",
    stars: "2K+",
    prs: [
      { title: "Share level pointer so child loggers inherit parent level changes", number: 209 },
      { title: "fix: share mutex between a logger and its With() clones", number: 210 },
      { title: "fix: don't drop user keyvals named like reserved keys", number: 211 },
    ],
    url: "https://github.com/charmbracelet/log",
  },
  {
    repo: "uber-go/goleak",
    name: "goleak",
    stars: "4K+",
    prs: [
      { title: "IgnoreAnyFunction: also check the created-by frame", number: 143 },
      { title: "filter: add default filter for the pure-Go DNS resolver", number: 144 },
      { title: "docs(IgnoreCurrent): warn that the snapshot happens at call time", number: 145 },
    ],
    url: "https://github.com/uber-go/goleak",
  },
  {
    repo: "jmoiron/sqlx",
    name: "jmoiron/sqlx",
    stars: "16K+",
    prs: [
      { title: "In: skip ? inside SQL comments and string literals", number: 984 },
      { title: "named: support PostgreSQL :: cast directly after a named param", number: 985 },
    ],
    url: "https://github.com/jmoiron/sqlx",
  },
  {
    repo: "mattn/go-sqlite3",
    name: "go-sqlite3",
    stars: "8K+",
    prs: [
      { title: "Fix wrong arg count in Exec's \"not enough args\" error", number: 1398 },
    ],
    url: "https://github.com/mattn/go-sqlite3",
  },
  {
    repo: "google/uuid",
    name: "google/uuid",
    stars: "5K+",
    prs: [
      { title: "null: fix NullUUID.Scan returning Valid=true for empty string/bytes", number: 216 },
    ],
    url: "https://github.com/google/uuid",
  },
  {
    repo: "hashicorp/go-retryablehttp",
    name: "go-retryablehttp",
    stars: "2K+",
    prs: [
      { title: "Don't start backoff timer if it would exceed context deadline", number: 284 },
    ],
    url: "https://github.com/hashicorp/go-retryablehttp",
  },
  {
    repo: "coreos/go-oidc",
    name: "go-oidc",
    stars: "2K+",
    prs: [
      { title: "oidc: expose typed error and sentinel for issuer-mismatch failures", number: 481 },
    ],
    url: "https://github.com/coreos/go-oidc",
  },
  {
    repo: "spf13/afero",
    name: "spf13/afero",
    stars: "6K+",
    prs: [
      { title: "MemMapFs: Mkdir now errors when the parent directory doesn't exist", number: 599 },
    ],
    url: "https://github.com/spf13/afero",
  },
  {
    repo: "nats-io/nats.go",
    name: "nats.go",
    stars: "6K+",
    prs: [
      { title: "kv: reject keys with consecutive dots in keyValid and searchKeyValid", number: 2076, status: "merged" },
    ],
    url: "https://github.com/nats-io/nats.go",
  },
  {
    repo: "go-playground/validator",
    name: "validator",
    stars: "17K+",
    prs: [
      { title: "Anchor cron regex so substrings can't pass validation", number: 1578 },
    ],
    url: "https://github.com/go-playground/validator",
  },
  {
    repo: "uber-go/atomic",
    name: "uber-go/atomic",
    stars: "2K+",
    prs: [
      { title: "atomic.Time: add MarshalJSON / UnmarshalJSON", number: 208 },
      { title: "use CompareAndSwap instead of the deprecated CAS shim internally", number: 209 },
    ],
    url: "https://github.com/uber-go/atomic",
  },
  {
    repo: "gorilla/schema",
    name: "gorilla/schema",
    stars: "1K+",
    prs: [
      { title: "decoder: don't panic when path crosses an unexported pointer field", number: 243 },
    ],
    url: "https://github.com/gorilla/schema",
  },
  {
    repo: "gorilla/csrf",
    name: "gorilla/csrf",
    stars: "1K+",
    prs: [
      { title: "csrf: reject Origin: null as an opaque origin", number: 207 },
    ],
    url: "https://github.com/gorilla/csrf",
  },
  {
    repo: "gorilla/sessions",
    name: "gorilla/sessions",
    stars: "3K+",
    prs: [
      { title: "registry: don't panic when store.New returns a nil session", number: 291 },
    ],
    url: "https://github.com/gorilla/sessions",
  },
  {
    repo: "go-rod/rod",
    name: "go-rod",
    stars: "5K+",
    prs: [
      { title: "fix: clear per-session CDP states when a page closes", number: 1235 },
    ],
    url: "https://github.com/go-rod/rod",
  },
  {
    repo: "gocolly/colly",
    name: "colly",
    stars: "25K+",
    prs: [
      { title: "drop deprecated rand.Seed call in httpBackend.Init", number: 873, status: "merged" },
      { title: "queue: don't block AddRequest after Run has returned", number: 876 },
    ],
    url: "https://github.com/gocolly/colly",
  },
  {
    repo: "allegro/bigcache",
    name: "bigcache",
    stars: "8K+",
    prs: [
      { title: "shard: skip hashmapStats allocation when stats are disabled", number: 423 },
    ],
    url: "https://github.com/allegro/bigcache",
  },
  {
    repo: "kataras/iris",
    name: "iris",
    stars: "26K+",
    prs: [
      { title: "docs: fix broken Movies Service link in _examples README", number: 2606 },
    ],
    url: "https://github.com/kataras/iris",
  },
  {
    repo: "mingrammer/flog",
    name: "flog",
    stars: "1K+",
    prs: [
      { title: "drop deprecated rand.Seed call in main", number: 70 },
    ],
    url: "https://github.com/mingrammer/flog",
  },
  {
    repo: "valyala/fastjson",
    name: "fastjson",
    stars: "2K+",
    prs: [
      { title: "util: replace deprecated reflect.StringHeader/SliceHeader", number: 121 },
    ],
    url: "https://github.com/valyala/fastjson",
  },
  {
    repo: "aymanbagabas/go-pty",
    name: "go-pty",
    stars: "200+",
    prs: [
      { title: "cmd_windows: return *exec.ExitError on non-zero exit", number: 50, status: "merged" },
    ],
    url: "https://github.com/aymanbagabas/go-pty",
  },
  {
    repo: "bsm/redislock",
    name: "redislock",
    stars: "1K+",
    prs: [
      { title: "obtain: wrap ctx error with ErrNotObtained when retry deadline hits", number: 84 },
    ],
    url: "https://github.com/bsm/redislock",
  },
  {
    repo: "r3labs/sse",
    name: "r3labs/sse",
    stars: "2K+",
    prs: [
      { title: "test: poll goroutine count to deflake TestSubscribeWithContextDone", number: 191 },
    ],
    url: "https://github.com/r3labs/sse",
  },
  {
    repo: "muesli/mango",
    name: "mango",
    stars: "200+",
    prs: [
      { title: "feat: honor SOURCE_DATE_EPOCH for the man page heading timestamp", number: 28 },
    ],
    url: "https://github.com/muesli/mango",
  },
  {
    repo: "muesli/gamut",
    name: "gamut",
    stars: "1K+",
    prs: [
      { title: "palette: switch Color literals to keyed form to silence go vet", number: 26 },
    ],
    url: "https://github.com/muesli/gamut",
  },
  {
    repo: "muesli/gitcha",
    name: "gitcha",
    stars: "100+",
    prs: [
      { title: "fix: don't ignore-match the root path itself in FindFiles", number: 9 },
    ],
    url: "https://github.com/muesli/gitcha",
  },
  {
    repo: "coreos/go-iptables",
    name: "go-iptables",
    stars: "600+",
    prs: [
      { title: "iptables: return error from ListById when chain has no matching rule", number: 136 },
    ],
    url: "https://github.com/coreos/go-iptables",
  },
  {
    repo: "fatih/structtag",
    name: "structtag",
    stars: "500+",
    prs: [
      { title: "export sentinel errors so callers can use errors.Is", number: 27 },
      { title: "docs: rewrite Tags.Get doc comment", number: 28 },
    ],
    url: "https://github.com/fatih/structtag",
  },
  {
    repo: "bwmarrin/discordgo",
    name: "discordgo",
    stars: "5K+",
    prs: [
      { title: "fix: nil-check wsConn in Op1 heartbeat and ChannelVoiceJoinManual", number: 1719 },
    ],
    url: "https://github.com/bwmarrin/discordgo",
  },
  {
    repo: "go-playground/locales",
    name: "locales",
    stars: "1K+",
    prs: [
      { title: "docs: clarify Ordinal/CardinalPluralRule README example output", number: 51 },
    ],
    url: "https://github.com/go-playground/locales",
  },
  {
    repo: "alexedwards/scs",
    name: "scs",
    stars: "2K+",
    prs: [
      { title: "gormstore: export Session for callers using custom migration tooling", number: 263 },
    ],
    url: "https://github.com/alexedwards/scs",
  },
  {
    repo: "rs/xid",
    name: "xid",
    stars: "5K+",
    prs: [
      { title: "docs(NewWithTime): note 4-byte timestamp can't hold post-2106 times", number: 116 },
    ],
    url: "https://github.com/rs/xid",
  },
  {
    repo: "chasefleming/elem-go",
    name: "elem-go",
    stars: "500+",
    prs: [
      { title: "feat: add Wbr element constructor", number: 175 },
      { title: "feat: add Track element constructor", number: 176 },
      { title: "feat: add Picture element constructor", number: 177 },
      { title: "feat: add Bdi and Bdo element constructors", number: 178 },
      { title: "feat(attrs): add ClassNames helper for conditional class lists", number: 179 },
    ],
    url: "https://github.com/chasefleming/elem-go",
  },
  {
    repo: "svix/svix-webhooks",
    name: "svix-webhooks",
    stars: "3K+",
    prs: [
      { title: "csharp: use Random.Shared for svix-req-id", number: 2335, status: "merged" },
    ],
    url: "https://github.com/svix/svix-webhooks",
  },
  {
    repo: "stretchr/testify",
    name: "testify",
    stars: "23K+",
    prs: [
      { title: "assert: don't crash diff() when spew panics on awkward inputs", number: 1894 },
    ],
    url: "https://github.com/stretchr/testify",
  },
  {
    repo: "cosmos/cosmos-sdk",
    name: "cosmos-sdk",
    stars: "6K+",
    prs: [
      { title: "types/query: saturate Paginate end when offset+limit overflows", number: 26430, status: "merged" },
    ],
    url: "https://github.com/cosmos/cosmos-sdk",
  },
  {
    repo: "elastic/beats",
    name: "beats",
    stars: "12K+",
    prs: [
      { title: "filebeat: nil-check UDP RemoteAddr before formatting in debug log", number: 50770, status: "merged" },
    ],
    url: "https://github.com/elastic/beats",
  },
  {
    repo: "google/go-jsonnet",
    name: "go-jsonnet",
    stars: "1.6K+",
    prs: [
      { title: "parseYaml: drop the stray null when the stream starts with comments", number: 875 },
    ],
    url: "https://github.com/google/go-jsonnet",
  },
  {
    repo: "knadh/koanf",
    name: "koanf",
    stars: "3K+",
    prs: [
      { title: "Bools: return the matched []bool, not the nil intermediate", number: 416, status: "merged" },
    ],
    url: "https://github.com/knadh/koanf",
  },
  {
    repo: "labstack/echo",
    name: "Echo",
    stars: "31K+",
    prs: [
      { title: "fix(binder): MustUnixTime docs say time.Time, not time.Duration", number: 2988, status: "merged" },
    ],
    url: "https://github.com/labstack/echo",
  },
  {
    repo: "charmbracelet/bubbletea",
    name: "Bubble Tea",
    stars: "33K+",
    prs: [
      { title: "docs: fix Init signature and Cmd usage in godoc examples", number: 1703 },
    ],
    url: "https://github.com/charmbracelet/bubbletea",
  },
  {
    repo: "nats-io/nats.go",
    name: "nats.go",
    stars: "5K+",
    prs: [
      { title: "kv: reject keys with consecutive dots in keyValid and searchKeyValid", number: 2076, status: "merged" },
      { title: "iter: don't yield a phantom (nil, nil) after MsgsTimeout's ErrTimeout", number: 2093 },
    ],
    url: "https://github.com/nats-io/nats.go",
  },
  {
    repo: "avast/retry-go",
    name: "retry-go",
    stars: "1.7K+",
    prs: [
      { title: "options: fix newRetrierCore typo (was newRetrieerCore)", number: 156 },
    ],
    url: "https://github.com/avast/retry-go",
  },
  {
    repo: "goccy/go-json",
    name: "go-json",
    stars: "3.6K+",
    prs: [
      { title: "path: fix godoc prefix on UsedDoubleQuotePathSelector", number: 580 },
    ],
    url: "https://github.com/goccy/go-json",
  },
  {
    repo: "charmbracelet/wish",
    name: "wish",
    stars: "2K+",
    prs: [
      { title: "options: fix WithBanner / WithBannerHandler godoc to say 'returns'", number: 553 },
    ],
    url: "https://github.com/charmbracelet/wish",
  },
  {
    repo: "deckarep/golang-set",
    name: "golang-set",
    stars: "4K+",
    prs: [
      { title: "set: complete two truncated doc comments", number: 185 },
    ],
    url: "https://github.com/deckarep/golang-set",
  },
  {
    repo: "scipy/scipy",
    name: "SciPy",
    stars: "13K+",
    prs: [
      { title: "DOC: fix 'paramater' typo in resample docstring", number: 25205, status: "merged" },
    ],
    url: "https://github.com/scipy/scipy",
  },
  {
    repo: "scikit-learn/scikit-learn",
    name: "scikit-learn",
    stars: "62K+",
    prs: [
      { title: "Drop duplicate 'the the' in plot_stack_predictors example comment", number: 34104, status: "merged" },
    ],
    url: "https://github.com/scikit-learn/scikit-learn",
  },
  {
    repo: "matplotlib/matplotlib",
    name: "matplotlib",
    stars: "20K+",
    prs: [
      { title: "Drop duplicate 'the the' in two doc comments", number: 31741, status: "merged" },
    ],
    url: "https://github.com/matplotlib/matplotlib",
  },
  {
    repo: "networkx/networkx",
    name: "NetworkX",
    stars: "15K+",
    prs: [
      { title: "leiden: fix 'wen' + duplicate 'the the' in q_add comment", number: 8662, status: "merged" },
    ],
    url: "https://github.com/networkx/networkx",
  },
  {
    repo: "python-trio/trio",
    name: "Trio (Python async)",
    stars: "6K+",
    prs: [
      { title: "_highlevel_open_tcp_stream: drop duplicate 'the' from pick-port comment", number: 3443, status: "merged" },
    ],
    url: "https://github.com/python-trio/trio",
  },
];

export const other: Contribution[] = [
  {
    repo: "react-hook-form/react-hook-form",
    name: "react-hook-form",
    stars: "42K+",
    prs: [
      { title: "fix: deepEqual short-circuits on host objects with no own keys", number: 13484 },
    ],
    url: "https://github.com/react-hook-form/react-hook-form",
  },
  {
    repo: "charmbracelet/lipgloss",
    name: "lipgloss",
    stars: "9K+",
    prs: [
      { title: "GetBorder* bool getters return true when only BorderStyle is set", number: 675 },
      { title: "fix(tree): stop swapping Offset start and end", number: 676 },
      { title: "collapse newlines to spaces in inline mode", number: 680 },
    ],
    url: "https://github.com/charmbracelet/lipgloss",
  },
  {
    repo: "charmbracelet/glamour",
    name: "glamour",
    stars: "3K+",
    prs: [
      { title: "fix(ansi): honor Conceal in renderText", number: 550 },
      { title: "fix(ansi): handle all CommonMark backslash escapes", number: 551 },
    ],
    url: "https://github.com/charmbracelet/glamour",
  },
  {
    repo: "charmbracelet/huh",
    name: "huh",
    stars: "5K+",
    prs: [{ title: "Scope navigation messages to their originating form", number: 778 }],
    url: "https://github.com/charmbracelet/huh",
  },
  {
    repo: "charmbracelet/skate",
    name: "skate",
    stars: "2K+",
    prs: [{ title: "feat(list): show single-line previews for long/multiline values", number: 177 }],
    url: "https://github.com/charmbracelet/skate",
  },
  {
    repo: "compose-spec/compose-go",
    name: "compose-go",
    stars: "600+",
    prs: [{ title: "types: add Options field to IPAMConfig", number: 870 }],
    url: "https://github.com/compose-spec/compose-go",
  },
  {
    repo: "goccy/go-yaml",
    name: "goccy/go-yaml",
    stars: "3K+",
    prs: [
      { title: "parser: keep grouping trailing documents after adjacent ---", number: 877 },
      { title: "printer: check Alias not Anchor in the AliasType branch", number: 879 },
      { title: "ast: keep trailing blank lines when rendering |+ literals", number: 880 },
      { title: "playground: add Docs link to pkg.go.dev", number: 881 },
    ],
    url: "https://github.com/goccy/go-yaml",
  },
  {
    repo: "pelletier/go-toml",
    name: "pelletier/go-toml",
    stars: "5K+",
    prs: [{ title: "marshaler: respect TextMarshaler when checking omitempty on structs", number: 1060 }],
    url: "https://github.com/pelletier/go-toml",
  },
  {
    repo: "sashabaranov/go-openai",
    name: "sashabaranov/go-openai",
    stars: "10K+",
    prs: [
      { title: "stream_reader: stop wrapping nil APIError into \"error, <nil>\"", number: 1107 },
      { title: "form_builder: always set a Content-Type on reader-based form parts", number: 1108 },
    ],
    url: "https://github.com/sashabaranov/go-openai",
  },
  {
    repo: "caarlos0/env",
    name: "caarlos0/env",
    stars: "5K+",
    prs: [
      { title: "respect env values over non-zero fields under SetDefaultsForZeroValuesOnly", number: 420 },
      { title: "feat: AllowEmpty option to keep empty env values instead of defaults", number: 421 },
    ],
    url: "https://github.com/caarlos0/env",
  },
  {
    repo: "charmbracelet/fang",
    name: "fang",
    stars: "1K+",
    prs: [
      { title: "style the --version output to match the rest of fang", number: 98 },
      { title: "style 'unknown help topic' errors", number: 99 },
    ],
    url: "https://github.com/charmbracelet/fang",
  },
  {
    repo: "bradfitz/gomemcache",
    name: "gomemcache",
    stars: "1K+",
    prs: [{ title: "Ping returns ErrNoServers when no servers are configured", number: 195 }],
    url: "https://github.com/bradfitz/gomemcache",
  },
  {
    repo: "go-chi/chi",
    name: "chi",
    stars: "20K+",
    prs: [
      { title: "middleware: thread useColor through Panic so NoColor logger emits plain text", number: 1094 },
      { title: "middleware: GetHead advertises HEAD in the 405 Allow header", number: 1095 },
      { title: "mux: dedupe the Allow header on 405 responses", number: 1096 },
    ],
    url: "https://github.com/go-chi/chi",
  },
  {
    repo: "xeipuuv/gojsonschema",
    name: "gojsonschema",
    stars: "2K+",
    prs: [{ title: "schema: fix copy-paste typo in allOf-must-be-array error", number: 388 }],
    url: "https://github.com/xeipuuv/gojsonschema",
  },
  {
    repo: "cli/go-gh",
    name: "go-gh",
    stars: "1K+",
    prs: [{ title: "browser: handle launcher paths that contain spaces", number: 223 }],
    url: "https://github.com/cli/go-gh",
  },
  {
    repo: "golang-migrate/migrate",
    name: "golang-migrate",
    stars: "16K+",
    prs: [{ title: "postgres/pgx: don't leak the conn from WithInstance when init fails", number: 1397 }],
    url: "https://github.com/golang-migrate/migrate",
  },
  {
    repo: "vouch/vouch-proxy",
    name: "vouch-proxy",
    stars: "3K+",
    prs: [{ title: "cfg: respect VOUCH_LOGLEVEL when no config file value is set", number: 610 }],
    url: "https://github.com/vouch/vouch-proxy",
  },
  {
    repo: "rclone/rclone",
    name: "rclone",
    stars: "48K+",
    prs: [{ title: "operations: fix DeleteFile godoc, it doesn't honor --backup-dir", number: 9440 }],
    url: "https://github.com/rclone/rclone",
  },
  {
    repo: "mholt/archives",
    name: "archives",
    stars: "1K+",
    prs: [{ title: "fs: make ArchiveFS.Sub return a new FS rooted at the joined prefix", number: 70 }],
    url: "https://github.com/mholt/archives",
  },
  {
    repo: "chzyer/readline",
    name: "readline",
    stars: "8K+",
    prs: [{ title: "example/readline-demo: add missing os import", number: 265 }],
    url: "https://github.com/chzyer/readline",
  },
  {
    repo: "hibiken/asynq",
    name: "asynq",
    stars: "11K+",
    prs: [
      { title: "scheduler: don't log shared-connection close as an error", number: 1135 },
    ],
    url: "https://github.com/hibiken/asynq",
  },
  {
    repo: "alecthomas/kong",
    name: "kong",
    stars: "3K+",
    prs: [
      { title: "Support the env tag on positional arguments", number: 601, status: "merged" },
      { title: "fire AfterApply for env-only flags", number: 600, status: "merged" },
    ],
    url: "https://github.com/alecthomas/kong",
  },
  {
    repo: "uber-go/fx",
    name: "fx",
    stars: "5K+",
    prs: [{ title: "fix the error example to pass a constructor to fx.Provide", number: 1290 }],
    url: "https://github.com/uber-go/fx",
  },
  {
    repo: "muesli/reflow",
    name: "reflow",
    stars: "1K+",
    prs: [{ title: "dedent: respect zero-indent lines when computing the shared indent", number: 83 }],
    url: "https://github.com/muesli/reflow",
  },
  {
    repo: "valyala/quicktemplate",
    name: "quicktemplate",
    stars: "3K+",
    prs: [{ title: "docs: install qtc via go install instead of the dropped go get -u", number: 106 }],
    url: "https://github.com/valyala/quicktemplate",
  },
  {
    repo: "Masterminds/sprig",
    name: "sprig",
    stars: "4K+",
    prs: [
      { title: "add a test for the mod helper", number: 478 },
      { title: "docs: clarify that seq returns a string, not an integer slice", number: 479 },
    ],
    url: "https://github.com/Masterminds/sprig",
  },
  {
    repo: "go-task/slim-sprig",
    name: "slim-sprig",
    stars: "100+",
    prs: [{ title: "drop deprecated rand.Seed init hook", number: 24 }],
    url: "https://github.com/go-task/slim-sprig",
  },
  {
    repo: "tucnak/telebot",
    name: "telebot",
    stars: "4K+",
    prs: [
      { title: "errors: redact bot token from wrapped transport errors", number: 809, status: "merged" },
      { title: "fix(file): default the multipart filename to the on-disk basename", number: 810, status: "merged" },
    ],
    url: "https://github.com/tucnak/telebot",
  },
  {
    repo: "tursodatabase/turso-cli",
    name: "turso-cli",
    stars: "1K+",
    prs: [
      { title: "db unarchive: suggest the group unarchive command when applicable", number: 1041 },
      { title: "from-csv: print sqlite's stderr as text instead of hex", number: 1042 },
      { title: "db create: derive group from source db when forking", number: 1043 },
      { title: "csv-table-name: reject invalid SQLite identifiers up front", number: 1044 },
      { title: "Drop unused token arg from TokensClient.Validate", number: 1045 },
    ],
    url: "https://github.com/tursodatabase/turso-cli",
  },
  {
    repo: "wagslane/go-rabbitmq",
    name: "go-rabbitmq",
    stars: "1K+",
    prs: [{ title: "options: merge queue and exchange args instead of replacing", number: 213 }],
    url: "https://github.com/wagslane/go-rabbitmq",
  },
  {
    repo: "gomarkdown/markdown",
    name: "gomarkdown",
    stars: "2K+",
    prs: [{ title: "docs: drop the dead Try it online link", number: 360 }],
    url: "https://github.com/gomarkdown/markdown",
  },
  {
    repo: "go-jose/go-jose",
    name: "go-jose",
    stars: "2K+",
    prs: [
      { title: "json: report actual JSON kind in UnmarshalText type errors", number: 232 },
      { title: "preserve the original protected header bytes when re-serializing a JWS", number: 233 },
      { title: "remove bare returns outside the json/ fork", number: 234 },
    ],
    url: "https://github.com/go-jose/go-jose",
  },
  {
    repo: "go-kit/kit",
    name: "go-kit",
    stars: "27K+",
    prs: [{ title: "all: replace deprecated io/ioutil usage", number: 1312 }],
    url: "https://github.com/go-kit/kit",
  },
  {
    repo: "urfave/cli",
    name: "urfave/cli",
    stars: "22K+",
    prs: [
      { title: "test: regression for empty positional arg after a flag", number: 2328, status: "merged" },
      { title: "inherit Reader/Writer/ErrWriter from parent on subcommand setup", number: 2329, status: "merged" },
      { title: "v3: yield the version flag's -v alias to a user-defined flag", number: 2330 },
    ],
    url: "https://github.com/urfave/cli",
  },
  {
    repo: "samber/lo",
    name: "lo",
    stars: "20K+",
    prs: [
      { title: "mutable: fix wrong/misleading doc comments on Filter, FilterI, Map, MapI", number: 888, status: "merged" },
      { title: "docs(concat): example uses lo.Concat, not lo.Flatten", number: 889, status: "merged" },
      { title: "mutable: zero out tail slots dropped by Filter and FilterI", number: 890 },
    ],
    url: "https://github.com/samber/lo",
  },
  {
    repo: "launchbadge/sqlx",
    name: "sqlx",
    stars: "14K+",
    prs: [
      { title: "sqlx-cli: use cyan instead of white for help text literals", number: 4263 },
      { title: "sqlx-cli: read confirmation as a plain line, not a raw-mode toggle", number: 4268 },
    ],
    url: "https://github.com/launchbadge/sqlx",
  },
  {
    repo: "fatih/color",
    name: "fatih/color",
    stars: "7K+",
    prs: [{ title: "fix: correct AddBgRGB godoc and tighten both RGB examples", number: 287 }],
    url: "https://github.com/fatih/color",
  },
  {
    repo: "bradleyjkemp/cupaloy",
    name: "cupaloy",
    stars: "400+",
    prs: [{ title: "fix: scrub Go-module-path-invalid chars from snapshot filenames", number: 89 }],
    url: "https://github.com/bradleyjkemp/cupaloy",
  },
  {
    repo: "dustin/go-humanize",
    name: "go-humanize",
    stars: "5K+",
    prs: [{ title: "si: accept the Greek letter mu as an alias for µ in ParseSI", number: 150 }],
    url: "https://github.com/dustin/go-humanize",
  },
  {
    repo: "lima-vm/lima",
    name: "lima",
    stars: "17K+",
    prs: [{ title: "docs: document missing LIMA_CIDATA_* env vars", number: 4988 }],
    url: "https://github.com/lima-vm/lima",
  },
  {
    repo: "charmbracelet/x",
    name: "charm/x",
    stars: "300+",
    prs: [
      { title: "ansi: document that StringWidth treats tabs as zero width", number: 864 },
      { title: "fix(ansi): emit DECSWT/DECSIN with correct OSC numbers and ST", number: 865 },
    ],
    url: "https://github.com/charmbracelet/x",
  },
  {
    repo: "charmbracelet/freeze",
    name: "freeze",
    stars: "5K+",
    prs: [
      { title: "expand --output path so '~' and relative paths land where users expect", number: 267 },
      { title: "help: swap JoinHorizontal/JoinVertical position arguments", number: 268 },
    ],
    url: "https://github.com/charmbracelet/freeze",
  },
  {
    repo: "simonw/sqlite-utils",
    name: "sqlite-utils",
    stars: "2K+",
    prs: [
      { title: "Don't transform empty CSV table that was never created", number: 736 },
      { title: "docs: render --convert and --functions literally in install section", number: 737 },
      { title: "cli: honor --no-headers for table and tabulate-style formats", number: 740 },
    ],
    url: "https://github.com/simonw/sqlite-utils",
  },
  {
    repo: "rust-bakery/nom",
    name: "nom",
    stars: "9K+",
    prs: [{ title: "tests: make issue_848 overflow test portable to 32-bit usize", number: 1881 }],
    url: "https://github.com/rust-bakery/nom",
  },
  {
    repo: "rust-itertools/itertools",
    name: "itertools",
    stars: "3K+",
    prs: [
      { title: "take_while_inclusive: tighten FusedIterator to require I: FusedIterator", number: 1101 },
      { title: "InterleaveShortest: don't overflow size_hint lower bound", number: 1102 },
      { title: "PeekNth: don't panic on peek_nth(usize::MAX)", number: 1103 },
    ],
    url: "https://github.com/rust-itertools/itertools",
  },
  {
    repo: "go-redis/cache",
    name: "go-redis/cache",
    stars: "2K+",
    prs: [
      { title: "local: clamp tinylfu cache size to avoid panic at size 1 or 2", number: 112 },
      { title: "export rediser interface as Rediser", number: 113 },
    ],
    url: "https://github.com/go-redis/cache",
  },
  {
    repo: "cookiecutter/cookiecutter",
    name: "cookiecutter",
    stars: "22K+",
    prs: [{ title: "generate: keep applying overrides after the first invalid one", number: 2223 }],
    url: "https://github.com/cookiecutter/cookiecutter",
  },
  {
    repo: "wailsapp/wails",
    name: "wails",
    stars: "27K+",
    prs: [{ title: "v2: nil-guard Application.Quit so pre-Run shutdown doesn't panic", number: 5468, status: "merged" }],
    url: "https://github.com/wailsapp/wails",
  },
  {
    repo: "grafana/k6",
    name: "k6",
    stars: "27K+",
    prs: [{ title: "fix: trim trailing slashes from cloud login stack URL", number: 6001 }],
    url: "https://github.com/grafana/k6",
  },
  {
    repo: "charmbracelet/colorprofile",
    name: "colorprofile",
    stars: "100+",
    prs: [{ title: "env: honor COLORTERM=truecolor inside tmux", number: 83 }],
    url: "https://github.com/charmbracelet/colorprofile",
  },
  {
    repo: "charmbracelet/pop",
    name: "pop",
    stars: "1K+",
    prs: [{ title: "allow SMTP without credentials for anonymous relays", number: 167 }],
    url: "https://github.com/charmbracelet/pop",
  },
  {
    repo: "charmbracelet/soft-serve",
    name: "soft-serve",
    stars: "8K+",
    prs: [{ title: "serve: don't drop the server start error on the way out", number: 889 }],
    url: "https://github.com/charmbracelet/soft-serve",
  },
  {
    repo: "charmbracelet/glow",
    name: "glow",
    stars: "19K+",
    prs: [
      { title: "include pager stderr in --pager failure messages", number: 948 },
      { title: "fix: expand ~ in style path from glow.yml", number: 949 },
    ],
    url: "https://github.com/charmbracelet/glow",
  },
  {
    repo: "charmbracelet/gum",
    name: "gum",
    stars: "23K+",
    prs: [{ title: "fix(spin): drain PTY copy goroutines before reading stdout/stderr", number: 1075 }],
    url: "https://github.com/charmbracelet/gum",
  },
  {
    repo: "charmbracelet/vhs",
    name: "vhs",
    stars: "16K+",
    prs: [{ title: "kill ttyd on early Evaluate exit and on Start failure", number: 752 }],
    url: "https://github.com/charmbracelet/vhs",
  },
  {
    repo: "golang-jwt/jwt",
    name: "golang-jwt/jwt",
    stars: "8K+",
    prs: [{ title: "mapclaims: stop treating exp=0 as a missing claim", number: 509, status: "merged" }],
    url: "https://github.com/golang-jwt/jwt",
  },
  {
    repo: "go-ldap/ldap",
    name: "go-ldap",
    stars: "2K+",
    prs: [
      { title: "v3/control: replace unchecked type asserts in DecodeControl with comma-ok", number: 589, status: "merged" },
      { title: "fix(conn): parse ldapi:// URLs per RFC 4516", number: 590, status: "merged" },
    ],
    url: "https://github.com/go-ldap/ldap",
  },
  {
    repo: "cli/cli",
    name: "GitHub CLI",
    stars: "53K+",
    prs: [{ title: "docs: drop --repo gh-cli from dnf install lines", number: 13444, status: "merged" }],
    url: "https://github.com/cli/cli",
  },
  {
    repo: "emersion/go-imap",
    name: "go-imap",
    stars: "2K+",
    prs: [{ title: "imapclient: don't tear down the connection on dynamic COPYUID", number: 755 }],
    url: "https://github.com/emersion/go-imap",
  },
  {
    repo: "open-telemetry/opentelemetry-go-contrib",
    name: "otel-go-contrib",
    stars: "2K+",
    prs: [{ title: "detectors/hetzner: respect context in Detect", number: 8999 }],
    url: "https://github.com/open-telemetry/opentelemetry-go-contrib",
  },
  {
    repo: "hetznercloud/hcloud-go",
    name: "hcloud-go (Hetzner Cloud)",
    stars: "500+",
    prs: [{ title: "metadata: add context-aware Client methods", number: 852, status: "merged" }],
    url: "https://github.com/hetznercloud/hcloud-go",
  },
  {
    repo: "rs/cors",
    name: "rs/cors",
    stars: "3K+",
    prs: [{ title: "docs: point Martini link at the active repo", number: 214 }],
    url: "https://github.com/rs/cors",
  },
  {
    repo: "charmbracelet/ssh",
    name: "charmbracelet/ssh",
    stars: "1K+",
    prs: [{ title: "docs: replace dead Gliderlabs Slack link with Charm Discord", number: 42 }],
    url: "https://github.com/charmbracelet/ssh",
  },
  {
    repo: "tsenart/vegeta",
    name: "vegeta",
    stars: "23K+",
    prs: [{ title: "docs: point TDigest reference at javadoc.io", number: 761 }],
    url: "https://github.com/tsenart/vegeta",
  },
  {
    repo: "uutils/coreutils",
    name: "uutils/coreutils",
    stars: "20K+",
    prs: [
      { title: "sort: don't accept leading '+' in numeric (-n) sort", number: 12336 },
      { title: "more: swap -f and -l short flags to match GNU/util-linux", number: 12337 },
      { title: "chmod: report Permission denied instead of No such file when stat fails", number: 12338 },
      { title: "nohup: create nohup.out with mode 0600", number: 12339, status: "merged" },
      { title: "dd: don't silently swallow truncate failures", number: 12340 },
      { title: "id: don't exit 1 when uid/gid name lookup fails in default output", number: 12341 },
    ],
    url: "https://github.com/uutils/coreutils",
  },
  {
    repo: "gleam-lang/gleam",
    name: "Gleam",
    stars: "18K+",
    prs: [
      { title: "remove: don't fail when manifest.toml is missing", number: 5721, status: "merged" },
      { title: "Simplify the failed Hex API key decryption error message", number: 5741 },
      { title: "Show a readable error when reverting a release that's too old", number: 5742 },
      { title: "publish: check README existence directly instead of matching OS error", number: 5771 },
    ],
    url: "https://github.com/gleam-lang/gleam",
  },
  {
    repo: "cross-rs/cross",
    name: "cross",
    stars: "7K+",
    prs: [{ title: "shared: point users at cargo and cross-toolchains in no-image error", number: 1775 }],
    url: "https://github.com/cross-rs/cross",
  },
  {
    repo: "jj-vcs/jj",
    name: "Jujutsu (jj)",
    stars: "15K+",
    prs: [{ title: "templates: expose builtin_workspace_list alias", number: 9518 }],
    url: "https://github.com/jj-vcs/jj",
  },
  {
    repo: "BurntSushi/walkdir",
    name: "walkdir",
    stars: "1K+",
    prs: [{ title: "include parent directory path on mid-iteration errors", number: 211 }],
    url: "https://github.com/BurntSushi/walkdir",
  },
  {
    repo: "risingwavelabs/risingwave",
    name: "RisingWave",
    stars: "9K+",
    prs: [{ title: "test(interval): cover mid-string +/- separators", number: 25676 }],
    url: "https://github.com/risingwavelabs/risingwave",
  },
  {
    repo: "jbeder/yaml-cpp",
    name: "yaml-cpp",
    stars: "5K+",
    prs: [{ title: "emit secondary tag handles (e.g. !!str) on Node::SetTag", number: 1437 }],
    url: "https://github.com/jbeder/yaml-cpp",
  },
  {
    repo: "quickwit-oss/tantivy",
    name: "tantivy",
    stars: "12K+",
    prs: [{ title: "postings: add a basic test for TermFrequencyRecorder", number: 2934 }],
    url: "https://github.com/quickwit-oss/tantivy",
  },
  {
    repo: "BurntSushi/fst",
    name: "fst",
    stars: "2K+",
    prs: [{ title: "docs: fix memmap2 link and drop unused Streamer import", number: 180 }],
    url: "https://github.com/BurntSushi/fst",
  },
  {
    repo: "betterleaks/betterleaks",
    name: "betterleaks",
    stars: "950+",
    prs: [{ title: "cmd: fail when --experiments has unknown values", number: 135 }],
    url: "https://github.com/betterleaks/betterleaks",
  },
  {
    repo: "gobuffalo/fizz",
    name: "fizz",
    stars: "100+",
    prs: [{ title: "translators/postgres: respect null: false in change_column", number: 144 }],
    url: "https://github.com/gobuffalo/fizz",
  },
  {
    repo: "schollz/croc",
    name: "croc",
    stars: "30K+",
    prs: [{ title: "Dockerfile: bump builder image to golang:1.25", number: 1108, status: "merged" }],
    url: "https://github.com/schollz/croc",
  },
  {
    repo: "SchemaStore/schemastore",
    name: "schemastore",
    stars: "3K+",
    prs: [{ title: "claude-code-settings: add MultiEdit to permission rule regex", number: 5701 }],
    url: "https://github.com/SchemaStore/schemastore",
  },
  {
    repo: "twpayne/chezmoi",
    name: "chezmoi",
    stars: "15K+",
    prs: [{ title: "install.sh: map armv6/armv7 uname to chezmoi armv6 release", number: 5063 }],
    url: "https://github.com/twpayne/chezmoi",
  },
  {
    repo: "gorilla/securecookie",
    name: "gorilla/securecookie",
    stars: "900+",
    prs: [{ title: "Add SecureCookie.Err for surfacing deferred configuration errors", number: 92 }],
    url: "https://github.com/gorilla/securecookie",
  },
  {
    repo: "influxdata/influxdb-client-go",
    name: "influxdb-client-go",
    stars: "800+",
    prs: [
      { title: "write/service: handle a nil URL from url.Parse without panicking", number: 427 },
      { title: "write/point: run convertField when AddField re-sets an existing key", number: 428 },
      { title: "api/write: poll writeBuffer length, not the unbuffered info channel", number: 429 },
    ],
    url: "https://github.com/influxdata/influxdb-client-go",
  },
  {
    repo: "exoscale/terraform-provider-exoscale",
    name: "terraform-provider-exoscale",
    stars: "38+",
    prs: [{ title: "instance: don't panic reading an instance destroyed out-of-band", number: 536 }],
    url: "https://github.com/exoscale/terraform-provider-exoscale",
  },
  {
    repo: "quinn-rs/quinn",
    name: "quinn",
    stars: "4K+",
    prs: [{ title: "streams: reject STOP_SENDING and MAX_STREAM_DATA beyond the stream limit", number: 2652 }],
    url: "https://github.com/quinn-rs/quinn",
  },
  {
    repo: "coredns/coredns",
    name: "coredns",
    stars: "12K+",
    prs: [{ title: "plugin/file: canonicalize escape form in owner names", number: 8109, status: "merged" }],
    url: "https://github.com/coredns/coredns",
  },
  {
    repo: "go-sql-driver/mysql",
    name: "go-sql-driver/mysql",
    stars: "14K+",
    prs: [{ title: "dsn: default Net to tcp in NewConfig so Addr-only configs round-trip", number: 1770, status: "merged" }],
    url: "https://github.com/go-sql-driver/mysql",
  },
  {
    repo: "brimdata/super",
    name: "super",
    stars: "1K+",
    prs: [{ title: "semantic: resolve table-qualified column refs over dynamic joins", number: 6975 }],
    url: "https://github.com/brimdata/super",
  },
  {
    repo: "bloomberg/pystack",
    name: "pystack",
    stars: "1K+",
    prs: [{ title: "conftest: exit with a clear message when ptrace_scope blocks the test suite", number: 309, status: "merged" }],
    url: "https://github.com/bloomberg/pystack",
  },
  {
    repo: "pressly/goose",
    name: "goose",
    stars: "8K+",
    prs: [{ title: "Use datetime for the MySQL goose_db_version tstamp column (Y2K38 fix)", number: 1074 }],
    url: "https://github.com/pressly/goose",
  },
  {
    repo: "ollama/ollama",
    name: "ollama",
    stars: "140K+",
    prs: [{ title: "llm: raise the completion scanner buffer to 8MB", number: 16244 }],
    url: "https://github.com/ollama/ollama",
  },
  {
    repo: "freenet/freenet-core",
    name: "freenet-core",
    stars: "2K+",
    prs: [{ title: "server: guard web contract unpack against path traversal", number: 4204 }],
    url: "https://github.com/freenet/freenet-core",
  },
  {
    repo: "VictoriaMetrics/VictoriaMetrics",
    name: "VictoriaMetrics",
    stars: "13K+",
    prs: [{ title: "app/vmalert: don't evaluate a rule one interval in the future", number: 10987 }],
    url: "https://github.com/VictoriaMetrics/VictoriaMetrics",
  },
  {
    repo: "simonw/llm",
    name: "llm",
    stars: "11K+",
    prs: [
      { title: "Keep monotonic_ulid monotonic when the system clock moves backward", number: 1454 },
      { title: "Recognize ${braced} variables in template extract_vars", number: 1455 },
    ],
    url: "https://github.com/simonw/llm",
  },
  {
    repo: "tobymao/sqlglot",
    name: "sqlglot",
    stars: "9K+",
    prs: [{ title: "Raise ParseError, not IndexError, on an unclosed JSONPath filter", number: 7665, status: "merged" }],
    url: "https://github.com/tobymao/sqlglot",
  },
  {
    repo: "Delgan/loguru",
    name: "loguru",
    stars: "19K+",
    prs: [
      { title: "Fix parsing of 12-hour rotation times without seconds", number: 1474, status: "merged" },
      { title: "docs(_string_parsers): parse_size returns bytes, not bits", number: 1477, status: "merged" },
    ],
    url: "https://github.com/Delgan/loguru",
  },
  {
    repo: "python-jsonschema/referencing",
    name: "referencing",
    stars: "260+",
    prs: [{ title: "Fix Resource.anchors docstring: returns anchors, not the identifier", number: 358, status: "merged" }],
    url: "https://github.com/python-jsonschema/referencing",
  },
  {
    repo: "python-humanize/humanize",
    name: "humanize",
    stars: "700+",
    prs: [{ title: "Return an empty string from natural_list for an empty list", number: 318, status: "merged" }],
    url: "https://github.com/python-humanize/humanize",
  },
  {
    repo: "segmentio/encoding",
    name: "segmentio/encoding",
    stars: "1.1K+",
    prs: [
      { title: "json: return writer errors from Encoder.Encode", number: 163 },
    ],
    url: "https://github.com/segmentio/encoding",
  },
  {
    repo: "vektah/gqlparser",
    name: "gqlparser",
    stars: "1.5K+",
    prs: [
      { title: "lexer: render invalid-character codepoint as hex, not decimal", number: 431 },
    ],
    url: "https://github.com/vektah/gqlparser",
  },
  {
    repo: "eko/gocache",
    name: "gocache",
    stars: "2.5K+",
    prs: [
      { title: "cache(chain): return an error from Get when no caches are configured", number: 309 },
    ],
    url: "https://github.com/eko/gocache",
  },
  {
    repo: "buger/jsonparser",
    name: "jsonparser",
    stars: "5.5K+",
    prs: [
      { title: "fix: don't panic on empty key when path enters an array", number: 284 },
    ],
    url: "https://github.com/buger/jsonparser",
  },
  {
    repo: "rivo/tview",
    name: "tview",
    stars: "11K+",
    prs: [
      { title: "table: stop InputHandler hanging when every cell is non-selectable", number: 1155 },
    ],
    url: "https://github.com/rivo/tview",
  },
  {
    repo: "spf13/pflag",
    name: "pflag",
    stars: "2.5K+",
    prs: [
      { title: "ip: stop GetIP erroring when the IP flag has a nil default", number: 478 },
    ],
    url: "https://github.com/spf13/pflag",
  },
  {
    repo: "cucumber/godog",
    name: "godog",
    stars: "2.1K+",
    prs: [
      { title: "suite: recover from panics in after-step and after-scenario hooks", number: 745 },
    ],
    url: "https://github.com/cucumber/godog",
  },
  {
    repo: "shopspring/decimal",
    name: "decimal",
    stars: "7K+",
    prs: [
      { title: "fix: NumDigits underreports for some exact powers of ten", number: 425 },
    ],
    url: "https://github.com/shopspring/decimal",
  },
  {
    repo: "a-h/templ",
    name: "templ",
    stars: "11K+",
    prs: [
      { title: "examples/suspense: buffer the slot channel so producers can't leak", number: 1401 },
    ],
    url: "https://github.com/a-h/templ",
  },
  {
    repo: "go-resty/resty",
    name: "resty",
    stars: "11K+",
    prs: [
      { title: "fix: separate URL from -F/-d in buildCurlCmd output", number: 1165, status: "merged" },
    ],
    url: "https://github.com/go-resty/resty",
  },
  {
    repo: "charmbracelet/keygen",
    name: "charmbracelet/keygen",
    stars: "170+",
    prs: [
      { title: "docs: fix two godoc typos in keygen.go", number: 56 },
    ],
    url: "https://github.com/charmbracelet/keygen",
  },
  {
    repo: "samber/mo",
    name: "samber/mo",
    stars: "3.3K+",
    prs: [
      { title: "docs: fix two typos in option.go", number: 106, status: "merged" },
    ],
    url: "https://github.com/samber/mo",
  },
  {
    repo: "charmbracelet/harmonica",
    name: "harmonica",
    stars: "1.5K+",
    prs: [
      { title: "docs: fix two godoc typos", number: 26 },
    ],
    url: "https://github.com/charmbracelet/harmonica",
  },
  {
    repo: "spf13/viper",
    name: "viper",
    stars: "30K+",
    prs: [
      { title: "util: parseSizeInBytes returns 0 for single-byte strings like 1B", number: 2132 },
    ],
    url: "https://github.com/spf13/viper",
  },
  {
    repo: "getsentry/sentry-go",
    name: "sentry-go",
    stars: "1K+",
    prs: [
      { title: "fix(log): don't run Emit messages through fmt.Sprintf", number: 1309 },
    ],
    url: "https://github.com/getsentry/sentry-go",
  },
  {
    repo: "labstack/gommon",
    name: "gommon",
    stars: "580+",
    prs: [
      { title: "random: return empty string instead of spinning when length is 0", number: 63 },
    ],
    url: "https://github.com/labstack/gommon",
  },
  {
    repo: "99designs/gqlgen",
    name: "gqlgen",
    stars: "10K+",
    prs: [
      { title: "fix: CoerceList drops elements from typed slices past the first", number: 4194, status: "merged" },
      { title: "chore: drop dead vSlice predecl in codegen template", number: 4197 },
    ],
    url: "https://github.com/99designs/gqlgen",
  },
  {
    repo: "DATA-DOG/go-sqlmock",
    name: "go-sqlmock",
    stars: "6K+",
    prs: [
      { title: "fix: ExpectBegin TxOptions check uses && instead of ||", number: 351 },
    ],
    url: "https://github.com/DATA-DOG/go-sqlmock",
  },
  {
    repo: "wneessen/go-mail",
    name: "go-mail",
    stars: "1.7K+",
    prs: [
      { title: "fix(random): drop the unreachable '-' character from cr", number: 560, status: "merged" },
    ],
    url: "https://github.com/wneessen/go-mail",
  },
];

export const allContributions: Contribution[] = [...notable, ...other];

const allPRs = allContributions.flatMap((c) => c.prs);

export const totalPRs = allPRs.length;
export const totalRepos = allContributions.length;
export const mergedPRs = allPRs.filter((pr) => pr.status === "merged").length;
export const openPRs = totalPRs - mergedPRs;
