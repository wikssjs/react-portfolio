import styles from '../styles/Presentation.module.css'
import Typewriter from 'typewriter-effect';
import {Roboto_Flex,Montserrat,EB_Garamond,Playfair_Display,Cormorant_Garamond} from '@next/font/google'

const roboto = Roboto_Flex({subsets:['latin']});
/**
 * prensentation de la page accueil
 * @returns ma presentation
 */
export default function Presentation() {


    return <div className={`${styles.text} d-flex flex-column gap-`}>

        <h1 className={`${styles.nom} text-shadow`}>James Bell</h1>

        <div className={styles.description}>
            <pre
                className="txt-type"><span>Je Suis Un </span>
                <Typewriter
                    options={{
                        strings: ['Développeur Web', 'Développeur Android'],
                        autoStart: true,
                        loop: true,
                        skipAddStyles:true
                    }}
                /></pre>

            <p>Je suis un développeur compétent en CSS, HTML, JavaScript et frameworks. Je  m&apos; efforce de créer des applications et des sites web performants en apprenant de nouveaux outils et en me perfectionnant.</p>
        </div>
    </div>
}