"use client";

import { motion } from "framer-motion";

const contributions = [
  {
    repo: "tailscale/tailscale",
    name: "Tailscale",
    stars: "29K+",
    prs: [
      { title: "Wrap ACME errors with more context for cert timeouts", number: 19688 },
      { title: "Require /etc/synoinfo.conf for Synology distro detection", number: 19689 },
      { title: "Don't emit broken hint for invalid legacy tcp serve args", number: 19690 },
    ],
    url: "https://github.com/tailscale/tailscale",
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
    repo: "hashicorp/go-retryablehttp",
    name: "go-retryablehttp",
    stars: "2K+",
    prs: [
      { title: "Don't start backoff timer if it would exceed context deadline", number: 284 },
    ],
    url: "https://github.com/hashicorp/go-retryablehttp",
  },
  {
    repo: "jackc/pgx",
    name: "pgx",
    stars: "13K+",
    prs: [
      { title: "pgconn: use fresh context for fallback connection in connectPreferred", number: 2554 },
      { title: "pgconn: preserve full error chain in normalizeTimeoutError", number: 2556 },
    ],
    url: "https://github.com/jackc/pgx",
  },
  {
    repo: "compose-spec/compose-go",
    name: "compose-go",
    stars: "600+",
    prs: [
      { title: "types: add Options field to IPAMConfig", number: 870 },
    ],
    url: "https://github.com/compose-spec/compose-go",
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
    repo: "launchbadge/sqlx",
    name: "sqlx",
    stars: "14K+",
    prs: [
      { title: "sqlx-cli: use cyan instead of white for help text literals", number: 4263 },
    ],
    url: "https://github.com/launchbadge/sqlx",
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
    repo: "google/uuid",
    name: "google/uuid",
    stars: "5K+",
    prs: [
      { title: "null: fix NullUUID.Scan returning Valid=true for empty string/bytes", number: 216 },
    ],
    url: "https://github.com/google/uuid",
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
    repo: "charmbracelet/bubbles",
    name: "charmbracelet/bubbles",
    stars: "5K+",
    prs: [
      { title: "list: fix RemoveItem using wrong index when a filter is active", number: 970 },
      { title: "fix(textinput): stop applying Text/Placeholder style to padding", number: 973 },
      { title: "fix(textarea): stop wordLeft from spinning on an empty buffer", number: 974 },
    ],
    url: "https://github.com/charmbracelet/bubbles",
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
      { title: "kv: reject keys with consecutive dots in keyValid and searchKeyValid", number: 2076 },
    ],
    url: "https://github.com/nats-io/nats.go",
  },
  {
    repo: "uber-go/goleak",
    name: "goleak",
    stars: "4K+",
    prs: [
      { title: "IgnoreAnyFunction: also check the created-by frame", number: 143 },
      { title: "filter: add default filter for the pure-Go DNS resolver", number: 144 },
    ],
    url: "https://github.com/uber-go/goleak",
  },
  {
    repo: "charmbracelet/huh",
    name: "huh",
    stars: "5K+",
    prs: [
      { title: "Scope navigation messages to their originating form", number: 778 },
    ],
    url: "https://github.com/charmbracelet/huh",
  },
  {
    repo: "charmbracelet/lipgloss",
    name: "lipgloss",
    stars: "9K+",
    prs: [
      { title: "GetBorder* bool getters return true when only BorderStyle is set", number: 675 },
      { title: "fix(tree): stop swapping Offset start and end", number: 676 },
    ],
    url: "https://github.com/charmbracelet/lipgloss",
  },
  {
    repo: "fatih/color",
    name: "fatih/color",
    stars: "7K+",
    prs: [
      { title: "fix: correct AddBgRGB godoc and tighten both RGB examples", number: 287 },
    ],
    url: "https://github.com/fatih/color",
  },
  {
    repo: "lima-vm/lima",
    name: "lima",
    stars: "17K+",
    prs: [
      { title: "docs: document missing LIMA_CIDATA_* env vars", number: 4988 },
    ],
    url: "https://github.com/lima-vm/lima",
  },
  {
    repo: "uber-go/atomic",
    name: "uber-go/atomic",
    stars: "2K+",
    prs: [
      { title: "atomic.Time: add MarshalJSON / UnmarshalJSON", number: 208 },
    ],
    url: "https://github.com/uber-go/atomic",
  },
  {
    repo: "charmbracelet/skate",
    name: "skate",
    stars: "2K+",
    prs: [
      { title: "feat(list): show single-line previews for long/multiline values", number: 177 },
    ],
    url: "https://github.com/charmbracelet/skate",
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
    repo: "rs/cors",
    name: "rs/cors",
    stars: "3K+",
    prs: [
      { title: "docs: point Martini link at the active repo", number: 214 },
    ],
    url: "https://github.com/rs/cors",
  },
  {
    repo: "charmbracelet/ssh",
    name: "charmbracelet/ssh",
    stars: "1K+",
    prs: [
      { title: "docs: replace dead Gliderlabs Slack link with Charm Discord", number: 42 },
    ],
    url: "https://github.com/charmbracelet/ssh",
  },
  {
    repo: "tsenart/vegeta",
    name: "vegeta",
    stars: "23K+",
    prs: [
      { title: "docs: point TDigest reference at javadoc.io", number: 761 },
    ],
    url: "https://github.com/tsenart/vegeta",
  },
  {
    repo: "bradleyjkemp/cupaloy",
    name: "cupaloy",
    stars: "400+",
    prs: [
      { title: "fix: scrub Go-module-path-invalid chars from snapshot filenames", number: 89 },
    ],
    url: "https://github.com/bradleyjkemp/cupaloy",
  },
  {
    repo: "go-kit/kit",
    name: "go-kit",
    stars: "27K+",
    prs: [
      { title: "all: replace deprecated io/ioutil usage", number: 1312 },
    ],
    url: "https://github.com/go-kit/kit",
  },
  {
    repo: "urfave/cli",
    name: "urfave/cli",
    stars: "22K+",
    prs: [
      { title: "test: regression for empty positional arg after a flag", number: 2328 },
    ],
    url: "https://github.com/urfave/cli",
  },
  {
    repo: "go-jose/go-jose",
    name: "go-jose",
    stars: "2K+",
    prs: [
      { title: "json: report actual JSON kind in UnmarshalText type errors", number: 232 },
    ],
    url: "https://github.com/go-jose/go-jose",
  },
  {
    repo: "goccy/go-yaml",
    name: "goccy/go-yaml",
    stars: "3K+",
    prs: [
      { title: "parser: keep grouping trailing documents after adjacent ---", number: 877 },
    ],
    url: "https://github.com/goccy/go-yaml",
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
    repo: "go-chi/chi",
    name: "go-chi/chi",
    stars: "20K+",
    prs: [
      { title: "middleware: stop double-counting BytesWritten in httpFancyWriter.ReadFrom", number: 1093 },
    ],
    url: "https://github.com/go-chi/chi",
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
    repo: "coreos/go-oidc",
    name: "go-oidc",
    stars: "2K+",
    prs: [
      { title: "oidc: expose typed error and sentinel for issuer-mismatch failures", number: 481 },
    ],
    url: "https://github.com/coreos/go-oidc",
  },
];

export default function OpenSource() {
  const totalPRs = contributions.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <section id="opensource" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Open Source</h2>
          <div className="w-12 h-1 bg-accent rounded mb-4" />
          <p className="text-muted mb-8 max-w-xl">
            {totalPRs} pull request{totalPRs !== 1 ? "s" : ""} across {contributions.length} {contributions.length !== 1 ? "repositories" : "repository"}.
            Bug fixes, performance patches, and security hardening across Go, Rust, TypeScript, C, and C++.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((contrib, i) => (
              <motion.a
                key={contrib.repo}
                href={contrib.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-card-bg border border-card-border rounded-xl p-5 hover:border-accent/30 transition-all block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold group-hover:text-accent transition-colors">
                    {contrib.name}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    {contrib.stars}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {contrib.prs.map((pr) => (
                    <div key={pr.number} className="flex items-start gap-2">
                      <span className="text-green-500 text-xs mt-0.5">PR</span>
                      <span className="text-xs text-muted leading-relaxed">
                        {pr.title}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted/50 font-mono mt-3">
                  {contrib.repo}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
