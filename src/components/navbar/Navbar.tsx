import { useRef, useState, useEffect } from "react";
import openNav from "./lib/openNav";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const buttonRef = useRef<HTMLLIElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  // Linking to the buttons.
  const handleButtonClick = () => {
    if (buttonRef.current && linksRef.current) {
      openNav({ button: buttonRef.current, links: Array.from(linksRef.current.children) as HTMLElement[] });
    }
  };

  // Hide navbar on scroll down.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setAtTop(currentScrollY <= 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      id={styles["header"]}
      className={`${isVisible ? styles["visible"] : styles["hidden"]} ${atTop ? styles["no-shadow"] : styles["with-shadow"]}`}
    >
      <nav id={styles["navbar-wrapper"]}>
        <ul id={styles["navbar"]}>
          <li className={styles["navbar-item"]}>
            <a href="/" aria-label="Home">
              <svg id={styles["logo"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.27 360">
                <path d="M114.24,0v3.9h-9.47c-18.39,0-32.88,14.49-32.88,32.88v144.89L222.35,36.78c5.57-5.57,8.36-11.15,8.36-16.16,0-10.03-11.14-16.72-23.96-16.72h-9.47V0h90.28v3.9h-10.03c-17.83,0-28.42,14.49-46.81,32.88l-107,103.09,123.72,183.35c12.26,18.39,28.98,32.88,46.81,32.88h10.03v3.9h-69.66L101.42,161.61l-29.53,28.42v133.19c0,18.39,14.49,32.88,32.88,32.88h9.47v3.9H0v-3.9h9.47c18.39,0,32.88-14.49,32.88-32.88V36.78C42.35,18.39,27.86,3.9,9.47,3.9H0V0h114.24Z" />
              </svg>
            </a>
          </li>

          <ul id={styles["navbar-links"]} ref={linksRef}>
            <li className={styles["navbar-item"]}>
              <a className={styles["underline"]} href="#works">Works</a>
            </li>
            <li className={styles["navbar-item"]}>
              <a className={styles["underline"]} href="#contact">Contact</a>
            </li>
            <li ref={buttonRef} className={styles["navbar-item"]} onClick={handleButtonClick}>
              +
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
