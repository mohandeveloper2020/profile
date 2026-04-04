import { timelineItems } from "../portfolio-data";
import styles from "../section-page.module.css";

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Career Timeline</h2>
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
  );
}