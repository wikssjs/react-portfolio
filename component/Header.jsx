import Menu from "./Menu";
import styles from '../styles/Header.module.css'

export default function Header() {
    return <header className={styles.header}>
        <Menu/>
    </header>
    ;
}
