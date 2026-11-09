import { Lock, Sprout, ServerCog } from "lucide-react"
const C = [[Lock, "Data Privacy", "Your cognitive profile is your own. We adhere to strict privacy standards to protect your assessment data."],
 [Sprout, "Development Focus", "Results are structured to highlight potential and suggest growth pathways, rather than assigning static labels."],
 [ServerCog, "Secure Infrastructure", "Built on enterprise-grade security to ensure your testing environment is safe and reliable."]]
export default function ResponsibleAssessment() {
  return (
    <section className="mx-auto w-full max-w-[1500px] px-5 py-24 lg:px-10">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">Responsible Assessment</h2>
      <p className="mt-4 max-w-2xl text-slate-400">Fuzzie Gauge is designed for capability development, not diagnostic limitation.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{C.map(([I, t, d]) => <article key={t} className="card p-6"><I className="text-accent" size={22} /><h3 className="mt-4 font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-slate-400">{d}</p></article>)}</div>
    </section>
  )
}
