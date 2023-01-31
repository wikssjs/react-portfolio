import Contact_links from "./Contact_Links";
import Header from "./Header";
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return <>
        <div className={styles.wrapper}>

            <Header />
            {props.children}
            <Contact_links />
        </div>
    </>
}

