import HeroSection from "./components/HeroSection";
import SummarySection from "./components/SummarySection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import VisionSection from "./components/VisionSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
}
