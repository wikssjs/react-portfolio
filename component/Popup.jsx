import styles from '../styles/Popup.module.css'
import { useState } from 'react';

/**
 * popup pour les projets
 * @param {closePopup,project,video,github,lien} param0 
 * @returns un popup avec les infos du projet clické
 */
export default function Popup({ closePopup, project, video, github, lien,visible }) {
    const [addAnim, setAddAnim] = useState(false);
    const add = () => {
        setAddAnim(!addAnim);
    }

    return (
        <div className={`${styles.popup} animate__animated  ${addAnim ? 'animate__fadeOutDown' : 'animate__fadeInDown'}`}>
            <div className={styles.popup_inner}>
                <button className={`${styles.button} `} onClick={() => { closePopup(); add() }}><i className='bi bi-x-lg'></i></button>
                <video muted className={`${styles.image} bg-body`} src={video} autoPlay controls></video>
                <div className={styles.contenu}>
                    <h1 className={styles.type}>{project.type}</h1>
                    <p className={styles.nom}>{project.nom}</p>
                    <p className={styles.description}>{project.description}<span className='text-danger'>{project.warning}</span>
                    </p>
                    <div className={styles.link_buttons}>
                        <a href={lien} target="_blank" className={`${styles.link}`} style={{visibility:`${visible}`}} rel="noreferrer">Go to  {visible} <i className="bi bi-link"></i></a>
                        <a href={github} target="_blank" className={styles.github} rel="noreferrer"> GitHub   <i className='bi bi-box-arrow-in-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
