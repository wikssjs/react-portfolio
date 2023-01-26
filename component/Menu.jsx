
import styles from '../styles/Menu.module.css'
import Nom_Logo from './Nom_Logo';

export default function Menu() {



    return <> <input className={styles.input} type="checkbox" name="" id="toggle" />

        <nav className={styles.menu}>

            <Nom_Logo />

            <label htmlFor="toggle" className={styles.navbar_toggler}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </label>

            <ul className={styles.liste}>
                <li className={`${styles.home} animate__animated animate__bounceInDown dropdown`}><a href=""> <i className="bi bi-house"></i>  Home</a></li>
                <li className={`${styles.about} animate__animated animate__bounceInDown`}> <a href=""> <i className='bi bi-person'></i> About</a></li>
                <li className={`${styles.project} animate__animated animate__bounceInDown`}><a href=""><i className='bi bi-briefcase'></i>  Projects</a></li>
                <li className={`${styles.contact} animate__animated animate__bounceInDown`}><a href=""><i className='bi bi-envelope-open'></i>  Contact</a></li>
            </ul>
        </nav>;
    </>


}

