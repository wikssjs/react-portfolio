import Image from "next/image";
import naruto from '../public/naruto.png'
import styles from '../styles/Accueil.module.css'

export default function Accueil() {
    return <>

        <div className={styles.wrapper}>

            <Image src={naruto} alt='Mon photo' className={styles.image} />

            <div className={styles.text}>

                <h1 className={styles.nom}>James Bell</h1>

                <div className={styles.description}>

                    <pre data-wait="3000" data-words='["James Bell_","Android Dev","Web Dev"]'
                        className="txt-type">Web developer</pre>

                    <p>Je suis un développeur junior compétent en CSS, HTML, JavaScript et frameworks. Je  m&apos; efforce de créer des applications et des sites web performants en apprenant de nouveaux outils et en me perfectionnant.</p>
                </div>
            </div>
        </div>

    </>;
}

