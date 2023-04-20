import styles from "../styles/Presentation.module.css";
import Typewriter from "typewriter-effect";
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl';

/**
 * prensentation de la page accueil
 * @returns ma presentation
 */
export default function Presentation() {
  const intl = useIntl();
  const type1String = intl.formatMessage({ id: 'app.content.home.type1' });
  const type2String = intl.formatMessage({ id: 'app.content.home.type2' });
    return (
    <div className={`${styles.text} d-flex flex-column gap-`}>
      <h1 className={`${styles.nom} text-shadow`}>James Bell</h1>

      <div className={styles.description}>
        <pre className="txt-type">
          <span><FormattedMessage id="app.content.home.iam"/> </span>
          <Typewriter
            options={{
              strings: [type1String,type2String],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </pre>

        <p>
          <FormattedMessage id="app.content.home.text"/>
        </p>
      </div>
    </div>
  );
}
