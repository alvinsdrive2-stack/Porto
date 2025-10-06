import { useCallback, useMemo } from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OrganizationsSection } from "@/components/sections/OrganizationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { ScrollButton } from "@/components/ui/scroll-button";
import {
  navItems,
  personalInfo,
  type SectionId,
} from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Index() {
  const sectionIds = useMemo<SectionId[]>(() => navItems.map((item) => item.id), []);
  const activeSection = useScrollSpy<SectionId>(sectionIds, 0.4);

  const handleNavigate = useCallback((id: SectionId) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(100,255,218,0.12),_transparent_55%)]" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-gradient opacity-30" aria-hidden="true" />

      <MobileNav
        navItems={navItems}
        personalInfo={personalInfo}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <Sidebar
        navItems={navItems}
        personalInfo={personalInfo}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="relative flex flex-col md:pl-[320px]">
        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-20 lg:px-20">
          <HeroSection personalInfo={personalInfo} onNavigate={handleNavigate} />
          <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20 lg:mt-24 lg:gap-24">
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <OrganizationsSection />
            <ContactSection personalInfo={personalInfo} />
          </div>
        </div>
      </main>

      {/* Scroll buttons for each section */}
      <ScrollButton sectionId="about" showThreshold={0.8} />
      <ScrollButton sectionId="experience" showThreshold={0.8} />
      <ScrollButton sectionId="projects" showThreshold={0.8} />
      <ScrollButton sectionId="skills" showThreshold={0.8} />
      <ScrollButton sectionId="education" showThreshold={0.8} />
      <ScrollButton sectionId="organizations" showThreshold={0.8} />
      <ScrollButton sectionId="contact" showThreshold={0.8} />
    </div>
  );
}
