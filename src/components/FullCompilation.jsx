import { EDITIONS, LINKS } from "../data/site.js"
import { ArrowUpRight } from "lucide-react"
function Book({ digital }) {
  return (
    <svg viewBox="0 0 160 200" className="h-44 drop-shadow-[0_20px_30px_rgba(0,0,0,.5)]" role="img" aria-label={digital ? "Digital PDF mockup" : "Premium workbook mockup"}>
      <rect x="18" y="10" width="124" height="180" rx="6" fill="rgb(var(--color-panel))" stroke="#2f6df6" strokeOpacity=".6" />
      {!digital && <rect x="18" y="10" width="14" height="180" rx="4" fill="rgb(var(--color-line))" />}
      <text x="88" y="70" textAnchor="middle" fontSize="13" fill="rgb(var(--text-primary))" fontWeight="600">Fuzzie Gauge</text>
      <text x="88" y="90" textAnchor="middle" fontSize="10" fill="#2f6df6">Full Compilation</text>
      <circle cx="88" cy="132" r="20" fill="none" stroke="#5d84ff" strokeDasharray="3 4" />
      <text x="88" y="178" textAnchor="middle" fontSize="8" fill="rgb(var(--text-muted))">{digital ? "PDF" : "WORKBOOK"}</text>
    </svg>
  )
}
export default function FullCompilation() {
  return (
    <section id="compilation" className="mx-auto w-full max-w-[1500px] px-5 py-24 lg:px-10">
      <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink p-8 lg:p-14">
        <p className="label">New Release</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Fuzzie Gauge Full Compilation</h2>
        <p className="mt-4 max-w-2xl text-slate-400">Comprehensive practice, in-depth analysis, and structured preparation in one complete compilation.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EDITIONS.map((e, i) => (
            <article key={e.name} className="card flex items-center gap-6 p-6">
              <Book digital={i === 1} />
              <div><p className="text-xs uppercase tracking-widest text-slate-500">{e.sub}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{e.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-400">{e.pts.map((p) => <li key={p}>· {p}</li>)}</ul></div>
            </article>))}
        </div>
        <a href={LINKS.compilation} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">Explore Editions <ArrowUpRight size={16} /></a>
      </div>
    </section>
  )
}
