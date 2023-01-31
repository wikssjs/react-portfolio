import styles from '../styles/Popup.module.css'
import Image from 'next/image';
import { useState } from 'react';

export default function Popup({ anim,closePopup, project }) {
    const [addAnim, setAddAnim] = useState(false) ;
    const add = ()=>{
        setAddAnim(!addAnim);
    }
    return (
        <div className={`${styles.popup} animate__animated ${anim}`}>
            <div className={styles.popup_inner}>
                <button className={`${styles.button} `} onClick={closePopup}><i className='bi bi-x-lg'></i></button>
                <Image src={project.image} className={styles.image} />

                <div className={styles.contenu}>
                    <h1 className={styles.type}>{project.type}</h1>
                    <p className={styles.nom}>{project.nom}</p>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.link_buttons}>
                        <button className={styles.link}>Go to</button>
                        <button className={styles.github}>Voir projet   <i className='bi bi-box-arrow-in-right'></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
