import Image from 'next/image';
import SafeFormattedMessage from './utils/TranslationFallback';
import styles from '../styles/About.module.css';
import about from '../public/about.jpg'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            <SafeFormattedMessage id="app.content.about.title" fallback="About Me" />
          </h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageWrapper} data-aos="fade-right" data-aos-delay="200">
            <div className={styles.imageContainer}>
              <div className={styles.imageBg}></div>
              <img
                src="about.jpg"
                alt="About James Bell"
                width={400}
                height={400}
                className={styles.aboutImage}
              />
              <div className={styles.imageGlow}></div>
              <div className={styles.imageBorder}></div>
            </div>
            
            <div className={styles.experience}>
              <div className={styles.experienceItem} data-aos="zoom-in" data-aos-delay="400">
                <span className={styles.experienceNumber}>3+</span>
                <span className={styles.experienceText}>
                  <SafeFormattedMessage id="app.content.about.years" fallback="Years of Experience" />
                </span>
              </div>
              <div className={styles.experienceItem} data-aos="zoom-in" data-aos-delay="600">
                <span className={styles.experienceNumber}>20+</span>
                <span className={styles.experienceText}>
                  <SafeFormattedMessage id="app.content.about.projects" fallback="Completed Projects" />
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.textContent} data-aos="fade-left" data-aos-delay="200">
            <h3 className={styles.aboutHeading}>
              <SafeFormattedMessage id="app.content.about.subtitle" fallback="Who I Am" />
            </h3>
            
            <p className={styles.aboutText}>
              <SafeFormattedMessage id="app.content.about.description" fallback="I am a passionate web developer with over 2 years of experience in creating modern and responsive web applications. I enjoy solving complex problems and creating intuitive and appealing user experiences." />
            </p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem} data-aos="fade-up" data-aos-delay="300">
                <span className={styles.infoLabel}>
                  <SafeFormattedMessage id="app.content.about.name" fallback="Name" />:
                </span>
                <span className={styles.infoValue}>James Bell</span>
              </div>
              
              <div className={styles.infoItem} data-aos="fade-up" data-aos-delay="400">
                <span className={styles.infoLabel}>
                  <SafeFormattedMessage id="app.content.about.email" fallback="Email" />:
                </span>
                <span className={styles.infoValue}>jamesbell@gmail.com</span>
              </div>
              
              <div className={styles.infoItem} data-aos="fade-up" data-aos-delay="500">
                <span className={styles.infoLabel}>
                  <SafeFormattedMessage id="app.content.about.from" fallback="From" />:
                </span>
                <span className={styles.infoValue}>Montréal, Canada</span>
              </div>
              
              <div className={styles.infoItem} data-aos="fade-up" data-aos-delay="600">
                <span className={styles.infoLabel}>
                  <SafeFormattedMessage id="app.content.about.freelance" fallback="Freelance" />:
                </span>
                <span className={styles.infoValue}>
                  <SafeFormattedMessage id="app.content.about.available" fallback="Available" />
                </span>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <a 
                href="/JamesUpdateCV.pdf" 
                download 
                className={styles.primaryBtn}
                data-aos="fade-up" 
                data-aos-delay="700"
              >
                <SafeFormattedMessage id="app.content.about.download" fallback="Download CV" />
                <i className="bi bi-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
      </div>
    </section>
  );
} 