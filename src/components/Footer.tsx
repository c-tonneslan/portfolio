export default function Footer() {
  return (
    <footer className="bg-[#f4ede0] text-[#1a1612] border-t border-[#1a1612]/30 px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-4">
          <p className="font-serif italic text-3xl mb-2 leading-none">
            Charlie Tonneslan
          </p>
          <p className="opacity-70">Software engineer · Philadelphia</p>
          <p className="opacity-70 mt-2 max-w-xs">
            Civic, urban, & developer-tooling work, plus a continuing record
            of small fixes in other people&apos;s repositories.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3 font-bold text-[#a83232]">
            ⸺ Reach
          </p>
          <a
            href="mailto:cst0520@gmail.com"
            className="block hover:text-[#a83232] transition-colors"
          >
            cst0520@gmail.com
          </a>
          <a
            href="https://github.com/c-tonneslan"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#a83232] transition-colors"
          >
            github.com/c-tonneslan
          </a>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3 font-bold text-[#a83232]">
            ⸺ Elsewhere
          </p>
          <a
            href="/writing"
            className="block hover:text-[#a83232] transition-colors"
          >
            Writing — bug narratives
          </a>
          <a
            href="/notes"
            className="block hover:text-[#a83232] transition-colors"
          >
            Notes — short technical
          </a>
          <a
            href="/lab"
            className="block hover:text-[#a83232] transition-colors"
          >
            Lab — UI experiments
          </a>
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3 font-bold text-[#a83232]">
            ⸺ Colophon
          </p>
          <p className="font-serif italic">Volume IV, № 41.</p>
          <p className="opacity-70 mt-1">
            Set in Geist Sans & Geist Mono.
            <br />
            Body italic in system serif.
          </p>
          <p className="opacity-70 mt-3">
            Updated{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#1a1612]/15 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-[#6b5e54]">
        <p>© MMXXVI · Charlie Tonneslan</p>
        <p>charlietonneslan.dev · c-tonneslan-portfolio.vercel.app</p>
      </div>
    </footer>
  );
}
