import styles from '../styles/ProjetGrid.module.css'


/**
 * grid des pages de projets
 * @param {children,titre,icon} param0 
 * @returns un grid avec un children dedans
 */
export default function ProjetGrid({ children, titre, icon }) {
    return <div className={`${styles.container}`}>

        <h1 className={`${styles.titre} text-center pb-5`}><i className={icon}></i> {titre} <i className={icon}></i></h1>
        <div className={`${styles.projet1} row gap-5  justify-content-center align-items-center  m-auto`}>
            {children}
        </div>
    </div>
}