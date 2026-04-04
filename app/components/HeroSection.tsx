import Image from "next/image";
import styles from "../page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.tag}>UI/UX Specialist - Design and Development</p>
          <h1>
            Mohan Madheshwaran
            <span>Frontend Development • UI Design • UX Strategy</span>
          </h1>
          <p className={styles.heroSummary}>
            Designing and building digital experiences that balance product clarity,
            visual quality, and real-world implementation rigor.
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
  );
}