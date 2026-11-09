import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, BrainCircuit } from "lucide-react"
import { DIMENSIONS, LINKS } from "../data/site.js"

const VALUES = [82, 68, 74, 61, 77, 70]
const POINTS = [
  [160, 24],
  [278, 82],
  [250, 210],
  [160, 250],
  [70, 210],
  [42, 82]
]
const CENTER = [160, 136]

const pointString = (scale = 1, offset = [0, 0]) => POINTS
  .map(([x, y]) => `${CENTER[0] + (x - CENTER[0]) * scale + offset[0]},${CENTER[1] + (y - CENTER[1]) * scale + offset[1]}`)
  .join(" ")

function DimensionCard({ index, active, onSelect, position }) {
  const dimension = DIMENSIONS[index]
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-pressed={active === index}
      title={dimension.text}
      className={`radar-dimension-card radar-dimension-card-${position} ${active === index ? "is-active" : ""}`}
    >
      <span>{dimension.title}</span>
    </button>
  )
}

function RadarChart({ active, onSelect, hovered, onHover }) {
  const profilePoints = POINTS.map(([x, y], i) =>
    `${CENTER[0] + (x - CENTER[0]) * VALUES[i] / 100},${CENTER[1] + (y - CENTER[1]) * VALUES[i] / 100}`
  ).join(" ")

  return (
    <svg
      viewBox="0 0 320 285"
      className="radar-chart"
      role="img"
      aria-label="Six intelligence dimensions radar chart"
      onMouseLeave={() => onHover(null)}
    >
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2860E8" stopOpacity=".42" />
          <stop offset="100%" stopColor="#4976DC" stopOpacity=".14" />
        </linearGradient>
        <linearGradient id="radarDepth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A6C2F5" stopOpacity=".34" />
          <stop offset="100%" stopColor="#5D8CE6" stopOpacity=".12" />
        </linearGradient>
        <radialGradient id="radarGlow">
          <stop offset="0%" stopColor="#5E8CF0" stopOpacity=".22" />
          <stop offset="75%" stopColor="#5E8CF0" stopOpacity=".04" />
          <stop offset="100%" stopColor="#5E8CF0" stopOpacity="0" />
        </radialGradient>
        <filter id="radarShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <g transform="translate(0 10)">
        <circle cx="160" cy="136" r="132" fill="url(#radarGlow)" />
        <polygon points={pointString(1, [9, 12])} fill="#7DA5E9" opacity=".14" filter="url(#radarShadow)" />
        <polygon points={pointString(1, [8, 10])} fill="url(#radarDepth)" stroke="#9BB9ED" strokeWidth="1.2" />
        <g stroke="#9BB9ED" strokeWidth="1" opacity=".62">
          {POINTS.map(([x, y], i) => <line key={`depth-${i}`} x1={x} y1={y} x2={x + 8} y2={y + 10} />)}
        </g>
        <g fill="none" stroke="#C9D8F3" strokeWidth="1">
          <polygon points={pointString(.25)} />
          <polygon points={pointString(.5)} />
          <polygon points={pointString(.75)} />
          <polygon points={pointString(1)} />
        </g>
        <g stroke="#B9CBEB" strokeWidth="1" opacity=".8">
          {POINTS.map(([x, y], i) => <line key={`axis-${i}`} x1={CENTER[0]} y1={CENTER[1]} x2={x} y2={y} />)}
        </g>
        <polygon points={pointString(1, [8, 10])} fill="#6491E6" fillOpacity=".08" stroke="#A4BFF0" strokeWidth="1" />
        <motion.polygon
          initial={{ points: pointString(0) }}
          animate={{ points: profilePoints }}
          transition={{ duration: .8, ease: "easeOut" }}
          points={profilePoints}
          fill="#2558D9"
          opacity=".14"
          transform="translate(3 5)"
        />
        <motion.polygon
          initial={{ points: pointString(0) }}
          animate={{ points: profilePoints }}
          transition={{ duration: .8, ease: "easeOut" }}
          points={profilePoints}
          fill="url(#radarFill)"
          stroke="#2459DC"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        {POINTS.map(([x, y], i) => {
          const px = CENTER[0] + (x - CENTER[0]) * VALUES[i] / 100
          const py = CENTER[1] + (y - CENTER[1]) * VALUES[i] / 100
          const isHighlighted = active === i || hovered === i
          return (
            <g key={DIMENSIONS[i].id} onClick={() => onSelect(i)} onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(null)} role="button" tabIndex={0}
              aria-label={`${DIMENSIONS[i].title}: ${VALUES[i]}%`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  onSelect(i)
                }
              }} className="radar-point">
              {hovered === null && (
                <motion.circle
                  initial={false}
                  animate={{ cx: px, cy: py, r: isHighlighted ? 7 : 5.5 }}
                  transition={{ duration: .45 }}
                  fill="#2459DC"
                  stroke="white"
                  strokeWidth="2.5"
                />
              )}
              {hovered === i && (
                <foreignObject x={i === 0 || i === 5 ? 2 : i === 1 || i === 2 ? 167 : 45} y={i < 3 ? 5 : 170} width="148" height="65" className="radar-tooltip">
                  <div className="radar-tooltip-content">
                    <strong>{DIMENSIONS[i].title}</strong>
                    <span>{DIMENSIONS[i].text}</span>
                  </div>
                </foreignObject>
              )}
            </g>
          )
        })}
        <circle cx="160" cy="136" r="20" fill="white" stroke="#83A5ED" strokeWidth="1" />
        <foreignObject x="138" y="114" width="44" height="44" style={{ pointerEvents: "none" }}>
          <div className="flex h-full w-full items-center justify-center">
            <BrainCircuit size={28} strokeWidth={2} className="text-[#2459DC]" />
          </div>
        </foreignObject>
      </g>
    </svg>
  )
}

