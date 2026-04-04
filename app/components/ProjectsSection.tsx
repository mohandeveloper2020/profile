import { projectItems } from "../portfolio-data";
import styles from "../section-page.module.css";

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <p className={styles.sectionIntro}>
        Selected highlights adapted from the resume, covering Gen AI dashboards,
        enterprise platforms, and commerce-focused web experiences.
      </p>
      <div className={styles.projectsGrid}>
        {projectItems.map((project, index) => (
          <article key={project.name} className={styles.projectCard}>
            <div className={styles.projectVisual}>
              <span>{`0${index + 1}`}</span>
            </div>
            <div className={styles.projectBody}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}