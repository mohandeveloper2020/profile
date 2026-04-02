import {
  BriefcaseBusiness,
  Code2,
  GitBranch,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
} from "lucide-react";
import Image from "next/image";
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
      {
        label: "React.js",
        iconUrl: "https://icon.icepanel.io/Technology/svg/React.svg",
      },
      {
        label: "Next.js",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
      },
      {
        label: "JavaScript",
        iconUrl: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
      },
      {
        label: "TypeScript",
        iconUrl: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
      },
      {
        label: "HTML",
        iconUrl: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      },
      {
        label: "CSS",
        iconUrl: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
      },
      {
        label: "SCSS",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Sass.svg",
      },
      {
        label: "Tailwind CSS",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
      },
      {
        label: "Bootstrap 5",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
      },
    ],
  },
  {
    title: "UX Design Tools",
    items: [
      {
        label: "Figma",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Figma.svg",
      },
      {
        label: "Sketch",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Sketch.svg",
      },
      {
        label: "Adobe XD",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Adobe-XD.svg",
      },
      {
        label: "UX Tools",
        iconUrl: "https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/pencil-ruler.svg",
      },
    ],
  },
  {
    title: "Project Management",
    items: [
      {
        label: "Git",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Git.svg",
      },
      {
        label: "Jira",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Jira.svg",
      },
      {
        label: "GitLab",
        iconUrl: "https://icon.icepanel.io/Technology/svg/GitLab.svg",
      },
      {
        label: "BitBucket",
        iconUrl: "https://icon.icepanel.io/Technology/svg/BitBucket.svg",
      },
      {
        label: "GitHub",
        iconUrl: "https://icon.icepanel.io/Technology/svg/GitHub.svg",
      },
      {
        label: "VS Code",
        iconUrl:
          "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
      },
      {
        label: "Azure",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Azure.svg",
      },
      {
        label: "Azure Devops",
        iconUrl: "https://icon.icepanel.io/Technology/svg/Azure-Devops.svg",
      },
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
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
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
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/profile-pic.jpg"
              alt="Mohan profile photo"
              width={360}
              height={420}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* <section className={styles.section}>
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
      </section> */}

      <section className={styles.section}>
        <h2>Technical Skills</h2>
        <div className={styles.technicalGroups}>
          {technicalSkillSections.map((group) => (
            <article key={group.title} className={styles.technicalGroup}>
              <h3>{group.title}</h3>
              <div className={styles.technicalItems}>
                {group.items.map(({ label, iconUrl }) => (
                  <div key={label} className={styles.technicalItem}>
                    <img
                      src={iconUrl}
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      className={styles.techIcon}
                    />
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
