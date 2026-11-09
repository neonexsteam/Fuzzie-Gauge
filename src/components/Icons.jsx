import { useState } from "react"
import { Accessibility, Sparkles, Briefcase, Atom, Palette, Shield, Shirt, Brush, Languages, HeartPulse, Cpu, Network, Leaf, Orbit, Infinity as Inf, Layers, Music, Wrench, FlaskConical, Sigma, Trophy, Code2 } from "lucide-react"
export const AIcon = { access: Accessibility, sparkles: Sparkles, brief: Briefcase, atom: Atom, palette: Palette, shield: Shield, shirt: Shirt, brush: Brush, lang: Languages, heart: HeartPulse, cpu: Cpu, network: Network, leaf: Leaf, orbit: Orbit, infinity: Inf, layers: Layers, music: Music, wrench: Wrench, flask: FlaskConical, sigma: Sigma, trophy: Trophy, code: Code2 }

// The primary Fuzzie Gauge logo is supplied at /public/logo.svg. Other brand marks
// can still be resolved from /public/logos when they are added.
export function Logo({ name = "fuzzie-gauge", text = "FUZZIE GAUGE", className = "h-8" }) {
  const [bad, setBad] = useState(false)
  const source = name === "fuzzie-gauge" ? "/logo.svg" : `/logos/${name}.svg`
  const isPrimary = name === "fuzzie-gauge"
  return (
    <span className="inline-flex items-center gap-2.5">
      {bad ? <span className="font-semibold tracking-[0.18em] text-white">{text}</span>
        : <img src={source} alt="" className={className} onError={() => setBad(true)} />}
      {isPrimary && !bad && <span className="logo-wordmark whitespace-nowrap text-[1.175rem] font-semibold tracking-[0.03em]">Fuzzie Gauge</span>}
    </span>
  )
}

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
export function DimIcon({ type }) {
  const p = {
    analytical: <><circle cx="12" cy="12" r="3" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /></>,
    technical: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
    creative: <><path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 003-3c0-6-4-11-8-11z" /><circle cx="8" cy="11" r=".8" /><circle cx="12" cy="7.5" r=".8" /><circle cx="16" cy="10" r=".8" /></>,
    human: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M2.5 20c.5-4 3-6 5.5-6s5 2 5.5 6M14.5 14.5c3-.5 6 1 7 5" /></>,
    system: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M10 10 6.5 7.5M14 10l3.5-2.5M10 14l-3.5 2.5M14 14l3.5 2.5" /></>,
    practical: <><path d="M4 19.5V14h5.5v5.5H4ZM14.5 19.5V9h5.5v10.5h-5.5ZM9.25 14V4.5h5.5V14h-5.5Z" /><path d="M3 21h18" /></>,
    pending: <><circle cx="12" cy="12" r="9" strokeDasharray="3 3" /><path d="M12 8v4l2.5 2" /></>
  }[type]
  return <svg viewBox="0 0 24 24" className="h-7 w-7" {...S} aria-hidden="true">{p}</svg>
}
