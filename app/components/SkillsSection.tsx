import Image from "next/image";
import { skillItems, technicalSkillSections } from "../portfolio-data";
import styles from "../section-page.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Technical Skills</h2>
      <p className={styles.sectionIntro}>
        Frontend engineering and UI/UX delivery across modern React platforms,
        design tooling, and collaborative product workflows.
      </p>

      <div className={styles.pillGrid}>
        {skillItems.map((label) => (
          <article key={label} className={styles.pillCard}>
            {label}
          </article>
        ))}
      </div>

      <div className={styles.technicalGroups}>
        {technicalSkillSections.map((group) => (
          <article key={group.title} className={styles.technicalGroup}>
            <h3>{group.title}</h3>
            <div className={styles.technicalItems}>
              {group.items.map(({ label, iconUrl }) => (
                <div key={label} className={styles.technicalItem}>
                  <Image src={iconUrl} alt="" width={32} height={32} className={styles.techIcon} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}