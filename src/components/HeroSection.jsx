import { ArrowRight, BarChart3, Route, Sparkles } from "lucide-react"
import { LINKS } from "../data/site.js"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-violet/10 blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-[1500px] items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="label">SCODEL Cognitive Assessment</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Understand How You Think. <span className="text-accent">Discover What You Can Become.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">Fuzzie Gauge is a multidimensional cognitive profiling system designed to help understand how people think, connect, create, and solve problems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.start} className="btn btn-primary">Start Your Assessment <ArrowRight size={16} /></a>
            <a href="#journey" className="btn btn-ghost"><BarChart3 size={16} /> View Sample Report</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="/dimensions" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-accent"><Sparkles size={15} /> Explore Cognitive Dimensions</a>
            <a href="/assessment" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-accent"><Route size={15} /> See How It Works</a>
          </div>
        </div>
        <div className="brain-illustration-wrap">
          <div className="hero-visual-field" aria-hidden="true">
            <div className="hero-grid" />
            <span className="hero-data-point hero-data-point-one" />
            <span className="hero-data-point hero-data-point-two" />
            <span className="hero-data-point hero-data-point-three" />
            <svg viewBox="0 0 620 520" className="hero-orbits">
              <ellipse cx="310" cy="260" rx="245" ry="112" />
              <ellipse cx="310" cy="260" rx="190" ry="235" transform="rotate(58 310 260)" />
              <path d="M75 260h470M310 38v444" />
            </svg>
          </div>
          <div className="brain-illustration-glow" />
          <img
            src="/brain-illustration.svg"
            alt="Cognitive brain illustration"
            className="brain-illustration mx-auto w-full max-w-[560px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
