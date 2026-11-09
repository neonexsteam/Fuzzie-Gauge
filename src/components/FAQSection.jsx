import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FAQS = [
  ["How long does the assessment take?", "The full profile is designed around a focused set of scenario-based questions. Most people can complete it in one sitting, at a pace that allows them to think carefully about each response."],
  ["Is this an IQ test?", "No. Fuzzie Gauge is a multidimensional cognitive profiling experience. It explores connected capabilities such as analytical thinking, technical reasoning, creativity, human understanding, systems thinking, and practical application rather than reducing you to a single IQ score."],
  ["Is there a correct or incorrect answer?", "The assessment is designed to understand how you approach different situations. There is no single answer that defines your overall capability, and responses are interpreted as part of a broader profile."],
  ["How is my data used?", "Your responses are intended to generate developmental insights. They are not used to assign fixed diagnostic labels or define you through a single score. Connect the assessment to your organization’s approved privacy policy before launch."],
  ["Who is the assessment for?", "Fuzzie Gauge is designed for people who want to understand how they think, learn, connect ideas, and solve problems, including learners, educators, professionals, and development-focused organizations."],
  ["Will I receive a report?", "The intended experience includes a multidimensional profile that highlights connected capability signals and opportunities for learning, practice, and career alignment."],
  ["Can I retake the assessment?", "Retake availability depends on the assessment pathway and account configuration. When enabled, a later attempt can help you reflect on changes in your approach and development over time."]
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto w-full max-w-[1050px] px-5 py-20 lg:px-10">
      <div className="text-center">
        <p className="label">Frequently Asked Questions</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Everything you need to know.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">A clearer understanding of the assessment helps you approach it with confidence.</p>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-panel/50">
        {FAQS.map(([question, answer], index) => {
          const isOpen = open === index
          return (
            <div key={question} className="border-b border-line last:border-b-0">
              <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-accent/5 sm:px-7" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/70 text-xs font-bold text-accent" aria-hidden="true">{index + 1}</span>
                <span className="flex-1 text-sm font-semibold text-white sm:text-base">{question}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: .2 }} className="shrink-0 text-slate-400"><ChevronDown size={19} /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div id={`faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }} className="overflow-hidden">
                  <p className="px-5 pb-5 pl-14 text-sm leading-7 text-slate-400 sm:px-7 sm:pl-16">{answer}</p>
                </motion.div>}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
