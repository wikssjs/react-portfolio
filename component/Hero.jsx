import Image from 'next/image';
import { useIntl } from 'react-intl';
import Typewriter from 'typewriter-effect';
import SafeFormattedMessage from './utils/TranslationFallback';
import styles from '../styles/Hero.module.css';
import { useRouter } from 'next/router';
import { useLocale } from './LocalProvider';
export default function Hero() {
  const intl = useIntl();
  const [locale] = useLocale();
  
  // Utiliser formatMessage avec un message par défaut
  const type1String = intl.formatMessage(
    { id: 'app.content.home.type1' }, 
    { defaultMessage: 'Web Developer' }
  );
  const type2String = intl.formatMessage(
    { id: 'app.content.home.type2' }, 
    { defaultMessage: 'Android Developer' }
  );

  return (
    <section className={styles.hero} id="home">
      <div className={styles.particles}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.particle}></div>
        ))}
      </div>
      
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent} data-aos="fade-right" data-aos-delay="200">
            <h1 className={`${styles.title} neon-text`}>James Bell</h1>
            <div className={styles.typewriter}>
              <span><SafeFormattedMessage id="app.content.home.iam" fallback="I Am A" /> </span>
              <Typewriter
                options={{
                  strings: [type1String, type2String],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              />
            </div>
            <p className={styles.description}>
              <SafeFormattedMessage id="app.content.home.text" fallback="I am a skilled developer in CSS, HTML, JavaScript, and frameworks. I strive to create high-performing applications and websites by learning new tools and improving myself." />
            </p>
            <div className={styles.buttons}>
              <a 
                href={`${locale === 'fr' ? '/James-cv-2025.pdf' : '/James-cv-2025-EN.pdf  '}`} 
                download 
                className={styles.primaryBtn}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <SafeFormattedMessage id="app.content.home.cv" fallback="Download CV" />
                <i className="bi bi-download"></i>
              </a>
              <a 
                href="#contact" 
                className={styles.secondaryBtn}
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                <SafeFormattedMessage id="app.content.home.contact" fallback="Contact Me" />
                <i className="bi bi-telephone"></i>
              </a>
            </div>
            
            <div className={styles.socialLinks} data-aos="fade-up" data-aos-delay="800">
              <a href="https://github.com/wikssjs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/james-bell-b9b1b9237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:jamesbell@gmail.com" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.imageWrapper} data-aos="fade-left" data-aos-delay="400">
            <div className={styles.imageContainer}>
              <div className={styles.imageBg}></div>
              <Image
                src="/home.png"
                alt="James Bell"
                width={500}
                height={500}
                priority
                className={styles.heroImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
      
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
      </div>
    </section>
  );
} 