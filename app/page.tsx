import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-12">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
}
