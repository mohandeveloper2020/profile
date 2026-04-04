import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <div className="space-y-7 md:space-y-9">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
}
