import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <section className={styles["projects-wrapper"]} id="works">
      <h2>WORKS</h2>

      <div id={styles["projects"]}>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\imagehub.webp" alt="Photo of ImageHub project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/imagehub/" target="_blank" rel="noreferrer">
                ImageHub
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Feb 2024</p>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\fansite.webp" alt="Photo of Fan Website project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/tuyu-fansite/" target="_blank" rel="noreferrer">
                Fan Website
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Apr 2024</p>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\webplayer.webp" alt="Photo of Spotify playback project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/spotify-music-player/" target="_blank" rel="noreferrer">
                Spotify Player
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Mar 2025</p>
          </div>
        </div>

      </div>
        
      <div>
        
      </div>
    </section>
  )
}