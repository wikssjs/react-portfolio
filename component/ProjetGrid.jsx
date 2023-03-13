import { useEffect,useState } from 'react'
import styles from '../styles/ProjetGrid.module.css'


/**
 * grid des pages de projets
 * @param {children,titre,icon} param0 
 * @returns un grid avec un children dedans
 */
export default function ProjetGrid({ children, titre, icon }) {
    const[anim,setAnim] = useState("animate__animated animate__bounceInLeft")


    useEffect (() => {
        const timeOut = setTimeout(() => {
            setAnim("")
        }
        , 1000)
        return () => {
            clearTimeout(timeOut)
        }

    },[])


    return <div className={`${styles.container}`}>

        <h1 className={`${styles.titre} text-center pb-5`}><i className={icon}></i> {titre} <i className={icon}></i></h1>
        <div className={`${styles.projet1}  animate__animated ${anim} row gap-5  justify-content-center align-items-center  m-auto`}>
            {children}
        </div>
    </div>
}