import styles from '../styles/ProjetGrid.module.css'

export default function ProjetGrid({children,titre,icon}){
    return<div className={`${styles.container}`}>

    <h1 className={`${styles.titre} text-center`}><i className={icon}></i> {titre} <i className={icon}></i></h1>
    <div className={`${styles.projet1} row gap-5  justify-content-center align-items-center  m-auto`}>
        {children}
    </div>
</div>
}