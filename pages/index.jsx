import Image from "next/image";
import styles from "../styles/Accueil.module.css";
import Presentation from "../component/Presentation";
import home from "../public/home.png";
import Link from "next/link";
import Head from "next/head";

/**
 * ma page d'accueil
 * @returns page d'accueil
 */
export default function Accueil() {
  {
    /** Contenu de la page d'accueil */
  }
  return (
    <>
      <Head>
        <title>JamesBell - Accueil</title>
        <meta name="description" content="Page d'accueil de mon portfolio" />
        <meta property="og:title" content="JamesBell - Accueil" />
        <meta
          property="og:description"
          content="Page d'accueil de mon portfolio"
        />
        <meta
          property="og:image"
          content="https://jamesbell.vercel.app/james.png"
        />
      </Head>
      <main
        className={`${styles.container} shadow-lg  rounded-5 container-lg p-2 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}
      >
        <div
          className={`${styles.wrapper}  rounded-5 container-lg p-3 animate__animated animate__bounceInLeft d-flex flex-column gap-5`}
        >
          <div className={`${styles.contenu} d-flex`}>
            <Image src={home} alt="Mon photo" className={styles.image} />
            <div className="d-flex flex-column align-items-center gap-5 align-items-baseline">
              <Presentation />
              <div className="d-flex gap-5 flex-md-row flex-column">
                <button
                  className="btn btn-lg border-primary shadow-lg"
                  id="download"
                >
                  <a download href="/JamesBell.pdf">
                    Telecharger CV
                  </a>
                  <i className="bi bi-download animate__animated animate__bounceInDown"></i>
                </button>
                <Link href="/contact">
                  <button className="btn btn-lg border-primary shadow-lg bg-none text-white d-flex gap-3">
                    Contactez-Moi{" "}
                    <i className="bi bi-telephone animate__animated animate__bounceInDown"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      ;
    </>
  );
}
