import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FloatingGithub from "@/components/FloatingGithub";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
    <FloatingGithub />

    {/* Footer */}
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-muted-foreground text-sm">
        © 2025 Hassan Huda. Built with React & Tailwind CSS.
      </p>
    </footer>
  </div>
);

export default Index;
