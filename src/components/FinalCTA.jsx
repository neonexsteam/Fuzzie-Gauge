import { ArrowRight, BarChart3, Route, Search, Sparkles } from "lucide-react"
import { LINKS } from "../data/site.js"
export default function FinalCTA() {
  return (
    <section className="mx-auto w-full max-w-[1500px] px-5 pb-24 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-panel to-violet/10 px-6 py-16 text-center">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-violet/10 blur-3xl" aria-hidden="true" />
        <div className="relative">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to Understand Your Potential?</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">Begin your cognitive profiling journey today and discover new dimensions of your capability.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={LINKS.start} className="btn btn-primary">Start Your Assessment <ArrowRight size={16} /></a>
          <a href="/assessment#journey" className="btn btn-ghost"><Route size={16} /> See How It Works</a>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          <a href="/dimensions" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-accent"><Sparkles size={15} /> Explore Cognitive Dimensions</a>
          <a href="#journey" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-accent"><BarChart3 size={15} /> View Sample Report</a>
        </div>
        <p className="mt-6 text-xs font-medium tracking-wide text-slate-500">No diagnostic labeling. Built for capability development.</p>
        </div>
      </div>
    </section>
  )
}
