import { useEffect, useRef } from "react";
import styles from "./projects.module.scss";

type Project = {
  title: string;
  date: string;
  href: string;
  image: string;
  alt: string;
  objectPosition?: string;
  // Optional stack labels shown under the title, e.g. ["Next.js", "FastAPI"].
  tags?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Dashboard Analytics App",
    date: "Dec 2025",
    href: "https://github.com/asinthelol/zephyr/",
    image: "/project-photos/dashboard.webp",
    alt: "Photo of Dashboard Analytics App project",
    tags: ["TypeScript", "Python", "SQLite", "Data"]
  },
  {
    title: "Social Networking App",
    date: "Dec 2025",
    href: "https://github.com/asinthelol/social-networking-app/",
    image: "/project-photos/networking.webp",
    alt: "Photo of Social Networking App project",
    objectPosition: "top",
    tags: ["TypeScript", "Python", "SQLite", "AWS", "Docker", "CI/CD"]
  },
  {
    title: "ImageHub",
    date: "Sep 2025",
    href: "https://github.com/asinthelol/imagehub/",
    image: "/project-photos/imagehub.webp",
    alt: "Photo of ImageHub project",
    tags: ["TypeScript", "Java", "C#", "PostgreSQL", "Spring Boot", "Kafka", "Docker"]
    
  },
];

const GITHUB_PROFILE = "https://github.com/asinthelol";

// "https://github.com/asinthelol/zephyr/" -> "asinthelol/zephyr"
const repoName = (href: string) => new URL(href).pathname.replace(/^\/|\/$/g, "");

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Fade cards up as they scroll into view.
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles["projects-wrapper"]} id="works">
      <header className={styles["projects-header"]}>
        <div className={styles.title}>
          <span className={styles.pill}>
            <i className={styles.dot} /> Portfolio
          </span>
          <h2>
            Selected <em>works</em>
          </h2>
        </div>

        <a className={styles["view-more"]} href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
          <span className={styles.action}>
            View more <span aria-hidden="true">&larr;</span>
          </span>
        </a>
      </header>

      <div id={styles["projects"]} ref={gridRef}>
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            className={styles["project-card"]}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ "--i": i % 3 } as React.CSSProperties}
          >
            <div className={styles["project-photo"]}>
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
              />
              {/* Hover overlay: dims the image and shows the repo. */}
              <div className={styles.overlay} aria-hidden="true">
                <span className={`${styles.badge} material-symbols-outlined`}>arrow_outward</span>
                <span className={styles.source}>GitHub</span>
                <span className={styles.repo}>{repoName(project.href)}</span>
              </div>
            </div>

            <div className={styles["project-info"]}>
              <h3>{project.title}</h3>
              <p>{project.date}</p>
            </div>

            {project.tags && (
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
