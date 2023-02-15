import Contact_links from "./Contact_Links";
import Header from "./Header";
import styles from '../styles/Layout.module.css'

/**
 * Layout de mon site web
 * @param {children,setPage} param0 
 * @returns header, contenu de la page et mes contacts
 */
export default function Layout({children,setPage,setDark,dark}) {
    return <>
        <div className={`${styles.wrapper}`}>

            <Header setPage={setPage}/>
            {children}
            
            <Contact_links />
            <div className="darkButton">
                <input type="checkbox" className="checkbox" name="" id="checkbox" onChange={()=>{setDark(!dark)}}/>
                <label htmlFor="checkbox" className="label">
                <i className="bi bi-moon"></i>
                <i className="bi bi-sun"></i>
                <div className="ball"></div>
                </label>
            </div>
        </div>
    </>
}

