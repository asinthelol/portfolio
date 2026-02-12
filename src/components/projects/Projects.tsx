import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <section className={styles["projects-wrapper"]} id="works">
      <h2>WORKS</h2>

      <div id={styles["projects"]}>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\dashboard.webp" alt="Photo of Dashboard Analytics App project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/zephyr/" target="_blank" rel="noreferrer">
                Dashboard Analytics App
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Dec 2025</p>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\networking.webp" alt="Photo of Social Networking App project" loading="lazy" style={{objectPosition: "top"}}/>
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/social-networking-app/" target="_blank" rel="noreferrer">
                Social Networking App
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Dec 2025</p>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\fluid.webp" alt="Photo of Fluid Simulation project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/fluid-simulator/" target="_blank" rel="noreferrer">
                Fluid Simulator
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Nov 2025</p>
          </div>
        </div>

        <div className={styles["project-card"]}>
          <div className={styles["project-photo"]}>
            <img src="\project-photos\gravity.webp" alt="Photo of Gravity Simulation project" loading="lazy" />
          </div>

          <div className={styles["project-info"]}>
            <h3>
              <a href="https://github.com/asinthelol/gravity-simulator/" target="_blank" rel="noreferrer">
                Gravity Simulator
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </a>
            </h3>
            <p>Nov 2025</p>
          </div>
        </div>

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
            <p>Sep 2025</p>
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