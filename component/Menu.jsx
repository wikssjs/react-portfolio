
import styles from '../styles/Menu.module.css'
import Nom_Logo from './Nom_Logo';
import { useState,useEffect } from 'react';

export default function Menu({setPage}) {

    //hook to get the scrollY of the page
    const [scrollY, setScrollY] = useState(0);

    //hook to handleTheScroll
    useEffect(() => {
      const handleScroll = () => setScrollY(window.pageYOffset);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <> <input className={styles.input} type="checkbox" name="" id="toggle" />

        {/**Menu  */}
        <nav className={`${styles.menu} ${scrollY >180 ? styles.menu_sm: '' }`}>

            
            <Nom_Logo setPage={setPage}/>

            {/**Hamburger menu pour les petites ecrans */}
            <label htmlFor="toggle" className={`${styles.navbar_toggler} animate__animated animate__bounceInDown`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </label>

            {/** Menu de la pge */}
            <ul className={styles.liste}>
                <li onClick={()=>{setPage('accueil')}} className={`${styles.home} animate__animated animate__bounceInDown `}><a href="#"> <i className="bi bi-house"></i>  Accueil</a></li>
                <li onClick={()=>{setPage('Apropos')}} className={`${styles.about} animate__animated animate__bounceInDown`}> <a href="#"> <i className='bi bi-person'></i> Apropos</a></li>

                {/**DropDown */}
                <div className={`${styles.dropdown} animate__animated animate__bounceInDown `}>
                    <a href="#" className={styles.dropdown_button}><i className='bi bi-briefcase'></i> Projets<i className='bi bi-arrow-down-short'></i> </a>
                    <ul className={styles.dropdown_content}>
                        <li onClick={()=>{setPage('projet1')}}><a href="#"> <i className='bi bi-android2'></i> Android</a></li>
                        <li onClick={()=>{setPage('projet2')}}><a href="#"><i className='bi bi-globe'></i> Web</a></li>
                    </ul>
                </div>


                <li onClick={()=>{setPage('Contact')}} className={`${styles.contact} animate__animated animate__bounceInDown`}><a href="#"><i className='bi bi-envelope-open'></i>  Contact</a></li>
            </ul>
        </nav>
    </>


}

