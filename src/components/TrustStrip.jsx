const STATS = [
  ["06", "Cognitive dimensions"],
  ["50", "Questions in the full profile"],
  ["03", "Live assessment pathways"],
  ["360°", "View of human capability"]
]

export default function TrustStrip() {
  return (
    <section aria-label="Fuzzie Gauge highlights" className="border-y border-line bg-panel/40">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-2 divide-x divide-y divide-line px-5 lg:px-10 sm:grid-cols-4 sm:divide-y-0">
        {STATS.map(([value, label]) => (
          <div key={label} className="px-4 py-7 text-center sm:px-6">
            <p className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl">{value}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
