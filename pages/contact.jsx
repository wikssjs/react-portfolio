import styles from "../styles/Contact.module.css";
import Head from "next/head";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

/**
 *
 * @returns Page contact
 */
export default function Contact() {
  const [courriel, setCourriel] = useState("");
  const handleCourrielChange = (event) => setCourriel(event.target.value);
  const [erreurCourriel, setErreurCourriel] = useState("");
  const valideCourriel = () => {
    if (!courriel) {
      setErreurCourriel("Le courriel est requis");
      return false;
    } else if (!courriel.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setErreurCourriel("Le courriel n'est pas valide");
      return false;
    } else {
      setErreurCourriel("");
      return true;
    }
  };
  
  
  const [nom, setNom] = useState("");
  const [erreurNom, setErreurNom] = useState("");
  const handleNomChange = (event) => setNom(event.target.value);
  const validateNom = () => {
    if (!nom) {
      setErreurNom("Le nom est requis");
      return false;
    } else {
      setErreurNom("");
      return true;
    }
  };

  const [message, setMessage] = useState("");
  const [erreurMessage, setErreurMessage] = useState("");
  const handleMessageChange = (event) => setMessage(event.target.value);
  const validateMessage = () => {
    if (!message) {
      setErreurMessage("Le message est requis");
      return false;
    } else {
      setErreurMessage("");
      return true;
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    let courrielValide = valideCourriel();
    let nomValide = validateNom();
    let messageValide = validateMessage();

    if (courrielValide && nomValide && messageValide) {
      event.currentTarget.action = "https://formspree.io/f/mlekbgol";
      event.currentTarget.method = "POST";
      event.currentTarget.submit();
    }
};

  return (
    <>
      <Head>
        <title>JamesBell - Contact</title>
        <meta name="description" content="Page de Contact de mon portfolio" />
        <meta property="og:title" content="JamesBell - Contact" />
        <meta
          property="og:description"
          content="Page de Contact de mon portfolio"
        />
        <meta
          property="og:image"
          content="https://jamesbell.vercel.app/james.png"
        />
      </Head>

      <main
        className={`${styles.container}  d-flex flex-column align-items-center container gap-5 pb-5 shadow-lg rounded-5 container-lg p-3  gap-5 mb-5 d-flex `}
      >
        <h1>Contact</h1>
        <div className="w-75  animate__animated animate__bounceInLeft">
          <iframe
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178843.4975043644!2d-73.52175251537102!3d45.54168186692295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b69886574f9%3A0x1c63438a7316da2e!2sLongueuil%2C%20QC!5e0!3m2!1sfr!2sca!4v1676766605236!5m2!1sfr!2sca"
            width="700"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div
          className={`${styles.contact_wrapper} w-100 d-flex flex-column align-items-center  animate__animated animate__bounceInLeft`}
        >
          <form
            onSubmit={handleSubmit}
            className={`${styles.contact_form} d-flex flex-column`}
            noValidate
          >
            <h2><FormattedMessage id="app.content.contact.form.title"/> </h2>
            <label>
              <FormattedMessage id="app.content.contact.form.name"/>
              <input
                type="text"
                required
                name="name"
                onChange={handleNomChange}
                onBlur={validateNom}
              />
            </label>
            {erreurNom && <div className={styles.erreur}>{erreurNom}</div>}
            <label htmlFor="">
              EMAIL
              <input
                type="email"
                name="email"
                id=""
                required
                onChange={handleCourrielChange}
                onBlur={valideCourriel}
              />
            </label>

            {erreurCourriel && (
              <div className={styles.erreur}>{erreurCourriel}</div>
            )}
            <label htmlFor="">
              Message
              <textarea
                onChange={handleMessageChange}
                onBlur={validateMessage}
                name="message"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </label>
            {erreurMessage && (
              <div className={styles.erreur}>{erreurMessage}</div>
            )}
            <input className="d-none" name="bot-field" />
            <button type="submit">
              <FormattedMessage id="app.content.contact.form.submit"/>
               <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
