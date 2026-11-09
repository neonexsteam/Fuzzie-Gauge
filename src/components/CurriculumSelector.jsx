import { TIERS, TRACKS, LINKS } from "../data/site.js"
import { Check } from "lucide-react"
export default function CurriculumSelector({ tier, setTier, track, setTrack }) {
  return (
    <div>
      <p className="label">Curriculum Taxonomy</p>
      <h3 className="mt-2 text-xl font-semibold text-white">Select Assessment Stream & Pathway</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2" role="radiogroup" aria-label="Curriculum tier">
        {TIERS.map((t) => (
          <button key={t.id} role="radio" aria-checked={tier === t.id} onClick={() => setTier(t.id)}
            className={`card p-5 text-left ${tier === t.id ? "!border-accent bg-accent/5" : ""}`}>
            <div className="flex items-start justify-between"><h4 className="text-lg font-semibold text-white">{t.name}</h4>{tier === t.id && <Check className="text-accent" size={18} />}</div>
            <p className="mt-1 text-sm text-accent">{t.rec}</p><p className="mt-2 text-sm text-slate-400">{t.text}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-300">{t.count} Defined Pathways</p>
          </button>))}
      </div>
      {tier === "live" ? (
        <div className="mt-5 grid gap-4 lg:grid-cols-3" role="radiogroup" aria-label="Assessment stream">
          {TRACKS.map((t) => (
            <button key={t.id} role="radio" aria-checked={track === t.id} onClick={() => setTrack(t.id)}
              className={`card p-5 text-left ${track === t.id ? "!border-accent bg-accent/5" : ""}`}>
              <p className="text-xs font-semibold text-slate-500">{t.id} · LIVE</p>
              <h4 className="mt-1 font-semibold text-white">{t.name}</h4>
              <p className="mt-2 text-sm text-slate-400">{t.text}</p>
              <p className="mt-3 text-xs text-accent">{t.tag}</p>
            </button>))}
        </div>
      ) : (
        <div className="card mt-5 p-5 text-sm text-slate-400">The 33 Standardized NGEP pathways are hosted on SCODEL. <a className="text-accent underline" href={LINKS.reference} target="_blank" rel="noopener noreferrer">View NGEP tracks on SCODEL</a>.</div>
      )}
    </div>
  )
}
