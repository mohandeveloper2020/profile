import { visionStatements } from "../portfolio-data";
import styles from "../section-page.module.css";

export default function VisionSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Vision</h2>
      <p className={styles.sectionIntro}>
        The values and aspirations behind the portfolio, from craft quality to
        broader product and organizational impact.
      </p>
      <div className={styles.quoteGrid}>
        {visionStatements.map((statement) => (
          <article key={statement} className={styles.quoteCard}>
            <p>{statement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}