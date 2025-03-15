import Link from 'next/link';
import SafeFormattedMessage from './utils/TranslationFallback';
import { scrollToSection } from './utils/scrollUtils';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '#home', id: 'home', labelId: 'app.nav.home', fallback: 'Home' },
    { href: '#about', id: 'about', labelId: 'app.nav.about', fallback: 'About' },
    { href: '#skills', id: 'skills', labelId: 'app.nav.skills', fallback: 'Skills' },
    { href: '#projects', id: 'projects', labelId: 'app.nav.projects', fallback: 'Projects' },
    { href: '#contact', id: 'contact', labelId: 'app.nav.contact', fallback: 'Contact' }
  ];
  
  const socialLinks = [
    { href: 'https://github.com/wikssjs', icon: 'bi-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/james-bell-b9b1b9237/', icon: 'bi-linkedin', label: 'LinkedIn' },
    { href: 'mailto:jamesbell@gmail.com', icon: 'bi-envelope-fill', label: 'Email' },
    { href: 'https://twitter.com/', icon: 'bi-twitter', label: 'Twitter' }
  ];
  
  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo} data-aos="fade-right" data-aos-delay="100">
            <div className={styles.footerLogo}>
              <Link href="/">
                <span className={styles.logo}>James Bell</span>
              </Link>
            </div>
            <p className={styles.footerText}>
              <SafeFormattedMessage id="app.footer.description" fallback="Passionate web developer, creating modern and intuitive digital experiences." />
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={styles.socialLink}
                >
                  <i className={`bi ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.footerLinks} data-aos="fade-up" data-aos-delay="200">
            <h3 className={styles.footerTitle}>
              <SafeFormattedMessage id="app.footer.quickLinks" fallback="Quick Links" />
            </h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <a 
                    href={link.href} 
                    className={styles.footerLink}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    <i className="bi bi-chevron-right"></i>
                    <SafeFormattedMessage id={link.labelId} fallback={link.fallback} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.footerContact} data-aos="fade-left" data-aos-delay="300">
            <h3 className={styles.footerTitle}>
              <SafeFormattedMessage id="app.footer.contact" fallback="Contact" />
            </h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="bi bi-geo-alt"></i>
                <span>Montréal, Québec, Canada</span>
              </div>
              <div className={styles.contactItem}>
                <i className="bi bi-envelope"></i>
                <a href="mailto:jamesbell@gmail.com">jamesbell@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <i className="bi bi-phone"></i>
                <a href="tel:+15141234567">+1 (514) 123-4567</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              &copy; {currentYear} James Bell. <SafeFormattedMessage id="app.footer.rights" fallback="All rights reserved." />
            </p>
          </div>
          <div className={styles.backToTop}>
            <a 
              href="#home" 
              className={styles.topButton}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <i className="bi bi-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerShape}></div>
    </footer>
  );
} 