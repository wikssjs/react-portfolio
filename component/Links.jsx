import styles from '../styles/Links.module.css'



export default function Links() {
    return <>

        <ul className={styles.liste}>
            <li> <p>Suivez moi</p></li>
            <span></span>
            <li><a href=""><i className="bi bi-github"></i></a></li>
            <li><a href=""><i className="bi bi-instagram"></i></a></li>
            <li><a href=""><i className="bi bi-linkedin"></i></a></li>
        </ul>

    </>
}