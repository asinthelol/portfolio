import Footer from "../footer/Footer";
import styles from "./contact.module.scss";

const EMAIL = "contact@kevintolbert.dev";
const RESUME = "/Kevin_Tolbert_Resume.pdf";

export default function Contact() {
  return (
    <section className={styles["contact-wrapper"]} id="contact">
      <div className={styles.panel}>
        <h2>
          Got an idea? Let&rsquo;s <em>build it.</em>
        </h2>

        <p>
          I&rsquo;m always excited to collaborate on new projects and opportunities. Whether
          you&rsquo;re starting from scratch or refining an existing idea, my inbox is open.
        </p>

        <div className={styles.links}>
          <a href={`mailto:${EMAIL}?subject=Hello%20Kevin`} className={styles.cta}>
            Send an email <span className="material-symbols-outlined" aria-hidden="true">arrow_outward</span>
          </a>

          <a href={RESUME} download="Kevin_Tolbert_Resume.pdf" className={styles.cta}>
            Download resume <span className="material-symbols-outlined" aria-hidden="true">download</span>
          </a>
        </div>

        <Footer />
      </div>
    </section>
  );
}
