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
    repo: "aquasecurity/trivy",
    name: "Trivy",
    stars: "27K+",
    prs: [
      { title: "fix(nodejs): silently skip package.json files with invalid names", number: 10668 },
    ],
    url: "https://github.com/aquasecurity/trivy",
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
    stars: "24K+",
    prs: [
      { title: "drop deprecated rand.Seed call in httpBackend.Init", number: 873 },
    ],
    url: "https://github.com/gocolly/colly",
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
      { title: "cmd_windows: return *exec.ExitError on non-zero exit", number: 50 },
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
    repo: "chasefleming/elem-go",
    name: "elem-go",
    stars: "500+",
    prs: [
      { title: "feat: add Wbr element constructor", number: 175 },
      { title: "feat: add Track element constructor", number: 176 },
      { title: "feat: add Picture element constructor", number: 177 },
      { title: "feat: add Bdi and Bdo element constructors", number: 178 },
    ],
    url: "https://github.com/chasefleming/elem-go",
  },
];

export const other: Contribution[] = [
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
      { title: "scanner: bump offset over the '#' in scanComment", number: 878 },
      { title: "printer: check Alias not Anchor in the AliasType branch", number: 879 },
      { title: "ast: keep trailing blank lines when rendering |+ literals", number: 880 },
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
    prs: [{ title: "respect env values over non-zero fields under SetDefaultsForZeroValuesOnly", number: 420 }],
    url: "https://github.com/caarlos0/env",
  },
  {
    repo: "charmbracelet/fang",
    name: "fang",
    stars: "1K+",
    prs: [{ title: "style the --version output to match the rest of fang", number: 98 }],
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
      { title: "recover from panics in user-provided callbacks", number: 1134 },
      { title: "scheduler: don't log shared-connection close as an error", number: 1135 },
    ],
    url: "https://github.com/hibiken/asynq",
  },
  {
    repo: "alecthomas/kong",
    name: "kong",
    stars: "3K+",
    prs: [
      { title: "allow ${env} in the help template of a positional argument", number: 599 },
      { title: "fire AfterApply for env-only flags", number: 600 },
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
    prs: [{ title: "errors: redact bot token from wrapped transport errors", number: 809 }],
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
      { title: "inherit Reader/Writer/ErrWriter from parent on subcommand setup", number: 2329 },
      { title: "v3: yield the version flag's -v alias to a user-defined flag", number: 2330 },
    ],
    url: "https://github.com/urfave/cli",
  },
  {
    repo: "samber/lo",
    name: "lo",
    stars: "20K+",
    prs: [
      { title: "mutable: fix wrong/misleading doc comments on Filter, FilterI, Map, MapI", number: 888 },
      { title: "docs(concat): example uses lo.Concat, not lo.Flatten", number: 889 },
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
    prs: [{ title: "ansi: document that StringWidth treats tabs as zero width", number: 864 }],
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
    prs: [{ title: "docs: set smartquotes_action=\"qe\" so '--' doesn't render as an en dash", number: 735 }],
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
    prs: [{ title: "take_while_inclusive: tighten FusedIterator to require I: FusedIterator", number: 1101 }],
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
    repo: "pallets/click",
    name: "click",
    stars: "16K+",
    prs: [{ title: "Don't break hyphenated options across lines in the usage line", number: 3437 }],
    url: "https://github.com/pallets/click",
  },
  {
    repo: "golang-jwt/jwt",
    name: "golang-jwt/jwt",
    stars: "8K+",
    prs: [{ title: "mapclaims: stop treating exp=0 as a missing claim", number: 509 }],
    url: "https://github.com/golang-jwt/jwt",
  },
  {
    repo: "go-ldap/ldap",
    name: "go-ldap",
    stars: "2K+",
    prs: [{ title: "v3/control: replace unchecked type asserts in DecodeControl with comma-ok", number: 589 }],
    url: "https://github.com/go-ldap/ldap",
  },
  {
    repo: "cli/cli",
    name: "GitHub CLI",
    stars: "53K+",
    prs: [{ title: "docs: drop --repo gh-cli from dnf install lines", number: 13444 }],
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
      { title: "nohup: create nohup.out with mode 0600", number: 12339 },
      { title: "dd: don't silently swallow truncate failures", number: 12340 },
      { title: "id: don't exit 1 when uid/gid name lookup fails in default output", number: 12341 },
    ],
    url: "https://github.com/uutils/coreutils",
  },
  {
    repo: "gleam-lang/gleam",
    name: "Gleam",
    stars: "18K+",
    prs: [{ title: "remove: don't fail when manifest.toml is missing", number: 5721 }],
    url: "https://github.com/gleam-lang/gleam",
  },
  {
    repo: "cross-rs/cross",
    name: "cross",
    stars: "7K+",
    prs: [{ title: "shared: point users at cargo and cross-toolchains in no-image error", number: 1775 }],
    url: "https://github.com/cross-rs/cross",
  },
];

export const allContributions: Contribution[] = [...notable, ...other];

const allPRs = allContributions.flatMap((c) => c.prs);

export const totalPRs = allPRs.length;
export const totalRepos = allContributions.length;
export const mergedPRs = allPRs.filter((pr) => pr.status === "merged").length;
export const openPRs = totalPRs - mergedPRs;
