import Contact_links from "./Contact_Links";
import Header from "./Header";
import styles from '../styles/Layout.module.css'

export default function Layout({children,setPage}) {
    return <>
        <div className={styles.wrapper}>

            <Header setPage={setPage}/>
            {children}
            <Contact_links />
        </div>
    </>
}

