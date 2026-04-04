import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <div className="relative grid gap-9">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
}
