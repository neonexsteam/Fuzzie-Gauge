import { ArrowUpRight } from "lucide-react"
import { AIcon } from "./Icons.jsx"
export default function AssessmentCard({ a, view }) {
  const I = AIcon[a.icon] || AIcon.layers, list = view === "list"
  return (
    <article className={`card flex gap-4 p-5 ${list ? "flex-col sm:flex-row sm:items-center" : "flex-col"}`}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-accent"><I size={22} /></div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet">{a.stage}</p>
        <h4 className="mt-1 font-semibold leading-snug text-white">{a.title}</h4>
        <p className={`mt-2 text-sm text-slate-400 ${list ? "line-clamp-2" : "line-clamp-4"}`}>{a.desc}</p>
      </div>
      <a href={a.url} target="_blank" rel="noopener noreferrer" aria-label={`View assessment: ${a.title}`} className="btn btn-ghost !px-4 !py-2 shrink-0 self-start sm:self-auto">View Assessment <ArrowUpRight size={14} /></a>
    </article>
  )
}
