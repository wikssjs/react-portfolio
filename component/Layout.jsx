import Contact_links from "./Contact_Links";
import Header from "./Header";
import styles from '../styles/Layout.module.css'

/**
 * Layout de mon site web
 * @param {children,setPage} param0 
 * @returns header, contenu de la page et mes contacts
 */
export default function Layout({children,setPage}) {
    return <>
        <div className={styles.wrapper}>

            <Header setPage={setPage}/>
            {children}
            <Contact_links />
        </div>
    </>
}

