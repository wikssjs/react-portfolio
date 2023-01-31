
import styles from '../styles/Menu.module.css'
import Nom_Logo from './Nom_Logo';
import { useState,useEffect } from 'react';

export default function Menu() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.pageYOffset);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <> <input className={styles.input} type="checkbox" name="" id="toggle" />

        <nav className={`${styles.menu} ${scrollY >180 ? styles.menu_sm: '' }`}>

            <Nom_Logo />

            <label htmlFor="toggle" className={`${styles.navbar_toggler} animate__animated animate__bounceInDown`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </label>

            <ul className={styles.liste}>
                <li className={`${styles.home} animate__animated animate__bounceInDown `}><a href=""> <i className="bi bi-house"></i>  Home</a></li>
                <li className={`${styles.about} animate__animated animate__bounceInDown`}> <a href=""> <i className='bi bi-person'></i> About</a></li>
                <div className={`${styles.dropdown} animate__animated animate__bounceInDown `}>
                    <a href="#" className={styles.dropdown_button}>Projets<i className='bi bi-arrow-down-short'></i> </a>
                    <ul className={styles.dropdown_content}>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Web</a></li>
                    </ul>
                </div>


                <li className={`${styles.contact} animate__animated animate__bounceInDown`}><a href=""><i className='bi bi-envelope-open'></i>  Contact</a></li>
            </ul>
        </nav>;
    </>


}

