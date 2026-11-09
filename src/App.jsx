import { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import CognitiveDimensions from "./components/CognitiveDimensions.jsx"
import AssessmentJourney from "./components/AssessmentJourney.jsx"
import FullCompilation from "./components/FullCompilation.jsx"
import AssessmentExplorer from "./components/AssessmentExplorer.jsx"
import CognitiveInsights from "./components/CognitiveInsights.jsx"
import ResponsibleAssessment from "./components/ResponsibleAssessment.jsx"
import FinalCTA from "./components/FinalCTA.jsx"
import Footer from "./components/Footer.jsx"
import ProfilePreview from "./components/ProfilePreview.jsx"
import TrustStrip from "./components/TrustStrip.jsx"
import FeaturedAssessments from "./components/FeaturedAssessments.jsx"
import CredibilityBlock from "./components/CredibilityBlock.jsx"
import AuthPage from "./components/AuthPage.jsx"
import { LINKS } from "./data/site.js"
import FAQSection from "./components/FAQSection.jsx"
import SampleQuestion from "./components/SampleQuestion.jsx"
import AssessmentProgress from "./components/AssessmentProgress.jsx"
import ReportPreview from "./components/ReportPreview.jsx"

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("fuzzie-gauge-theme") || "dark")
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("fuzzie-gauge-theme", theme)
  }, [theme])
  const path = window.location.pathname.replace(/\/+$/, "") || "/"
  if (path === "/login" || path === "/signup") {
    return <><Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} /><AuthPage mode={path.slice(1)} /></>
  }
  const pages = {
    "/about": <CognitiveInsights />,
    "/dimensions": <CognitiveDimensions />,
    "/assessment": <AssessmentJourney />,
    "/explore": <AssessmentExplorer />,
    "/resources": <FullCompilation />,
    "/contact": <><ResponsibleAssessment /><FinalCTA /></>
  }
  const content = pages[path] || <><HeroSection /><SampleQuestion /><AssessmentProgress /><TrustStrip /><ProfilePreview /><ReportPreview /><AssessmentJourney /><CredibilityBlock /><FeaturedAssessments /><FAQSection /><FinalCTA /></>
  return (<><a href="/explore" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to assessments</a>
    <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} /><main className="pb-16 lg:pb-0">{content}</main><Footer />
    <a href={LINKS.start} className="mobile-sticky-cta">Start Your Assessment <span aria-hidden="true">→</span></a>
  </>)
}
