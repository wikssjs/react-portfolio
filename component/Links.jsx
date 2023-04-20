import { FormattedMessage } from "react-intl";
import styles from "../styles/Links.module.css";

/**
 * liens de mes reseaux sociaux
 * @returns mes socials media links
 */
export default function Links() {
  return (
    <>
      {/**Social media links  */}

      <ul className={styles.liste}>
        <li>
          {" "}
          <p><FormattedMessage id="app.content.home.side.follow"/></p>
        </li>
        <li className={styles.bar}></li>
        <li>
          <a
            aria-label="Mon github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/wikssjs"
          >
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Mon Linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/james-bell-199ba9222/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
