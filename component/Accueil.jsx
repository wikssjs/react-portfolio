import Image from "next/image";
import naruto from '../public/naruto.png'
import styles from '../styles/Accueil.module.css'
import Presentation from "./Presentation";
import AproposContenu from './AproposContenu';
import Education from "./Education";
import { useRef,useEffect,useState } from 'react'


/**
 * ma page d'accueil
 * @returns page d'accueil
 */
export default function Accueil() {
    {/** Contenu de la page d'accueil */ }
    return <main className={`${styles.container} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}>
        <div className={`${styles.wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}>

            <div className={`${styles.contenu} d-flex`}>

                <Image src={naruto} alt='Mon photo' className={styles.image} />
                <div className="d-flex flex-column align-items-center gap-5 align-items-baseline">
                    <Presentation />
                    <button className="btn btn-lg border-primary shadow-lg">Telechager CV <i className="bi bi-download animate__animated animate__bounceInDown"></i></button>
                </div>
            </div>
        </div>
        <AproposContenu/>
        <Education/>
    </main>;
}

