import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, KeyRound, LoaderCircle, Mail, ShieldCheck, UserRound, X } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Logo } from "./Icons.jsx"

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  remember: z.boolean().optional()
})

const signupSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters."),
  confirmPassword: z.string().min(1, "Confirm your password."),
  terms: z.boolean().refine(Boolean, "Please accept the terms to continue.")
}).refine((values) => values.password === values.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"]
})

const forgotSchema = z.object({ email: z.string().email("Enter a valid email address.") })

const spring = { type: "spring", stiffness: 260, damping: 24 }

function Field({ label, name, register, error, icon: Icon, type = "text", ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <span className={`auth-input-wrap ${error ? "auth-input-error" : ""}`}>
        <Icon size={17} aria-hidden="true" />
        <input {...register(name)} type={type} className="auth-input" aria-invalid={Boolean(error)} {...props} />
      </span>
      <AnimatePresence initial={false}>
        {error && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="mt-1.5 block text-xs text-rose-300">{error.message}</motion.span>}
      </AnimatePresence>
    </label>
  )
}

function PasswordField({ label, name, register, error }) {
  const [visible, setVisible] = useState(false)
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <span className={`auth-input-wrap ${error ? "auth-input-error" : ""}`}>
        <KeyRound size={17} aria-hidden="true" />
        <input {...register(name)} type={visible ? "text" : "password"} className="auth-input" aria-invalid={Boolean(error)} />
        <motion.button type="button" whileTap={{ scale: 0.88 }} onClick={() => setVisible((value) => !value)} className="rounded-md p-1 text-slate-400 transition hover:text-white" aria-label={visible ? "Hide password" : "Show password"}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={visible ? "hide" : "show"} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }}><span className="block">{visible ? <EyeOff size={17} /> : <Eye size={17} />}</span></motion.span>
          </AnimatePresence>
        </motion.button>
      </span>
      {error && <span className="mt-1.5 block text-xs text-rose-300">{error.message}</span>}
    </label>
  )
}

function AuthButton({ children, loading, onClick }) {
  return <motion.button type="submit" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }} disabled={loading} onClick={onClick} className="auth-submit">{loading ? <LoaderCircle size={18} className="animate-spin" /> : children}</motion.button>
}

function AuthAside({ mode }) {
  return (
    <div className="auth-aside relative hidden overflow-hidden lg:flex lg:w-[46%]">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <div className="auth-grid" />
      <div className="relative z-10 flex min-h-full flex-col justify-between p-12 xl:p-16">
        <a href="/" aria-label="Fuzzie Gauge home"><Logo className="h-9" /></a>
        <div className="max-w-md">
          <motion.div key={mode} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
            <p className="label">Think differently</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white xl:text-6xl">Understand the way your mind works.</h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">A clearer view of your capabilities, built to turn curiosity into meaningful growth.</p>
          </motion.div>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-300"><ShieldCheck size={18} className="text-accent" /> Designed for thoughtful, responsible assessment</div>
      </div>
    </div>
  )
}

