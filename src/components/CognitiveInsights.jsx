import { Radar, Network, Route } from "lucide-react"
const B = [[Radar, "Recognize Dominant Thinking Patterns", "Understand your natural baseline across analytical, creative, and technological paradigms."],
 [Network, "Understand Cross-Dimensional Connections", "Observe how your systems thinking and practical execution interface with creative problem solving."],
 [Route, "Actionable Development Pathways", "Translate your cognitive tendencies into targeted learning paths and engineering projects in SCODEL."]]
export default function CognitiveInsights() {
  return (
    <section id="insights" className="border-y border-line bg-panel/40 py-24">
      <div className="mx-auto w-full max-w-[1500px] px-5 lg:px-10">
        <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">Turn Assessment Activity Into Structured Insight</h2>
        <p className="mt-4 max-w-3xl text-slate-400">Rather than evaluating linear test scores, Fuzzie Gauge maps interconnected cognitive dimensions. Every question response contributes to an integrated profile that illuminates how you deconstruct complexity, create solutions, and apply technical knowledge.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{B.map(([I, t, d]) => <article key={t} className="card p-6"><I className="text-accent" /><h3 className="mt-4 font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-slate-400">{d}</p></article>)}</div>
        <ul className="mt-10 flex flex-wrap gap-3">{["Systems Thinking", "Practical Application", "Technical Understanding", "Multidimensional Telemetry"].map((c) => <li key={c} className="rounded-full border border-line px-4 py-2 text-sm text-slate-300">{c}</li>)}</ul>
      </div>
    </section>
  )
}
