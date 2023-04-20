import { FormattedMessage } from "react-intl";
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
          <span> <FormattedMessage id="app.content.about.about"/></span>
         
        </h1>

        <div className="d-flex align-items-end justify-content-center">
          <div className={`${styles.contenu}`}>
            <p>
              <FormattedMessage id="app.content.about.about.text1"/>
            </p>
            <p>
              <FormattedMessage id="app.content.about.about.text2"/>
            </p>
            <p>
              <FormattedMessage id="app.content.about.about.text3"/>
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.competences} h-100 d-flex flex-column gap-5`}>
        <h1>
          <span> <FormattedMessage id="app.content.about.skills"/></span>
        </h1>
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
