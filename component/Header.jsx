import Menu from "./Menu";
import styles from "../styles/Header.module.css";

/**
 * mon header
 * @param {setPage} param0
 * @returns header avec le menu
 */
export default function Header() {


  
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
}
