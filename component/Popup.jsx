import styles from '../styles/Popup.module.css'
import Image from 'next/image';
import { useState } from 'react';

export default function Popup({ anim,closePopup, project,video,github,lien }) {
    const [addAnim, setAddAnim] = useState(false) ;
    const add = ()=>{
        setAddAnim(!addAnim);
    }
    
    return (
        <div className={`${styles.popup} animate__animated  ${addAnim ? 'animate__fadeOutDown':'animate__fadeInDown'}`}>
            <div className={styles.popup_inner}>
                <button className={`${styles.button} `} onClick={()=>{closePopup(); add()}}><i className='bi bi-x-lg'></i></button>
                {/* <Image src={project.image} className={styles.image} alt="projet image" /> */}
                <video className={`${styles.image} bg-body`} src={video} autoPlay controls></video>
                <div className={styles.contenu}>
                    <h1 className={styles.type}>{project.type}</h1>
                    <p className={styles.nom}>{project.nom}</p>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.link_buttons}>
                        <a href={lien} target="_blank" className={styles.link} rel="noreferrer">Go to</a>
                        <a href={github} target="_blank" className={styles.github} rel="noreferrer"> GitHub   <i className='bi bi-box-arrow-in-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
