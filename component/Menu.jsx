
import styles from '../styles/Menu.module.css'
import Nom_Logo from './Nom_Logo';
import { useState,useEffect } from 'react';

export default function Menu({setPage}) {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.pageYOffset);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <> <input className={styles.input} type="checkbox" name="" id="toggle" />

        <nav className={`${styles.menu} ${scrollY >180 ? styles.menu_sm: '' }`}>

            <Nom_Logo setPage={setPage}/>

            <label htmlFor="toggle" className={`${styles.navbar_toggler} animate__animated animate__bounceInDown`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </label>

            <ul className={styles.liste}>
                <li onClick={()=>{setPage('accueil')}} className={`${styles.home} animate__animated animate__bounceInDown `}><a href="#"> <i className="bi bi-house"></i>  Home</a></li>
                <li onClick={()=>{setPage('about')}} className={`${styles.about} animate__animated animate__bounceInDown`}> <a href="#"> <i className='bi bi-person'></i> About</a></li>
                <div className={`${styles.dropdown} animate__animated animate__bounceInDown `}>
                    <a href="#" className={styles.dropdown_button}><i className='bi bi-briefcase'></i> Projets<i className='bi bi-arrow-down-short'></i> </a>
                    <ul className={styles.dropdown_content}>
                        <li onClick={()=>{setPage('projet1')}}><a href="#"> <i className='bi bi-android2'></i> Android</a></li>
                        <li onClick={()=>{setPage('projet2')}}><a href="#"><i className='bi bi-globe'></i> Web</a></li>
                    </ul>
                </div>


                <li onClick={()=>{setPage('contact')}} className={`${styles.contact} animate__animated animate__bounceInDown`}><a href="#"><i className='bi bi-envelope-open'></i>  Contact</a></li>
            </ul>
        </nav>;
    </>


}