export default function ProfilePreview() {
  const [active, setActive] = useState(1)
  const [hovered, setHovered] = useState(null)
  const dimension = DIMENSIONS[active] || DIMENSIONS[0]

  return (
    <section id="profile-preview" className="mx-auto w-full max-w-[1500px] px-3 py-8 sm:px-5 sm:py-10 lg:px-8">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-panel p-5 shadow-[0_24px_70px_rgb(3_8_29_/_0.18)] sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-8 lg:p-10">
        <div>
          <p className="label">See the bigger picture</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Your thinking is multidimensional.</h2>
          <p className="mt-4 max-w-xl text-base leading-[1.45] text-slate-400 sm:text-lg">
            Fuzzie Gauge looks beyond a single score. Explore how a cognitive profile can reveal connected strengths across different ways of thinking.
          </p>
          <div className="mt-6 rounded-[20px] border border-line bg-ink/50 p-5" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">{dimension.title}</p>
            <p className="mt-2 text-base text-slate-300">{dimension.text}</p>
            <div className="mt-5 h-[10px] overflow-hidden rounded-full bg-line">
              <motion.div initial={{ width: 0 }} animate={{ width: `${VALUES[active]}%` }} transition={{ duration: .55, ease: "easeOut" }} className="h-full rounded-full bg-accent" />
            </div>
            <p className="mt-3 text-right text-sm text-slate-500">Illustrative profile signal: {VALUES[active]}%</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={LINKS.start} className="btn btn-primary">Start Your Assessment <ArrowRight size={18} /></a>
            <a href="/dimensions" className="btn btn-ghost">Explore Cognitive Dimensions <ArrowRight size={18} /></a>
          </div>
        </div>

        <div className="radar-layout" aria-label="Select a cognitive dimension">
          <DimensionCard index={0} active={active} onSelect={setActive} position="top" />
          <div className="radar-side radar-side-left">
            <DimensionCard index={5} active={active} onSelect={setActive} position="upper-left" />
            <DimensionCard index={4} active={active} onSelect={setActive} position="lower-left" />
          </div>
          <div className="radar-chart-wrap">
            <RadarChart active={active} onSelect={setActive} hovered={hovered} onHover={setHovered} />
          </div>
          <div className="radar-side radar-side-right">
            <DimensionCard index={1} active={active} onSelect={setActive} position="upper-right" />
            <DimensionCard index={2} active={active} onSelect={setActive} position="lower-right" />
          </div>
          <div className="radar-bottom-group">
            <DimensionCard index={3} active={active} onSelect={setActive} position="bottom" />
            <p className="radar-caption">Illustrative six-axis cognitive profile</p>
          </div>
        </div>
      </div>
    </section>
  )
}
