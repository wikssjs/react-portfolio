import styles from '../styles/Education.module.css'
import ilus from '../public/ilus.png'
import gif from '../public/gif.gif'
import Image from 'next/image'
import { useRef,useEffect,useState } from 'react'




export default function Education(){
    const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = divRef.current.getBoundingClientRect();
      const isVisible = (rect.top >= 0) && (rect.top <= window.innerHeight);

      if (isVisible) {
        divRef.current.classList.add("animate__fadeInUp");
      } else {
        divRef.current.classList.remove("yourClassName");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    

    return <div ref={divRef} className={`${styles.education_wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft gap-5 mb-5 d-flex `}>
        <div>

            <h1>Education </h1>

            <div className={styles.college_wrapper}>
                <h2>DEC EN PROGRAMMATION</h2>
                <span>College lacite (2022-2023)</span>
                <div className='mt-4'>

                <p>J'ai appris ces différentes technologies et langages de programmation au collège. J'ai suivi des cours en informatique qui m'ont permis de comprendre les bases de la programmation et de découvrir les différents langages de programmation.</p>
                <p>Au fil des années, j'ai travaillé dur pour améliorer mes compétences en programmation informatique et j'ai participé à de nombreux projets qui m'ont permis de mettre en pratique ce que j'ai appris en classe.</p>
                <p>Je suis reconnaissant envers mon collège pour m'avoir donné les connaissances et les outils nécessaires pour réussir dans ce domaine passionnant de la programmation informatique. Je suis convaincu que ces compétences seront utiles pour moi dans l'avenir et je suis prêt à continuer à apprendre et à développer mes compétences en programmation.</p>
                </div>
            </div>
        </div>
        <Image alt='image' src={ilus} className={styles.image}/>
    </div>
}