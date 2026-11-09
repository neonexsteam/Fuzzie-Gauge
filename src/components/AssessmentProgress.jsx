import { motion } from "framer-motion"
import { ArrowRight, BarChart3, BookOpenCheck, BrainCircuit, Clock3, Lightbulb, Sparkles } from "lucide-react"
import { useState } from "react"

const STAGES = [
  ["Welcome", "Set your context", "Understand what the assessment measures and how your responses are used.", Sparkles],
  ["Questions", "Explore your thinking", "Work through focused, scenario-based prompts at your own pace.", BookOpenCheck],
  ["Analysis", "Connect the signals", "Your responses are evaluated across six connected cognitive dimensions.", BarChart3],
  ["Profile", "See your pattern", "Review a multidimensional profile of your strengths and capabilities.", BrainCircuit],
  ["Recommendations", "Choose your next step", "Discover practical pathways for learning, practice, and growth.", Lightbulb]
]

export default function AssessmentProgress() {
  const [active, setActive] = useState(0)
  const [title, description, , Icon] = STAGES[active]

  return (
    <section id="assessment-progress" className="border-y border-line bg-panel/40 py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="label">Your Assessment Path</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A clear journey from curiosity to clarity.</h2>
            <p className="mt-4 text-slate-400">Know what to expect at every stage of your Fuzzie Gauge experience.</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-ink/50 px-4 py-2.5 text-sm text-slate-300">
            <Clock3 size={17} className="text-accent" />
            <span>Estimated time: <strong className="text-white">20–30 minutes</strong></span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-panel/70 p-5 sm:p-8">
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-line sm:block" aria-hidden="true">
              <motion.div className="h-full origin-left bg-accent" animate={{ scaleX: active / (STAGES.length - 1) }} transition={{ duration: .45, ease: "easeOut" }} />
            </div>
            <ol className="relative grid gap-5 sm:grid-cols-5 sm:gap-2">
              {STAGES.map(([stage, subtext], index) => {
                const isActive = active === index
                const isComplete = index < active
                return (
                  <li key={stage} className="flex sm:block">
                    <button type="button" onClick={() => setActive(index)} aria-current={isActive ? "step" : undefined} className="group flex w-full items-center gap-3 text-left sm:flex-col sm:gap-3 sm:text-center">
                      <span className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition ${isActive ? "border-accent bg-accent text-ink shadow-lg shadow-accent/20" : isComplete ? "border-accent/60 bg-accent/15 text-accent" : "border-line bg-ink text-slate-500 group-hover:border-accent/60 group-hover:text-accent"}`}>
                        {isComplete ? "✓" : String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={`block text-sm font-semibold ${isActive ? "text-accent" : "text-white"}`}>{stage}</span>
                        <span className="mt-1 block text-xs text-slate-500">{subtext}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }} className="mt-10 flex flex-col gap-5 rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent"><Icon size={21} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-accent">Stage {active + 1} of {STAGES.length}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
              </div>
            </div>
            <button type="button" onClick={() => setActive((active + 1) % STAGES.length)} className="btn btn-ghost shrink-0 self-start sm:self-auto">
              {active === STAGES.length - 1 ? "Review again" : "Next stage"} <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-slate-500">
          <span>Progress preview</span>
          <span>{Math.round(((active + 1) / STAGES.length) * 100)}% of the journey explored</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Assessment journey explored" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(((active + 1) / STAGES.length) * 100)}>
          <motion.div className="h-full rounded-full bg-gradient-to-r from-accent to-violet" animate={{ width: `${((active + 1) / STAGES.length) * 100}%` }} transition={{ duration: .45 }} />
        </div>
      </div>
    </section>
  )
}
