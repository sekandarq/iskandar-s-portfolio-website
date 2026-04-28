import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { TimelineSection } from "@/components/portfolio/timeline-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  )
}
