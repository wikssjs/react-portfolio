import Contact_Info from "./Contact_Info";
import Links from "./Links";
import styles from '../styles/Contact_Links.module.css'


/**
 * 
 * @returns mes infos et socials media links
 */
export default function Contact_links() {
    return <div className={`${styles.contact} position-sm-fixed bottom-0`}>

        <Contact_Info />
        <Links />
    </div>

}