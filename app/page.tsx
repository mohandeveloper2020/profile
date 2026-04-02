import {
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  GitBranch,
  LayoutDashboard,
  Layers,
  MonitorSmartphone,
  Palette,
  PenTool,
  Terminal,
} from "lucide-react";
import styles from "./page.module.css";

const skillItems = [
  { label: "React.js & Next.js", icon: Code2 },
  { label: "JavaScript, HTML, CSS & SCSS", icon: GitBranch },
  { label: "Figma, Adobe XD & Sketch", icon: Palette },
  { label: "Responsive UI Development", icon: MonitorSmartphone },
  { label: "Tailwind CSS & Bootstrap 5", icon: LayoutDashboard },
  { label: "JIRA, Git, GitLab & Bitbucket", icon: BriefcaseBusiness },
];

const technicalSkillSections = [
  {
    title: "UI Development",
    items: [
      { label: "React.js", icon: Code2 },
      { label: "Next.js", icon: Globe },
      { label: "JavaScript", icon: GitBranch },
      { label: "HTML", icon: Layers },
      { label: "CSS", icon: Palette },
      { label: "SCSS", icon: PenTool },
      { label: "Tailwind CSS", icon: LayoutDashboard },
      { label: "Bootstrap 5", icon: Database },
      { label: "BEM", icon: Terminal },
    ],
  },
  {
    title: "UX Design Tools",
    items: [
      { label: "Figma", icon: Palette },
      { label: "Adobe XD", icon: PenTool },
      { label: "Sketch", icon: Layers },
      { label: "UX Pin", icon: LayoutDashboard },
      { label: "Invision", icon: MonitorSmartphone },
      { label: "Photoshop", icon: Palette },
      { label: "Illustrator", icon: PenTool },
      { label: "UX Tools", icon: BriefcaseBusiness },
    ],
  },
];

const timelineItems = [
  {
    duration: "Dec 2018 - Present",
    role: "Lead Consultant - UI/UX",
    company: "ITC Infotech",
    note: "Leading end-to-end design and development for Next.js and React applications for clients including Hitachi Energy and Merck Group, with dashboards, Gen AI workflows, SPFx customization, and scalable UI delivery.",
  },
  {
    duration: "Jul 2018 - Nov 2018",
    role: "UI Developer",
    company: "Smartron India Pvt Ltd",
    note: "Developed and maintained the company website and e-commerce experiences, created semantic Handlebars templates, and worked closely with stakeholders on new product pages.",
  },
  {
    duration: "Apr 2017 - Jun 2018",
    role: "UI Developer",
    company: "Usha Martin Technologies",
    note: "Built e-commerce interfaces on the Hybris platform, customized out-of-the-box patterns using JSP, LESS, and JavaScript, and ensured pixel-perfect responsiveness across devices.",
  },
  {
    duration: "Jul 2016 - Mar 2017",
    role: "UX Designer",
    company: "CoWrks",
    note: "Designed and developed in-house websites and apps, created wireframes and UI flows, and supported marketing with structured digital templates.",
  },
  {
    duration: "May 2015 - Jun 2016",
    role: "UX Designer",
    company: "Razorfish Technologies India",
    note: "Worked on responsive web apps and marketing collateral, supported project pitches and client discussions, and streamlined frontend style guides and component systems.",
  },
];

const projectItems = [
  {
    name: "Hitachi Energy - Gen AI Dashboard",
    description:
      "Designed and developed a Next.js-based experience to showcase Gen AI extraction results with analytical charts, document upload workflows, and multi-role access.",
  },
  {
    name: "Merck Group - SPFx & React Apps",
    description:
      "Built responsive component-based applications using React.js and Tailwind CSS, integrating strong UX design practices and Liquid Oxygen design system customization.",
  },
  {
    name: "Commerce & Brand Platforms",
    description:
      "Contributed to product and e-commerce experiences such as smartron.com, Pick n Pay, and LC Waikiki with responsive UI delivery and business-focused design execution.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <section className={styles.hero}>
        <p className={styles.tag}>Lead Consultant - UI/UX</p>
        <h1>
          Mohan M
          <span>Frontend Development • UI Design • UX Strategy</span>
        </h1>
        <p className={styles.heroSummary}>
          UI and UX specialist with over 10 years of expertise in frontend development
          and user interface design, focused on building responsive, accessible, and
          scalable digital products with clean user experiences.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <p className={styles.sectionIntro}>
          Technical strengths from the resume across UI development, UX design tools,
          responsive engineering, and collaborative delivery workflows.
        </p>
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
        <h2>Technical Skills</h2>
        <p className={styles.sectionIntro}>
          Resume-based breakdown of UI Development and UX Design Tools with
          technology-level listing.
        </p>
        <div className={styles.technicalGroups}>
          {technicalSkillSections.map((group) => (
            <article key={group.title} className={styles.technicalGroup}>
              <h3>{group.title}</h3>
              <div className={styles.technicalItems}>
                {group.items.map(({ label, icon: Icon }) => (
                  <div key={label} className={styles.technicalItem}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Career Timeline</h2>
        <p className={styles.sectionIntro}>
          Career progression across enterprise consulting, e-commerce platforms, UX-led
          product work, and frontend delivery for web applications.
        </p>
        <div className={styles.timeline}>
          {timelineItems.map((item) => (
            <article key={`${item.company}-${item.duration}`} className={styles.timelineItem}>
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
        <p className={styles.sectionIntro}>
          Selected highlights adapted from the resume, covering Gen AI dashboards,
          enterprise platforms, and commerce-focused web experiences.
        </p>
        <div className={styles.projectsGrid}>
          {projectItems.map((project) => (
            <article key={project.name} className={styles.projectCard}>
              <div className={styles.imagePlaceholder}>Project Preview Placeholder</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
