import { DIMENSIONS } from "../data/site.js"
import { DimIcon } from "./Icons.jsx"
export default function CognitiveDimensions() {
  return (
    <section id="dimensions" className="mx-auto w-full max-w-[1500px] px-5 py-24 lg:px-10">
      <div className="max-w-2xl"><p className="label">6 Cognitive Dimensions</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Six Dimensions of Intelligence</h2>
        <p className="mt-4 text-slate-400">We measure capability across six interconnected dimensions, providing a holistic view of human potential beyond traditional academic metrics.</p></div>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DIMENSIONS.map((d) => (
          <li key={d.id} className={`card group p-6 ${d.pending ? "opacity-60" : ""}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-accent transition group-hover:scale-110 group-hover:bg-accent/10"><DimIcon type={d.icon} /></div>
            <h3 className="mt-5 text-lg font-semibold text-white">{d.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{d.text}</p>
          </li>))}
      </ul>
    </section>
  )
}
