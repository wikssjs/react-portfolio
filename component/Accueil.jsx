import Image from "next/image";
import naruto from '../public/naruto.png'
import styles from '../styles/Accueil.module.css'
import Presentation from "./Presentation";

export default function Accueil() {
    return <>

        <div className={`${styles.wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__fadeInDown`}>

            <Image src={naruto} alt='Mon photo' className={styles.image} />
            <div className = "d-flex flex-column align-items-center gap-5 align-items-baseline">
            <Presentation />
                <button className="btn btn-lg border-primary shadow-lg">Telechager CV <i className="bi bi-download"></i></button>
            </div>
        </div>

    </>;
}

