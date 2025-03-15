import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

/**
 * Layout de mon site web
 * @param {children, locale, changeLanguage} param0
 * @returns header, contenu de la page et mes contacts
 */
export default function Layout({ children }) {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />

      {showBackToTop && (
        <button 
          className={styles.backToTop} 
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