export default function AuthPage({ mode = "login" }) {
  const [notice, setNotice] = useState(null)
  const [loading, setLoading] = useState(false)
  const [forgotOpen, setForgotOpen] = useState(false)
  const schema = mode === "signup" ? signupSchema : loginSchema
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema), defaultValues: { remember: false, terms: false } })
  const forgotForm = useForm({ resolver: zodResolver(forgotSchema) })

  const submit = async (values) => {
    setNotice(null)
    setLoading(true)
    await new Promise((resolve) => window.setTimeout(resolve, 650))
    setLoading(false)
    setNotice({ type: "success", text: `${mode === "signup" ? "Account creation" : "Login"} is ready to connect to your authentication API.` })
    console.info("Authentication form submitted", { mode, values: { ...values, password: undefined, confirmPassword: undefined } })
  }

  const sendReset = async () => {
    await forgotForm.handleSubmit(async () => {
      setForgotOpen(false)
      setNotice({ type: "success", text: "If an account exists for that email, reset instructions will be sent." })
    })()
  }

  return (
    <main className="auth-page min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pt-28">
      <div className="auth-shell mx-auto flex max-w-[1420px] overflow-hidden rounded-[2rem] border border-line/80 bg-panel/50 shadow-[0_30px_100px_rgba(0,0,0,.28)]">
        <AuthAside mode={mode} />
        <section className="flex min-w-0 flex-1 items-center justify-center p-5 sm:p-10 lg:p-14 xl:p-20">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 lg:hidden"><a href="/" aria-label="Fuzzie Gauge home"><Logo className="h-8" /></a></div>
            <motion.div key={mode} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
              <p className="label">{mode === "signup" ? "Join the journey" : "Welcome back"}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{mode === "signup" ? "Create your account." : "Welcome back."}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{mode === "signup" ? "Start building a more meaningful picture of your cognitive strengths." : "Sign in to continue exploring your cognitive profile."}</p>
            </motion.div>
            <AnimatePresence initial={false} mode="wait">
              {notice && <motion.div initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0 }} className="mt-6 flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/10 p-3 text-sm text-blue-100"><Check size={17} className="mt-0.5 shrink-0 text-accent" />{notice.text}</motion.div>}
            </AnimatePresence>
            <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-5" noValidate>
              {mode === "signup" && <Field label="Full name" name="name" register={register} error={errors.name} icon={UserRound} autoComplete="name" placeholder="Your name" />}
              <Field label="Email address" name="email" register={register} error={errors.email} icon={Mail} type="email" autoComplete="email" placeholder="you@example.com" />
              <PasswordField label="Password" name="password" register={register} error={errors.password} />
              {mode === "signup" && <PasswordField label="Confirm password" name="confirmPassword" register={register} error={errors.confirmPassword} />}
              {mode === "login" ? <div className="flex items-center justify-between gap-4 text-sm"><label className="flex items-center gap-2 text-slate-400"><input type="checkbox" {...register("remember")} className="auth-checkbox" /> Remember me</label><button type="button" onClick={() => setForgotOpen(true)} className="text-accent transition hover:text-white">Forgot password?</button></div> : <label className="flex items-start gap-2 text-sm text-slate-400"><input type="checkbox" {...register("terms")} className="auth-checkbox mt-0.5" /><span>I agree to the <a href="/terms" className="text-accent hover:text-white">Terms and Conditions</a>.</span></label>}
              {errors.terms && <span className="block text-xs text-rose-300">{errors.terms.message}</span>}
              <AuthButton loading={loading}>{mode === "signup" ? <>Create account <ArrowRight size={18} /></> : <>Sign in <ArrowRight size={18} /></>}</AuthButton>
            </form>
            <div className="my-7 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500"><span className="h-px flex-1 bg-line" />or<span className="h-px flex-1 bg-line" /></div>
            <motion.button type="button" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setNotice({ type: "success", text: "Google authentication is ready for provider configuration." })} className="auth-google">G <span>Continue with Google</span></motion.button>
            <p className="mt-7 text-center text-sm text-slate-400">{mode === "signup" ? "Already have an account?" : "New to Fuzzie Gauge?"} <a href={mode === "signup" ? "/login" : "/signup"} className="font-semibold text-accent hover:text-white">{mode === "signup" ? "Sign in" : "Create account"}</a></p>
          </div>
        </section>
      </div>
      <AnimatePresence>
        {forgotOpen && <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/75 p-5 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="forgot-title">
          <motion.div initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 12 }} transition={spring} className="w-full max-w-md rounded-2xl border border-line bg-panel p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between"><div><p className="label">Account recovery</p><h3 id="forgot-title" className="mt-2 text-2xl font-semibold text-white">Reset your password.</h3></div><button type="button" onClick={() => setForgotOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-ink hover:text-white" aria-label="Close dialog"><X size={18} /></button></div>
            <p className="mt-3 text-sm leading-6 text-slate-400">Enter your email and we’ll prepare a secure reset link.</p>
            <form onSubmit={(event) => { event.preventDefault(); sendReset() }} className="mt-6 space-y-4"><Field label="Email address" name="email" register={forgotForm.register} error={forgotForm.formState.errors.email} icon={Mail} type="email" autoComplete="email" placeholder="you@example.com" /><button className="auth-submit" type="submit">Send reset link <ArrowRight size={18} /></button></form>
            <button type="button" onClick={() => setForgotOpen(false)} className="mx-auto mt-5 flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={15} /> Back to sign in</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </main>
  )
}
