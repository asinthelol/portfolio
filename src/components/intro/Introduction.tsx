import styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <section id={styles["intro-wrapper"]}>
        <h1>SOFTWARE<hr />DEVELOPER</h1>
        <span>STUDENT BUILDING STUNNING APPLICATIONS<hr />BASED IN BOSTON, MASSACHUSETTS</span>
    </section>
  )
}