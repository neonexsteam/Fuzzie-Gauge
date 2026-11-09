import { useEffect, useMemo, useState } from "react"
import { Search, LayoutGrid, List, X } from "lucide-react"
import { ASSESSMENTS, FACETS } from "../data/assessments.js"
import { TRACKS, LINKS } from "../data/site.js"
import AssessmentCard from "./AssessmentCard.jsx"
import CurriculumSelector from "./CurriculumSelector.jsx"
const PAGE = 9
const searchable = (a) => `${a.title} ${a.desc} ${a.stage}`.toLowerCase()
const hit = (a, t) => t.startsWith("@") ? a.stage.toLowerCase().includes(t.slice(1).toLowerCase()) : searchable(a).includes(t.toLowerCase())
export default function AssessmentExplorer() {
  const [tier, setTier] = useState("live"), [track, setTrack] = useState("1.3")
  const [q, setQ] = useState(""), [sel, setSel] = useState({}), [view, setView] = useState("grid"), [n, setN] = useState(PAGE), [loading, setLoading] = useState(false)
  const base = useMemo(() => (tier === "live" ? ASSESSMENTS.filter((a) => a.track === track) : []), [tier, track])
  const res = useMemo(() => {
    const w = q.toLowerCase().split(/\s+/).filter(Boolean)
    return base.filter((a) => w.every((x) => searchable(a).includes(x)) &&
      Object.values(sel).every((ts) => !ts.length || ts.some((t) => hit(a, t))))
  }, [base, q, sel])
  useEffect(() => { setLoading(true); setN(PAGE); const t = setTimeout(() => setLoading(false), 200); return () => clearTimeout(t) }, [q, sel, tier, track])
  const toggle = (g, t) => setSel((s) => { const c = s[g] || []; return { ...s, [g]: c.includes(t) ? c.filter((x) => x !== t) : [...c, t] } })
  const active = Object.values(sel).flat().length + (q ? 1 : 0)
  const clear = () => { setQ(""); setSel({}) }
  const tr = TRACKS.find((t) => t.id === track)
  return (
    <section id="explore" className="mx-auto w-full max-w-[1500px] px-5 py-24 lg:px-10">
      <div className="max-w-2xl"><p className="label">Assessment Discovery</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Explore Your Assessment</h2>
        <p className="mt-4 text-slate-400">Explore assessments based on technologies, disciplines, domains, capabilities, systems, methods, and other concepts derived from the real Fuzzie Gauge content.</p></div>
      <div className="mt-10"><CurriculumSelector {...{ tier, setTier, track, setTrack }} /></div>
      {tier === "live" && <p className="mt-6 text-sm text-slate-400">Active track: <b className="text-white">{track} {tr.name}</b> · {base.length} live assessment batteries{track === "1.3" && " · Full 50-Question Diagnostics"}</p>}
      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside aria-label="Filters" className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between"><h3 className="font-semibold text-white">Explore By</h3>
            {active > 0 && <button onClick={clear} className="flex items-center gap-1 text-xs text-accent"><X size={12} />Clear filters</button>}</div>
          {FACETS.map((f) => {
            const items = f.items.map(([l, t]) => [l, t, base.filter((a) => hit(a, t)).length]).filter((i) => i[2] > 0)
            return items.length ? (
              <fieldset key={f.group}><legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">{f.group}</legend>
                <div className="flex flex-wrap gap-2">{items.map(([l, t, c]) => { const on = (sel[f.group] || []).includes(t)
                  return <button key={t} aria-pressed={on} onClick={() => toggle(f.group, t)} className={`rounded-full border px-3 py-1 text-xs transition ${on ? "border-accent bg-accent/10 text-accent" : "border-line text-slate-400 hover:border-accent/50"}`}>{l} · {c}</button> })}</div></fieldset>) : null })}
        </aside>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="relative min-w-0 flex-1"><span className="sr-only">Search assessments</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search assessments, disciplines, technologies…" className="w-full rounded-full border border-line bg-panel py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500" /></label>
            <div className="flex rounded-full border border-line p-1" role="group" aria-label="Layout">
              {[["grid", LayoutGrid], ["list", List]].map(([v, I]) => <button key={v} aria-label={`${v} view`} aria-pressed={view === v} onClick={() => setView(v)} className={`rounded-full p-2 ${view === v ? "bg-accent text-ink" : "text-slate-400"}`}><I size={16} /></button>)}</div>
          </div>
          <p className="mt-5 text-sm text-slate-400" aria-live="polite"><b className="text-white">{res.length}</b> assessments found</p>
          {loading ? <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{[0, 1, 2].map((i) => <div key={i} className="h-56 animate-pulse rounded-2xl bg-panel" />)}</div>
          : res.length ? <>
            <div className={`mt-4 grid gap-4 ${view === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : ""}`}>{res.slice(0, n).map((a) => <AssessmentCard key={a.id} a={a} view={view} />)}</div>
            {n < res.length && <div className="mt-8 text-center"><button className="btn btn-ghost" onClick={() => setN(n + PAGE)}>Load more ({res.length - n} remaining)</button></div>}
          </> : <div className="card mt-4 p-10 text-center"><p className="font-semibold text-white">{base.length ? "No assessments match your search." : `No assessments are listed for this pathway here.`}</p>
              <p className="mt-2 text-sm text-slate-400">{base.length ? "Try different keywords or clear your filters." : <>Browse it on <a className="text-accent underline" href={LINKS.reference} target="_blank" rel="noopener noreferrer">SCODEL</a>.</>}</p>
              {base.length > 0 && <button className="btn btn-primary mt-5" onClick={clear}>Clear filters</button>}</div>}
        </div>
      </div>
    </section>
  )
}
