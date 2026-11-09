import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ASSESSMENTS } from "../data/assessments.js"
import { AIcon } from "./Icons.jsx"

export default function FeaturedAssessments() {
  const featured = ASSESSMENTS.slice(0, 3)

  return (
    <section className="mx-auto w-full max-w-[1500px] px-5 py-20 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-2xl">
          <p className="label">Explore the library</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Find the way you think best.</h2>
          <p className="mt-4 text-slate-400">Discover assessment pathways built around real technologies, disciplines, systems, and creative domains.</p>
        </div>
        <a href="/explore" className="btn btn-ghost">View all assessments <ArrowRight size={16} /></a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featured.map((assessment) => {
          const Icon = AIcon[assessment.icon] || AIcon.layers
          return (
            <article key={assessment.id} className="card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-accent"><Icon size={22} /></div>
                <span className="text-xs font-semibold uppercase tracking-widest text-violet">{assessment.stage}</span>
              </div>
              <h3 className="mt-5 line-clamp-3 font-semibold leading-snug text-white">{assessment.title}</h3>
              <p className="mt-3 line-clamp-3 flex-1 text-sm text-slate-400">{assessment.desc}</p>
              <a href={assessment.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                View assessment <ArrowUpRight size={15} />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
