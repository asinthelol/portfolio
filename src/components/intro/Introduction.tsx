import styles from "./introduction.module.scss";
import { gsap } from "gsap";

export default function Introduction() {
  return (
    <section id={styles["intro-wrapper"]}>
      <div id={styles["intro"]}>
        <h1>SOFTWARE<hr />DEVELOPER</h1>
        <span>STUDENT BUILDING STUNNING APPLICATIONS<hr />BASED IN BOSTON, MASSACHUSETTS</span>
      </div>
      

      <div id={styles["down-arrow-wrapper"]}>
        <span className="material-symbols-outlined">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  )
}