import { LINKS, CONTACT } from "../data/site.js"
import { Logo } from "./Icons.jsx"
const A = ({ href, children }) => href ? <a href={href} className="footer-link">{children}</a> : <span className="footer-muted" title="Link pending">{children}</span>
const ext = (h) => h && h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}
export default function Footer() {
  const col = (t, items) => <nav aria-label={t}><h3 className="footer-title text-sm font-semibold">{t}</h3><ul className="footer-copy mt-4 space-y-2 text-sm">{items.map(([n, h]) => <li key={n}>{h ? <a href={h} {...ext(h)} className="footer-link">{n}</a> : <A>{n}</A>}</li>)}</ul></nav>
  return (
    <footer id="contact" className="site-footer border-t border-line bg-panel/40">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 py-16 lg:px-10 md:grid-cols-2 lg:grid-cols-4">
        <div><Logo /><p className="footer-copy mt-4 text-sm">Fuzzie Gauge is a multidimensional cognitive profiling system designed to help understand how people think, connect, create and solve problems.</p>
          <div className="footer-muted mt-4 flex items-center gap-2 text-xs">A product of <Logo name="scodel" text="SCODEL" className="h-5" /></div></div>
        {col("Explore", [["Home", "/"], ["About Fuzzie Gauge", "/about"], ["Cognitive Dimensions", "/dimensions"], ["Assessment Journey", "/assessment"], ["Explore Assessments", "/explore"]])}
        {col("Resources", [["Full Compilation", LINKS.compilation], ["Premium Workbook", LINKS.compilation], ["Digital PDF", LINKS.compilation], ["Help & Support", LINKS.help], ["FAQs", LINKS.faqs]])}
        <div><h3 className="footer-title text-sm font-semibold">Contact</h3>
          <ul className="footer-copy mt-4 space-y-2 text-sm">
            {CONTACT.email && <li><a className="footer-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>}
            {CONTACT.phone && <li>{CONTACT.phone}</li>}{CONTACT.address && <li>{CONTACT.address}</li>}
            {CONTACT.social.map((s) => <li key={s.label}><a href={s.href} {...ext(s.href)} className="footer-link">{s.label}</a></li>)}
            <li><a href={LINKS.signIn} {...ext(LINKS.signIn)} className="footer-link">Sign in to SCODEL</a></li>
          </ul></div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-slate-500 lg:px-10">
          <p>© {new Date().getFullYear()} SCODEL. All rights reserved. Fuzzie Gauge is a SCODEL product.</p>
          <ul className="flex gap-5"><li><A href={LINKS.privacy}>Privacy Policy</A></li><li><A href={LINKS.terms}>Terms & Conditions</A></li><li><A href={LINKS.disclaimer}>Disclaimer</A></li></ul>
        </div>
      </div>
    </footer>
  )
}
