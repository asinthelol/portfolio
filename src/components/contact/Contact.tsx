import { useState } from "react";
import styles from "./contact.module.scss";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.log("Submission failed.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.error("Failed to submit form data:", error);
    }
  };

  return (
    <section className={styles["contact-wrapper"]} id="contact">
      <h2>CONTACT</h2>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="ad55e1de-2843-464b-949a-42266a2895d0" />
        
        <label htmlFor="name">YOUR NAME</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">YOUR EMAIL</label>
        <input id="email" type="text" name="email" required />
        
        <label htmlFor="message">YOUR MESSAGE</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">SEND</button>
      </form>

      {isSubmitted && <p className={"instance"}>Thank you for your submission! Refreshing...</p>}
    </section>
  );
}
