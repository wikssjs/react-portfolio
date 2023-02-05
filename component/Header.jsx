import Menu from "./Menu";
import styles from '../styles/Header.module.css'

export default function Header({setPage}) {
    return <header className={styles.header}>
        <Menu setPage={setPage}/>
    </header>
        ;
}
