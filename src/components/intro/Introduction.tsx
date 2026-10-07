import { useEffect, useState } from "react";
import styles from "./introduction.module.scss";

const SKILLS = ["JavaScript", "Python", "Java", "C++", "C#", "Kafka", "SQL", "Docker", "AWS"];

const bostonTime = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Introduction() {
  const [time, setTime] = useState(bostonTime);

  // Live Boston clock.
  useEffect(() => {
    const id = setInterval(() => setTime(bostonTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id={styles["intro-wrapper"]}>
      <div className={styles.content}>
        <div className={styles.headline}>
          <p className={styles.eyebrow}>Kevin Tolbert &mdash; Student &amp; Developer</p>

          <h1>
            <span className={styles.line} style={delay(0)}>
              <span>Building</span>
            </span>
            <span className={styles.line} style={delay(1)}>
              <span>
                <em>stunning</em>
              </span>
            </span>
            <span className={styles.line} style={delay(2)}>
              <span>applications.</span>
            </span>
          </h1>
        </div>

        <aside className={styles.about}>
          <span className={styles.label} style={delay(3)}>About</span>
          <p style={delay(4)}>
            Computer Science student (May 2027) with co-op experience designing full-stack
            applications and data pipelines that automate business workflows. Projects span
            event-driven services and AWS deployment.
          </p>
          <ul style={delay(5)}>
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className={styles.meta}>
        <span>
          <i className={styles.dot} /> Open to opportunities
        </span>
        <span>Boston, MA &middot; {time}</span>
        <a href="#projects">
          Scroll <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </section>
  );
}
