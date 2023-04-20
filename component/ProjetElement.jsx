import Image from "next/image";
import styles from "../styles/ProjetElement.module.css";
import Popup from "./Popup";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

/**
 * Table d'objet contenant la description de chaque projet
 */
const projet = [
  {
    description:<FormattedMessage id="app.content.project.android.ecommerce"/>,  },

  {
    description: <FormattedMessage id="app.content.project.android.blackjack"/>,  },
  {
    description: <FormattedMessage id="app.content.project.android.todo"/>,  },
  {
    description: <FormattedMessage id="app.content.project.web.quiz"/>,  },
  {
    description: <FormattedMessage id="app.content.project.web.weather"/>,  },
  {
    description:  ""},
  {
    description: <FormattedMessage id="app.content.project.web.chat"/>,
    warning: <FormattedMessage id="app.content.project.web.chat.warning"/>,  },
  {
    description: <FormattedMessage id="app.content.project.web.ticktok"/>,  },
  {
    description: <FormattedMessage id="app.content.project.web.haiti"/>,
  },
  {
    description: <FormattedMessage id="app.content.project.web.bug"/>, 
  },
];

export default function ProjetElement({
  image,
  type,
  nom,
  id,
  video,
  github,
  lien,
  languages,
  visible,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    if (isOpen == false) {
      setIsOpen(!isOpen);
    } else {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 500);
    }
  };

  return (
    <>
      <div className={`${styles.projet_wrapper} col-1`}>
        <a href="#" onClick={togglePopup}>
          <div className={styles.image_wrapper}>
            <Image
              src={image}
              className={styles.image}
              alt={nom}
              priority
              loading="eager"
              width={800}
            />
          </div>
          <div className={styles.contenu}>
            <h1 className={styles.type}>{type}</h1>
            <p className={styles.nom}>
              {nom}
              <i className={`${styles.icon} bi bi-arrow-up-right`}></i>
            </p>
          </div>
          <div className={styles.programming}>
            {languages.map((l) => {
              // eslint-disable-next-line react/jsx-key
              return <span>{l}</span>;
            })}
          </div>
        </a>
      </div>
      {isOpen && (
        <Popup
          closePopup={togglePopup}
          project={{
            image: image,
            type: type,
            nom: nom,
            description: projet[id].description,
            warning: id ? projet[id].warning : null,
          }}
          video={video}
          github={github}
          lien={lien}
          visible={visible}
        />
      )}
    </>
  );
}
