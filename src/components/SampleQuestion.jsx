import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, BrainCircuit, CheckCircle2, RotateCcw } from "lucide-react"
import { useState } from "react"
import { LINKS } from "../data/site.js"

const OPTIONS = [
  ["A", "Ask what problem the idea is solving before evaluating the solution."],
  ["B", "Choose the idea that can be implemented most quickly."],
  ["C", "Compare both ideas against the team’s long-term goals and constraints."],
  ["D", "Let the team vote and move forward with the majority choice."]
]

export default function SampleQuestion() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="sample-question" className="relative overflow-hidden border-y border-line bg-panel/30 py-24">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-12 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
        <div>
          <p className="label">Try a Sample</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">See how your thinking shows up.</h2>
          <p className="mt-4 max-w-xl text-slate-400">Explore one scenario from the experience. There is no right or wrong answer—the way you approach a situation is what makes your profile distinctive.</p>
          <div className="mt-7 flex items-center gap-3 text-sm text-slate-400">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><BrainCircuit size={20} /></span>
            <span>Scenario-based · Takes less than a minute</span>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-panel/80 p-5 shadow-2xl shadow-ink/20 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-accent">Sample scenario</p>
            <span className="text-xs text-slate-500">01 / 01</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold leading-7 text-white">Your team has two promising solutions to the same problem. What would you do first?</h3>
          <div className="mt-5 grid gap-3">
            {OPTIONS.map(([letter, text]) => {
              const isSelected = selected === letter
              return (
                <button key={letter} type="button" onClick={() => setSelected(letter)} aria-pressed={isSelected} className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-sm leading-6 transition ${isSelected ? "border-accent bg-accent/10 text-white" : "border-line text-slate-400 hover:border-accent/60 hover:bg-accent/5"}`}>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${isSelected ? "bg-accent text-ink" : "bg-line text-slate-300"}`}>{letter}</span>
                  <span>{text}</span>
                </button>
              )
            })}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.div key="feedback" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-5 rounded-2xl border border-accent/30 bg-accent/10 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-white">Interesting perspective.</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">Your response can reveal how you balance context, collaboration, and practical decision-making. A full assessment connects patterns across many scenarios.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={LINKS.start} className="btn btn-primary">Explore the full assessment <ArrowRight size={16} /></a>
                  <button type="button" onClick={() => setSelected(null)} className="btn btn-ghost"><RotateCcw size={15} /> Try again</button>
                </div>
              </motion.div>
            ) : (
              <p className="mt-5 text-center text-xs text-slate-500">Select the response that feels most natural to you.</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
