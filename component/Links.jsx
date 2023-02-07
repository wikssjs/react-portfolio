import styles from '../styles/Links.module.css'


/**
 * liens de mes reseaux sociaux
 * @returns mes socials media links
 */
export default function Links() {
    return <>

        {/**Social media links  */}
        
        <ul className={styles.liste}>
            <li> <p>Suivez moi</p></li>
            <span></span>
            <li><a href=""><i className="bi bi-github"></i></a></li>
            <li><a href=""><i className="bi bi-instagram"></i></a></li>
            <li><a href=""><i className="bi bi-linkedin"></i></a></li>
        </ul>

    </>
}