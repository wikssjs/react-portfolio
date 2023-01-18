import Image from 'next/image';
import james from '../public/james.png'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return <nav className={styles.menu}>
        <div>
            <a href="" className={styles.nom}>
            <Image src={james} alt='Mon photo' className={styles.image} />
            <h1>James</h1>
            </a>
        </div>

        <ul className={styles.liste}>
            <li><a href=""> <i className="bi bi-house"></i>  Home</a></li>
            <li> <a href=""> <i className='bi bi-person'></i> About</a></li>
            <li><a href=""><i className='bi bi-briefcase'></i>  Projects</a></li>
            <li><a href=""><i className='bi bi-envelope-open'></i>  Contact</a></li>
        </ul>
    </nav>;
}

