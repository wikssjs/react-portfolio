import styles from "../styles/Contact_Info.module.css";

/**
 * informations personnels
 * @returns mes infos
 */
export default function Contact_Info() {
  {
    /**Contenu de la de mes informations */
  }
  return (
    <div className={`${styles.contact} d-none`}>
      <p>E: email@email.com</p>
      <p>T: +1 111 111 1111</p>
    </div>
  );
}
