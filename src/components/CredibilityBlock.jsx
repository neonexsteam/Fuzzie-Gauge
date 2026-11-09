import { useState } from "react"
import { BrainCircuit, Check, LockKeyhole, Waypoints } from "lucide-react"

const HIGHLIGHTS = [
  {
    Icon: BrainCircuit,
    title: "Beyond a single score",
    text: "Understand multiple connected capabilities instead of being reduced to one number.",
    backTitle: "Explore Six Dimensions",
    details: "Fuzzie Gauge evaluates interconnected cognitive capabilities through six dimensions:",
    items: ["Analytical Thinking", "Technical Reasoning", "Creative Expression", "Human Understanding", "Systems Thinking", "Practical Application"],
    accent: "blue"
  },
  {
    Icon: Waypoints,
    title: "Built for development",
    text: "Turn meaningful insight into practical learning, growth, and career alignment.",
    backTitle: "From Insights to Growth",
    details: "Fuzzie Gauge transforms assessment insights into meaningful development opportunities.",
    items: ["Identify cognitive strengths.", "Discover areas for improvement.", "Explore learning opportunities.", "Support skill development.", "Connect capabilities with career pathways."],
    accent: "violet"
  },
  {
    Icon: LockKeyhole,
    title: "Responsible by design",
    text: "Explore your capabilities without fixed labels or diagnostic categorization.",
    backTitle: "A Responsible Approach",
    details: "Fuzzie Gauge promotes responsible, human-centred assessment.",
    items: ["Focuses on capabilities rather than labels.", "Encourages continuous learning.", "Avoids defining individuals through a single score.", "Supports inclusive development.", "Presents insights as opportunities for growth."],
    accent: "cyan"
  }
]

function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped((value) => !value)
  const Icon = item.Icon

  return (
    <article
      className={`flip-card flip-card-${item.accent} ${flipped ? "is-flipped" : ""}`}
      tabIndex="0"
      role="button"
      aria-pressed={flipped}
      aria-label={`${item.title}. Press Enter or Space to ${flipped ? "show summary" : "show details"}.`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          toggle()
        }
      }}
    >
      <div className="flip-card-inner">
        <div className="card-front rounded-2xl border border-line/70 bg-ink/40 p-5">
          <div className="flip-icon"><Icon size={22} aria-hidden="true" /></div>
          <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
        </div>
        <div className="card-back rounded-2xl border border-accent/30 p-5" aria-hidden={!flipped}>
          <div className="flip-icon"><Icon size={20} aria-hidden="true" /></div>
          <h3 className="mt-3 font-semibold text-[#101C3A]">{item.backTitle}</h3>
          <p className="mt-2 text-xs leading-5 text-[#334A72]">{item.details}</p>
          <ul className="mt-3 grid gap-1.5 text-xs leading-5 text-[#334A72]">
            {item.items.map((detail) => <li key={detail} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-[#2459DC]" aria-hidden="true" /><span>{detail}</span></li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function CredibilityBlock() {
  return (
    <section id="why-fuzzie-gauge" className="mx-auto w-full max-w-[1500px] px-5 py-20 lg:px-10">
      <div className="rounded-3xl border border-line bg-panel/50 p-6 sm:p-10">
        <div className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label">Why Fuzzie Gauge?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Insight that opens possibilities.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Fuzzie Gauge is a SCODEL cognitive assessment platform created to help people understand how they think, connect, create, and solve problems.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => <FlipCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  )
}
