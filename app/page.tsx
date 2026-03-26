import {
  BriefcaseBusiness,
  Database,
  Globe,
  Layers,
  PenTool,
  Terminal,
} from "lucide-react";
import styles from "./page.module.css";

const skillItems = [
  { label: "Frontend Development", icon: Globe },
  { label: "UI Design", icon: PenTool },
  { label: "API Integration", icon: Layers },
  { label: "Backend Logic", icon: Terminal },
  { label: "Data Handling", icon: Database },
  { label: "Product Delivery", icon: BriefcaseBusiness },
];

const timelineItems = [
  {
    duration: "Dec 2018 - Present",
    role: "Lead UI Developer",
    company: "ITC Infotech",
    note: "Building responsive products and scalable features for modern web platforms.",
  },
  {
    duration: "2017 - 2018",
    role: "Frontend Engineer",
    company: "Your Previous Company",
    note: "Designed and developed component systems with a strong focus on UX quality.",
  },
  {
    duration: "2020 - 2022",
    role: "Junior Developer",
    company: "Your Early Career Role",
    note: "Worked on full-stack modules and collaborated closely with product teams.",
  },
];

const projectItems = [
  {
    name: "Project Alpha",
    description:
      "A modern web experience focused on performance and clean architecture. Built reusable components and streamlined user flows for fast onboarding.",
  },
  {
    name: "Project Nova",
    description:
      "An analytics-oriented dashboard that turns raw activity into clear, actionable insights. Includes customizable widgets and responsive charts.",
  },
  {
    name: "Project Orbit",
    description:
      "A collaboration platform concept for distributed teams with task tracking and smart notifications. Designed to balance usability with productivity.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <section className={styles.hero}>
        <p className={styles.tag}>Personal Profile Showcase</p>
        <h1>
          Mohan Madheshwaran
          <span>Full Stack Developer</span>
        </h1>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {skillItems.map(({ label, icon: Icon }) => (
            <article key={label} className={styles.skillCard}>
              <Icon size={24} aria-hidden="true" />
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Career Timeline</h2>
        <div className={styles.timeline}>
          {timelineItems.map((item) => (
            <article key={item.duration} className={styles.timelineItem}>
              <p className={styles.timelineDuration}>{item.duration}</p>
              <h3>{item.role}</h3>
              <p className={styles.timelineCompany}>{item.company}</p>
              <p className={styles.timelineNote}>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {projectItems.map((project) => (
            <article key={project.name} className={styles.projectCard}>
              <div className={styles.imagePlaceholder}>Project Image Placeholder</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
