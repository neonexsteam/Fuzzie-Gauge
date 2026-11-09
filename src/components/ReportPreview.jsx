import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Compass, GraduationCap, Sparkles, Target } from "lucide-react"
import { LINKS } from "../data/site.js"

const INSIGHTS = [
  {
    title: "Strengths",
    eyebrow: "What comes naturally",
    icon: CheckCircle2,
    tone: "text-emerald-300 bg-emerald-300/10",
    items: ["Connects ideas across different contexts", "Breaks complex problems into clear steps", "Balances practical action with big-picture thinking"]
  },
  {
    title: "Growth opportunities",
    eyebrow: "Where practice can help",
    icon: Target,
    tone: "text-violet-300 bg-violet-300/10",
    items: ["Make assumptions visible when solving problems", "Create space for alternative perspectives", "Turn reflection into a repeatable routine"]
  },
  {
    title: "Recommended learning paths",
    eyebrow: "Ways to keep developing",
    icon: GraduationCap,
    tone: "text-sky-300 bg-sky-300/10",
    items: ["Systems mapping and design thinking", "Collaborative problem-solving workshops", "Applied projects with reflective feedback"]
  },
  {
    title: "Career alignment",
    eyebrow: "Where your pattern may fit",
    icon: BriefcaseBusiness,
    tone: "text-amber-300 bg-amber-300/10",
    items: ["Product and systems strategy", "Technical program leadership", "Research, innovation, and solution design"]
  }
]

export default function ReportPreview() {
  return (
    <section id="report-preview" className="mx-auto w-full max-w-[1500px] px-5 py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="label">Illustrative Report Preview</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Turn insight into your next move.</h2>
          <p className="mt-4 max-w-xl text-slate-400">Your report is designed to be useful beyond a score—connecting observed patterns with practical development ideas and possible directions to explore.</p>
          <div className="mt-7 flex items-center gap-3 rounded-2xl border border-line bg-panel/60 p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Compass size={20} /></span>
            <div>
              <p className="text-sm font-semibold text-white">A multidimensional view</p>
              <p className="mt-1 text-xs text-slate-500">Example content · not a diagnosis</p>
            </div>
          </div>
          <a href={LINKS.start} className="btn btn-primary mt-6">Create your profile <ArrowRight size={17} /></a>
        </div>

        <div className="rounded-3xl border border-line bg-panel/70 p-5 shadow-[0_24px_70px_rgb(3_8_29_/_0.18)] sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-2 text-accent"><Sparkles size={16} /><span className="text-xs font-semibold uppercase tracking-[.18em]">Sample profile</span></div>
              <h3 className="mt-2 text-2xl font-semibold text-white">The Connected Builder</h3>
              <p className="mt-2 text-sm text-slate-400">A profile that combines analytical clarity with practical, collaborative action.</p>
            </div>
            <span className="self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">Illustrative</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {INSIGHTS.map(({ title, eyebrow, icon: Icon, tone, items }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08, duration: .4 }} className="rounded-2xl border border-line bg-ink/35 p-5">
                <div className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone}`}><Icon size={19} /></span>
                  <div><p className="text-base font-semibold text-white">{title}</p><p className="mt-1 text-xs text-slate-500">{eyebrow}</p></div>
                </div>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => <li key={item} className="flex gap-2 text-sm leading-5 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">A real report adapts to your responses and assessment pathway.</p>
        </div>
      </div>
    </section>
  )
}
