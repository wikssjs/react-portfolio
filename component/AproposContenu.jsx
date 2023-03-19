import styles from "../styles/Apropos.module.css";
import { useRef, useEffect, useState } from "react";

/**
 * composant AproposContenu
 * @returns contenu du composant Apropos
 */
export default function AproposContenu() {
  const divRef = useRef(null);
  const [divPos, setDivPos] = useState(0);

  useEffect(() => {
    const div = divRef.current;
    setDivPos(div.offsetTop);
  }, []);

  return (
    <div
      ref={divRef}
      className={`${styles.apropos_wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft gap-5`}
    >
      <div className={`${styles.container} container d-flex flex-column gap-5`}>
        <h1>
          <span>A</span>
          <span>p</span>
          <span>r</span>
          <span>o</span>
          <span>p</span>
          <span>o</span>
          <span>s</span>
        </h1>

        <div className="d-flex align-items-end justify-content-center">
          <div className={`${styles.contenu}`}>
            <p>
              Bienvenue sur mon portfolio en ligne ! Je suis un développeur web
              et Android passionné et talentueux, fier de mes compétences et de
              mon parcours. Au cours de mes études et de mes projets personnels,
              j'ai affiné mes compétences en développement web et Android, et je
              suis prêt à les utiliser pour ajouter de la valeur à tout projet
              sur lequel je travaillerai.
            </p>
            <p>
              Je suis un travailleur déterminé et créatif, capable de concevoir
              et de développer des applications web et Android performantes et
              esthétiquement plaisantes. Je suis également en mesure de
              travailler en équipe, ce qui est un atout important pour tout
              projet de développement de logiciels.
            </p>
            <p>
              Sur ce site, vous trouverez un aperçu de mes compétences, de mes
              projets et de mon parcours. J'espère que vous prendrez le temps de
              parcourir mon portfolio et de découvrir comment je peux ajouter de
              la valeur à vos projets de développement de logiciels. N'hésitez
              pas à me contacter si vous avez des questions ou souhaitez en
              savoir plus sur mes compétences et mon expérience.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.competences} h-100 d-flex flex-column gap-5`}>
        <h1>Compétences</h1>
        <div className="d-flex flex-wrap gap-3">
          <h2
            className={`${styles.html} animate__animated   animate__rubberBand`}
          >
            HTML
          </h2>
          <h2
            className={`${styles.css} animate__animated   animate__rubberBand d-flex flex-column align-items-center`}
          >
            CSS
          </h2>
          <h2
            className={`${styles.js} animate__animated   animate__rubberBand`}
          >
            JAVASCRIPT
          </h2>
          <h2
            className={`${styles.react} animate__animated   animate__rubberBand`}
          >
            REACTJS
          </h2>
          <h2
            className={`${styles.next} animate__animated   animate__rubberBand`}
          >
            NEXTJS
          </h2>
          <h2
            className={`${styles.node} animate__animated   animate__rubberBand`}
          >
            NODEJS
          </h2>
          <h2
            className={`${styles.node} animate__animated   animate__rubberBand`}
          >
            ExpressJs
          </h2>
          <h2
            className={`${styles.asp} animate__animated   animate__rubberBand`}
          >
            ASP.NET
          </h2>
          <h2
            className={`${styles.sqls} animate__animated   animate__rubberBand`}
          >
            SQL SERVER
          </h2>
          <h2
            className={`${styles.mysql} animate__animated   animate__rubberBand`}
          >
            MYSQL
          </h2>
          <h2
            className={`${styles.mongo} animate__animated   animate__rubberBand`}
          >
            MONGODB
          </h2>
          <h2
            className={`${styles.btp} animate__animated   animate__rubberBand`}
          >
            BOOSTRAP
          </h2>
          <h2
            className={`${styles.tail} animate__animated   animate__rubberBand`}
          >
            TAILWIND
          </h2>
          <h2
            className={`${styles.java} animate__animated   animate__rubberBand`}
          >
            JAVA
          </h2>
          <h2
            className={`${styles.cs} animate__animated   animate__rubberBand`}
          >
            C#
          </h2>
          <h2
            className={`${styles.swift} animate__animated   animate__rubberBand`}
          >
            SWIFT
          </h2>
          <h2
            className={`${styles.ios} animate__animated   animate__rubberBand`}
          >
            IOS
          </h2>
          <h2
            className={`${styles.android} animate__animated   animate__rubberBand`}
          >
            ANDROID
          </h2>
          <h2
            className={`${styles.git} animate__animated   animate__rubberBand`}
          >
            GIT
          </h2>
        </div>
      </div>
    </div>
  );
}
