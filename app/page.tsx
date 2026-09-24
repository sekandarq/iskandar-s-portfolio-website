import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { TimelineSection } from "@/components/portfolio/timeline-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { AnimatedBackground } from "@/components/portfolio/animated-background"
import { PortfolioNav } from "@/components/portfolio/portfolio-nav"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <PortfolioNav />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  )
}
