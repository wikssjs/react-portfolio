import Image from 'next/image';
import Link from 'next/link';
import james from '../public/james.png'
import styles from '../styles/Nom_Logo.module.css'


/**
 * Logo de la page
 * @returns mon logo
 */
export default function Nom_Logo() {
    return <Link href="/" className={styles.nom}>
        <Image src={james} alt='Ma photo' className={`${styles.image} animate__animated animate__bounceInDown`} />
        <h1 className='animate__animated animate__bounceInDown'>James </h1>
        <i className='bi bi-circle-fill animate__animated animate__bounceInDown'></i>
    </Link>

}