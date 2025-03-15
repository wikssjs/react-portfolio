import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SafeFormattedMessage from './utils/TranslationFallback';
import { scrollToSection } from './utils/scrollUtils';
import styles from '../styles/Navbar.module.css';
import { useLocale } from './LocalProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [locale, setLocale] = useLocale();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const navItems = [
    { id: 'home', labelId: 'app.nav.home', fallback: 'Home' },
    { id: 'about', labelId: 'app.nav.about', fallback: 'About' },
    { id: 'skills', labelId: 'app.nav.skills', fallback: 'Skills' },
    { id: 'projects', labelId: 'app.nav.projects', fallback: 'Projects' },
    { id: 'contact', labelId: 'app.nav.contact', fallback: 'Contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    closeMenu();
  };
  
  // Fonction pour changer la langue
  const changeLanguage = (e, newLocale) => {
    e.preventDefault();
    setLocale(newLocale);
    console.log(`Changing language to ${newLocale}`);
  };
  
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>James Bell</span>
        </Link>
        
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a 
                  href={`#${item.id}`} 
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <SafeFormattedMessage id={item.labelId} fallback={item.fallback} />
                  {activeSection === item.id && <span className={styles.activeIndicator}></span>}
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.navButtons}>
            <a href={`${locale === 'fr' ? '/James-cv-2025.pdf' : '/James-cv-2025-EN.pdf  '}`} download className={styles.cvButton}>
              <SafeFormattedMessage id="app.nav.cv" fallback="CV" />
              <i className="bi bi-download"></i>
            </a>
            
            <div className={styles.languageToggle}>
              <a 
                href="#" 
                onClick={(e) => changeLanguage(e, 'fr')} 
                className={`${styles.languageOption} ${locale === 'fr' ? styles.active : ''}`}
              >
                FR
              </a>
              <a 
                href="#" 
                onClick={(e) => changeLanguage(e, 'en')} 
                className={`${styles.languageOption} ${locale === 'en' ? styles.active : ''}`}
              >
                EN
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.mobileNavItem}>
                <a 
                  href={`#${item.id}`} 
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <i className={`bi bi-${item.id === 'home' ? 'house' : item.id === 'about' ? 'person' : item.id === 'skills' ? 'gear' : item.id === 'projects' ? 'code-square' : 'envelope'}`}></i>
                  <SafeFormattedMessage id={item.labelId} fallback={item.fallback} />
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.mobileButtons}>
            <Link href="/JamesUpdateCV.pdf" download className={styles.mobileCvButton}>
              <SafeFormattedMessage id="app.nav.cv" fallback="CV" />
              <i className="bi bi-download"></i>
            </Link>
            
            <div className={styles.mobileLanguageToggle}>
              <a 
                href="#" 
                onClick={(e) => changeLanguage(e, 'fr')} 
                className={`${styles.languageOption} ${locale === 'fr' ? styles.active : ''}`}
              >
                FR
              </a>
              <a 
                href="#" 
                onClick={(e) => changeLanguage(e, 'en')} 
                className={`${styles.languageOption} ${locale === 'en' ? styles.active : ''}`}
              >
                EN
              </a>
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={closeMenu}></div>
      </div>
    </nav>
  );
} 