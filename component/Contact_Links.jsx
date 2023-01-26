import Contact_Info from "./Contact_Info";
import Links from "./Links";
import styles from '../styles/Contact_Links.module.css'


export default function Contact_links(){
    return <div className={`${styles.contact}`}>

        <Contact_Info/>
        <Links/>
    </div>
    
}