import styles from '../navbar.module.scss';

type navProps ={
  button: HTMLElement | null,
  links: HTMLElement[]
}

/**
 * Displays the links in the navigation bar
 * @param {HTMLElement} button - The button pressed to open the navigation bar
 * @param {HTMLElement[]} links - The links in the navigation bar
 */
export default function openNav({button, links}: navProps): void {
  if (button) {
    button.classList.toggle(styles["openButton"]);
  }
  for (let i = 0; i < links.length -1 ; i++) { // I don't want to include the button itself.
    links[i].classList.toggle(styles["openLink"]);
  }
}