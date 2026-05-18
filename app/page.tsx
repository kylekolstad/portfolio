import { Navigation } from './components/navigation'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { ProjectsSection } from './components/projects-section'
import { TechStackSection } from './components/skills-section'
import { ExperienceSection } from './components/experience-section'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--glow-indigo),transparent_50%)] opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15] pointer-events-none" />

      <div className="relative">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechStackSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
