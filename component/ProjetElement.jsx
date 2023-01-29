import Image from "next/image"
import styles from '../styles/ProjetElement.module.css'


export default function ProjetElement({image,type,nom}){
    return  <div className={`${styles.projet_wrapper} col-1`}>
    <a href="">
        <div className={styles.image_wrapper}>
            <Image src={image} className={styles.image} alt='ecommerce' />
        </div>
        <div className={styles.contenu}>
            <h1>{type}</h1>
            <p>{nom}<i className={`${styles.icon} bi bi-arrow-up-right`}></i></p>
        </div>
    </a>

</div>
}