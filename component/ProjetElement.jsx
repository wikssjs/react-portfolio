import Image from "next/image";
import styles from "../styles/ProjetElement.module.css";
import Popup from "./Popup";
import { useState } from "react";

/**
 * Table d'objet contenant la description de chaque projet
 */
const projet = [
  {
    description:
      "Cette application Android développée en Java utilise une API RapidAPI pour offrir des fonctionnalités telles que la recherche de données, la visualisation en temps réel, les paiements via PayPal et carte de crédit, et la gestion d'un panier d'achat. Les utilisateurs peuvent ajouter des articles, consulter leur panier et finaliser leur achat en toute simplicité. L'application est facile à utiliser et conçue pour une expérience efficace et intuitive.",
  },

  {
    description:
      "Une application de Blackjack avec Android Studio et Java. Cette application permet aux utilisateurs de jouer au Blackjack en utilisant les règles standard du jeu. Les fonctionnalités incluent la possibilité de placer des paris, de tirer des cartes, de rester, de doubler ou de se couvrir. L'application est conçue pour être réaliste et amusante, elle respecte les règles standard du Blackjack.",
  },
  {
    description: "Une application todo",
  },
  {
    description:
      "Une application de quiz qui génère 20 questions aléatoires en utilisant une API. Cette application permet aux utilisateurs de tester leurs connaissances dans divers domaines en répondant à des questions aléatoires générées par l'API. Les fonctionnalités incluent la possibilité de répondre aux questions dans un temps limité, de recevoir les résultats à la fin du quiz, avec un score en points obtenus et de visualiser le temps restant pour finir le quiz. L'application utilise une interface utilisateur intuitive pour une expérience de jeu agréable.",
  },
  {
    description:
      "Une application de météo qui utilise une API pour fournir des informations en temps réel sur les conditions météorologiques. Les fonctionnalités incluent la possibilité de rechercher des informations météorologiques par ville ou par géolocalisation, de consulter les prévisions à court et à long terme, de consulter les données sur la température, la pression atmosphérique, l'humidité, les vents, et les précipitations. L'application est conçue pour être facile à utiliser et à comprendre pour les utilisateurs.",
  },
  {
    description:
      "un portfolio en ligne qui présente mes compétences et mes réalisations. Grâce à une interface utilisateur intuitive, les utilisateurs peuvent facilement naviguer à travers mes projets les plus récents et découvrir mes compétences en développement web. Avec ce portfolio en ligne, je peux mettre en valeur mes talents et mes expériences pour montrer ce que je peux faire.",
  },
  {
    description: `Une application de chat en temps réel en utilisant les technologies NodeJS, ExpressJS, SQLite, Tailwind et SSE. Cette application comprend trois salles de discussion pour les utilisateurs Java, HTML et C#.

    J'ai ajouté une fonctionnalité de non-utilisateur pour permettre aux utilisateurs de participer sans créer de compte, et j'ai également mis en place un système de mot de passe sécurisé pour les utilisateurs enregistrés.
    `,
    warning: "L'application peut prendre du temps à charger",
  },
  {
    description: `Cette application permet aux utilisateurs de télécharger facilement des vidéos TikTok à partir de leur URL. J'ai utilisé ASP.NET pour créer une interface utilisateur simple et conviviale, et j'ai également mis en place un API pour communiquer avec les serveurs TikTok et extraire les vidéos souhaitées.`,
  },
  {
    description: `Ce site web offre une expérience immersive de la culture, de la gastronomie et du tourisme d'Haïti. Vous y trouverez des informations sur les destinations touristiques populaires, les plats traditionnels haïtiens, les événements culturels et les activités touristiques incontournables. Explorez et découvrez tout ce que Haïti a à offrir grâce à cette ressource conviviale.`,
  },
  {
    description:
      "un bug tracker encore en developpement qui permet de suivre les bugs et les taches d'un projet en utilisant les technologies ReactJS, NodeJS, ExpressJS, SQLITE. Cette application permet aux utilisateurs de créer des projets, de créer des taches et de les assigner à des utilisateurs.",
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
