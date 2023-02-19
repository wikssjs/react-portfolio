import Image from "next/image";
import naruto from '../public/naruto.png'
import styles from '../styles/Accueil.module.css'
import Presentation from "../component/Presentation";
import AproposContenu from '../component/AproposContenu';
import Projet1 from './android';
import Projet2 from './web';
import Education from "../component/Education";
import ProjetFullPage from "../component/ProjetFullPage";
import { useRef,useEffect,useState } from 'react'
import Link from "next/link";


/**
 * ma page d'accueil
 * @returns page d'accueil
 */
export default function Accueil() {
    {/** Contenu de la page d'accueil */ }
    return <>
    <main className={`${styles.container} shadow-lg rounded-5 container-lg p-2 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}>
        <div className={`${styles.wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}>

            <div className={`${styles.contenu} d-flex`}>

                <Image src={naruto} alt='Mon photo' className={styles.image} />
                <div className="d-flex flex-column align-items-center gap-5 align-items-baseline">
                    <Presentation />
                    <div className="d-flex gap-5 flex-md-row flex-column">

                    <button className="btn btn-lg border-primary shadow-lg" id="download">Telechager CV <i className="bi bi-download animate__animated animate__bounceInDown"></i></button>
                    <Link href="/contact"><button className="btn btn-lg border-primary shadow-lg bg-none text-white d-flex gap-3">Embauche Moi <i className="bi bi-telephone animate__animated animate__bounceInDown"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
    </main>;
    </>
    
}

