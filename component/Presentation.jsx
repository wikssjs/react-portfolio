import styles from '../styles/Presentation.module.css'
import Typewriter from 'typewriter-effect';


/**
 * prensentation de la page accueil
 * @returns ma presentation
 */
export default function Presentation() {
    return <div className={styles.text}>

        <h1 className={`${styles.nom} text-shadow`}>James Bell</h1>

        <div className={styles.description}>
            <pre
                className="txt-type"><span>I Am a </span>
                <Typewriter
                    options={{
                        strings: ['Web Developer', 'Android Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                /></pre>

            <p>Je suis un développeur compétent en CSS, HTML, JavaScript et frameworks. Je  m&apos; efforce de créer des applications et des sites web performants en apprenant de nouveaux outils et en me perfectionnant.</p>
        </div>
    </div>
}