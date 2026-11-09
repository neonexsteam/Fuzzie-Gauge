import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, BarChart3, BrainCircuit, ClipboardCheck, Route, Search, X } from "lucide-react"
import { LINKS, STEPS } from "../data/site.js"

const ICONS = [ClipboardCheck, Search, BarChart3, Route]
const REPORT_SCORES = [
  ["Analytical Thinking", 82],
  ["Systems Thinking", 74],
  ["Creative Expression", 68],
  ["Practical Application", 77]
]

export default function AssessmentJourney() {
  const [activeStep, setActiveStep] = useState(0)
  const [reportOpen, setReportOpen] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % STEPS.length), 2600)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="journey" className="border-y border-line bg-panel/40 py-24">
      <div className="mx-auto w-full max-w-[1500px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl journey-heading">
            <p className="label">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">The Assessment Journey</h2>
            <p className="mt-4 text-slate-400">A structured path to understanding your cognitive profile.</p>
          </div>
          <motion.button type="button" whileHover={{ y: -3 }} whileTap={{ scale: .97 }} onClick={() => setReportOpen(true)} className="btn btn-ghost shrink-0 self-start md:self-auto">View sample report <ArrowRight size={17} /></motion.button>
        </div>

        <ol className="journey-list relative mt-14 grid gap-5 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="journey-line absolute left-6 top-6 bottom-6 w-px bg-line lg:inset-x-6 lg:bottom-auto lg:top-6 lg:h-px lg:w-auto">
            <span className="journey-progress" style={{ "--journey-progress": `${(activeStep / (STEPS.length - 1)) * 100}%` }} />
          </span>
          {STEPS.map(([n, t, d], index) => {
            const Icon = ICONS[index]
            return (
              <motion.li key={n} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1, duration: .45 }} className={`journey-step group relative lg:pt-16 ${activeStep === index ? "is-current" : ""}`}>
                <motion.div animate={{ y: activeStep === index ? -5 : 0 }} transition={{ type: "spring", stiffness: 280, damping: 24 }} className="journey-card h-full rounded-2xl border border-line bg-panel/70 p-5">
                  <button type="button" className="journey-number mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-ink text-sm font-semibold text-accent lg:absolute lg:left-0 lg:top-0 lg:mb-0" onClick={() => setActiveStep(index)} aria-label={`Show step ${n}: ${t}`} aria-pressed={activeStep === index}>
                    <span>{n}</span>
                    <Icon size={17} aria-hidden="true" />
                  </button>
                  <div className="relative z-0 flex items-center gap-2 text-accent lg:pl-16"><Icon size={17} aria-hidden="true" /><span className="text-xs font-semibold uppercase tracking-[0.18em]">Step {n}</span></div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{d}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Built for development</div>
                </motion.div>
              </motion.li>
            )
          })}
        </ol>
      </div>

      <AnimatePresence>
        {reportOpen && (
          <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/75 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="sample-report-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 16 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="w-full max-w-lg rounded-3xl border border-line bg-panel p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div><p className="label">Illustrative preview</p><h3 id="sample-report-title" className="mt-2 text-2xl font-semibold text-white">Your cognitive profile</h3></div>
                <button type="button" onClick={() => setReportOpen(false)} className="rounded-lg p-2 text-slate-400 transition hover:bg-ink hover:text-white" aria-label="Close sample report"><X size={18} /></button>
              </div>
              <div className="mt-6 rounded-2xl border border-line bg-ink/50 p-5">
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent"><BrainCircuit size={21} /></span><div><p className="text-sm font-semibold text-white">Multidimensional profile</p><p className="text-xs text-slate-500">Example result · not a diagnosis</p></div></div>
                <div className="mt-6 space-y-4">{REPORT_SCORES.map(([label, score], index) => <div key={label}><div className="mb-1.5 flex justify-between text-xs"><span className="text-slate-300">{label}</span><span className="font-semibold text-accent">{score}%</span></div><div className="h-2 overflow-hidden rounded-full bg-line"><motion.div initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={{ delay: .2 + index * .08, duration: .65 }} className="h-full rounded-full bg-gradient-to-r from-accent to-violet" /></div></div>)}</div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">A full report connects your strengths with practical opportunities for learning, practice, and career alignment.</p>
              <a href={LINKS.start} onClick={() => setReportOpen(false)} className="btn btn-primary mt-6 w-full">Start Your Assessment <ArrowRight size={17} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
