import styles from "../styles/Education.module.css";
import ilus from "../public/ilus.png";
import Image from "next/image";
import { useRef, useEffect} from "react";
import { FormattedMessage } from "react-intl";

/**
 * fonction qui retourne le composant education
 * @returns the page education
 */
export default function Education() {
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = divRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

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

  return (
    <div
      ref={divRef}
      className={`${styles.education_wrapper} shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft gap-5 mb-5 d-flex `}
    >
      <div>
        <h1>Education </h1>

        <div className={styles.college_wrapper}>
          <h2> <FormattedMessage id="app.content.about.education.subtitle"/></h2>
          <span>
            <FormattedMessage id="app.content.about.education.college"/>
          </span>
          <div className="mt-4">
            <p>
              <FormattedMessage id="app.content.about.education.text1"/>
            </p>
            <p>
              <FormattedMessage id="app.content.about.education.text2"/>
            </p>
            <p>
              <FormattedMessage id="app.content.about.education.text3"/>
            </p>
          </div>
        </div>
      </div>
      <Image alt="image" src={ilus} className={styles.image} />
    </div>
  );
}
