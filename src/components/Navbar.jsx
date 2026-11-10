import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { NAV, LINKS } from "../data/site.js"
import { Logo } from "./Icons.jsx"
export default function Navbar({ theme, onToggleTheme }) {
  const [s, setS] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setS(window.scrollY > 16); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${s || open ? "bg-ink/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.4)] border-b border-line" : "border-b border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between       gap-2 px-4 sm:px-5 lg:px-10">
              <a href="/" aria-label="Fuzzie Gauge home" className="nav-brand min-w-0 shrink"><Logo /></a>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map(([n, h]) => <li key={n}><a href={h} className="nav-link text-sm text-slate-400 transition hover:text-white">{n}</a></li>)}
        </ul>
        <div className="nav-actions flex shrink-0 items-center gap-1 sm:gap-3">
          <button onClick={onToggleTheme} className="rounded-lg p-2 text-white transition hover:bg-panel hover:text-accent" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="/login" className="nav-auth-login hidden rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent lg:inline-flex">Log in</a>
          <a href="/signup" className="nav-auth-signup hidden items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold shadow-[0_0_24px_rgba(47,109,246,.2)] transition hover:-translate-y-0.5 hover:bg-white hover:text-white hover:shadow-[0_0_30px_rgba(47,109,246,.42)] lg:inline-flex">Sign up <ArrowUpRight size={15} /></a>
          <a href={LINKS.start}           className="nav-start btn btn-primary !py-2 whitespace-nowrap">Start Assessment</a>
          <button className="rounded-lg p-2 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && <div id="mobile-menu" className="border-t border-line bg-ink px-5 pb-6 lg:hidden">
        <ul className="flex flex-col py-2">{NAV.map(([n, h]) => <li key={n}><a href={h} onClick={() => setOpen(false)} className="block border-b border-line/60 py-3 text-slate-200">{n}</a></li>)}</ul>
        <a href={LINKS.start} onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">Start Assessment</a>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:hidden">
          <a href="/login" onClick={() => setOpen(false)} className="btn btn-ghost">Log in</a>
          <a href="/signup" onClick={() => setOpen(false)} className="nav-auth-signup btn btn-primary">Sign up <ArrowUpRight size={15} /></a>
        </div>
      </div>}
    </header>
  )
}
