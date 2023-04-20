import styles from "../styles/Menu.module.css";
import Nom_Logo from "./Nom_Logo";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useLocale } from "./LocalProvider";

export default function Menu() {
  //hook to get the scrollY of the page
  const [scrollY, setScrollY] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [ locale, setLocale ] = useLocale();
  const handleLocaleChange = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr')
}

  
  const changeCheck = () => {
    setIsChecked(!isChecked);
  };


  

  //hook to handleTheScroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <input
        checked={isChecked}
        className={styles.input}
        type="checkbox"
        name=""
        id="toggle"
      />
      {/**Menu  */}
      <nav className={`${styles.menu}`}>
        <Nom_Logo />

        {/**Hamburger menu pour les petites ecrans */}
        <label
          onClick={changeCheck}
          htmlFor="toggle"
          className={`${styles.navbar_toggler} animate__animated animate__bounceInDown`}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        {/** Menu de la pge */}
        <ul className={styles.liste}>
          <li
            onClick={changeCheck}
            className={`${styles.home} animate__animated animate__bounceInDown `}
          >
            <Link href="/">
              {" "}
              <i className="bi bi-house"></i>{" "}
              <FormattedMessage id="app.menu.home" />
            </Link>
          </li>
          <li
            onClick={changeCheck}
            className={`${styles.about} animate__animated animate__bounceInDown`}
          >
            {" "}
            <Link href="/apropos">
              {" "}
              <i className="bi bi-person"></i>{" "}
              <FormattedMessage id="app.menu.about" />
            </Link>
          </li>

          {/**DropDown */}
          <li>
            <div
              className={`${styles.dropdown} animate__animated animate__bounceInDown `}
            >
              <a href="#" className={styles.dropdown_button}>
                <i className="bi bi-briefcase"></i>{" "}
                <FormattedMessage id="app.menu.project" />
                <i className="bi bi-arrow-down-short"></i>{" "}
              </a>
              <ul className={styles.dropdown_content}>
                <li onClick={changeCheck}>
                  <Link href="/android">
                    {" "}
                    <i className="bi bi-android2"></i>{" "}
                    <FormattedMessage id="app.menu.project.android" />
                  </Link>
                </li>
                <li onClick={changeCheck}>
                  <Link href="/web">
                    <i className="bi bi-globe"></i>{" "}
                    <FormattedMessage id="app.menu.project.web" />
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li
            onClick={changeCheck}
            className={`${styles.contact} animate__animated animate__bounceInDown`}
          >
            <Link href="/contact">
              <i className="bi bi-envelope-open"></i>{" "}
              <FormattedMessage id="app.menu.contact" />
            </Link>
          </li>

          <li style={{cursor:"pointer",color:"white"}} onClick={()=>{
            changeCheck();
            handleLocaleChange();
          }}>
            <p>
              <i className="bi bi-translate"></i>{" "}
              {locale === "fr" ? "EN" : "FR"}
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
}
