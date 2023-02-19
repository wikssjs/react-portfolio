import { useState } from 'react'
import AproposContenu from '../component/AproposContenu';
import styles from '../styles/Apropos.module.css'
import Education from '../component/Education';
export default function Apropos() {

        const [anim, addAnim] = useState(false);


        const changeAddAnim = () => {
                addAnim(!anim)
        }
        return <main className={`${styles.main} d-flex flex-column gap-5 container-lg shadow-lg rounded-5 p-3`}>
               <AproposContenu/>
               <Education/>
        </main>

}