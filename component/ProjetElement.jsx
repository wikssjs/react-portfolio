import Image from "next/image"
import styles from '../styles/ProjetElement.module.css'
import Popup from "./Popup"
import meteo from '../public/meteo.png'
import ecommerce from '../public/ecommerce.jpg'
import blackjack from '../public/blackjack.jpg'
import todo from '../public/todo.jpg'
import quiz from '../public/quiz.png'
import { useState } from "react"

const projet = [
    {
        description : "Une application avec Android Studio et Java qui utilise une API sur RapidAPI. Cette application permet aux utilisateurs de réaliser des tâches spécifiques en utilisant les données fournies par l'API. Les fonctionnalités incluent la possibilité de rechercher des informations, de consulter des données en temps réel, de payer via PayPal ou carte de crédit, et de gérer un panier d'achat. Les utilisateurs peuvent ajouter des articles à leur panier, consulter leur panier et finaliser leur achat. L'application est facile à utiliser et est conçue pour être efficace et intuitive."
    },

    {
        description:"Une application de Blackjack avec Android Studio et Java. Cette application permet aux utilisateurs de jouer au Blackjack en utilisant les règles standard du jeu. Les fonctionnalités incluent la possibilité de placer des paris, de tirer des cartes, de rester, de doubler ou de se couvrir. L'application est conçue pour être réaliste et amusante, elle respecte les règles standard du Blackjack."
    },
    {
        description:"Une application todo"
    },
    {
        description:"Une application de quiz qui génère 20 questions aléatoires en utilisant une API. Cette application permet aux utilisateurs de tester leurs connaissances dans divers domaines en répondant à des questions aléatoires générées par l'API. Les fonctionnalités incluent la possibilité de répondre aux questions dans un temps limité, de recevoir les résultats à la fin du quiz, avec un score en points obtenus et de visualiser le temps restant pour finir le quiz. L'application utilise une interface utilisateur intuitive pour une expérience de jeu agréable."
    },
    {
        description:"Une application de météo qui utilise une API pour fournir des informations en temps réel sur les conditions météorologiques. Les fonctionnalités incluent la possibilité de rechercher des informations météorologiques par ville ou par géolocalisation, de consulter les prévisions à court et à long terme, de consulter les données sur la température, la pression atmosphérique, l'humidité, les vents, et les précipitations. L'application est conçue pour être facile à utiliser et à comprendre pour les utilisateurs."
    },
    
    
    
]

export default function ProjetElement({ image, type, nom,anim,id }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (<>
    <div className={`${styles.projet_wrapper} col-1 ${anim}`}>
      <a href="#" onClick={togglePopup}>
        <div className={styles.image_wrapper}>
          <Image src={image} className={styles.image} alt={nom} />
        </div>
        <div className={styles.contenu}>
          <h1 className={styles.type}>{type}</h1>
          <p className={styles.nom}>{nom}<i className={`${styles.icon} bi bi-arrow-up-right`}></i></p>
        </div>
      </a>
    </div>
      {isOpen && (
        <Popup
          closePopup={togglePopup}
          project={{image:image,type:type,nom:nom,description:projet[id].description}}
          anim = {isOpen ? 'animate__zoomIn': "animate__zoomOut"}
        />
      )}
  </>
  );
}
