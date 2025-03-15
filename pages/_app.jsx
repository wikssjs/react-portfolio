import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Roboto_Flex,
  Playfair_Display,
  Cormorant_Garamond,
} from "@next/font/google";
import Layout from "../component/Layout";
import { LocaleProvider } from '../component/LocalProvider';

const roboto = Roboto_Flex({ subsets: ["latin"] });
const playFair = Playfair_Display({ subsets: ["latin"] });
const garamond = Cormorant_Garamond({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  
  // SEO metadata
  const baseUrl = "https://www.jameswikss.ca"; // URL réelle du site
  const currentUrl = `${baseUrl}${router.asPath}`;
  const siteName = "James Bell - Portfolio";
  const siteDescription = "Portfolio de James Bell, développeur web full-stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et compétences en développement web.";
  const siteImage = `${baseUrl}/images/portfolio-preview.jpg`;

  // Initialiser AOS avec des paramètres améliorés
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: false,
      throttleDelay: 99,
      debounceDelay: 50
    });

    // Réinitialiser AOS après un court délai pour s'assurer que tout est chargé
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);
  
  // Réinitialiser AOS lors des changements de route
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      });
    }
    
    router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
    
    return () => {
      router.events.off('routeChangeComplete', () => {
        AOS.refresh();
      });
    };
  }, [router.events]);

  const setDarkMode = () => {
    setDark(dark);
  };

  // Données structurées JSON-LD pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "James Bell",
    "url": baseUrl,
    "image": `${baseUrl}/images/james-bell.jpg`,
    "jobTitle": "Développeur Web Full-Stack",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/jamesbell", // Mettre à jour avec vos liens réels
      "https://linkedin.com/in/jamesbell",
      "https://twitter.com/jamesbell"
    ],
    "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "CSS", "HTML"]
  };

  return (
    <>
      <Head>
        <title>James Bell - Portfolio</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Balises canoniques et alternatives linguistiques */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={`${baseUrl}/en${router.pathname}`} hrefLang="en" />
        <link rel="alternate" href={`${baseUrl}/fr${router.pathname}`} hrefLang="fr" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="James Bell - Portfolio" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        
        {/* Twitter */}
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="James Bell - Portfolio" />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
        
        {/* Données structurées pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>
        {`
      html {
        scroll-behavior: smooth;
        font-size: 16px;
      }

      body {
        ${
          dark
            ? "background-color:#292b2c"
            : `background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`
        }
        position: relative;
        overflow-x: hidden;
      }

      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
        pointer-events: none;
        z-index: -1;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${playFair.style.fontFamily};
        font-weight: 700;
        margin-bottom: 1rem;
        color: #ffffff;
        letter-spacing: 0.5px;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 1.2;
      }

      h2 {
        font-size: 2.5rem;
        position: relative;
        display: inline-block;
      }

      h2::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, #21D4FD, #B721FF);
        transition: all 0.3s ease;
      }

      h2:hover::after {
        width: 100%;
      }

      p, li, div, .txt-type {
        font-family: ${garamond.style.fontFamily};
        font-size: 1.1rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
      }

      .txt-type {
        color: ${dark ? "white" : "white"};
        font-weight: 500;
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      a:hover {
        color: #21D4FD;
      }

      /* Effets de glassmorphisme */
      .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      /* Effets de néon */
      .neon-text {
        text-shadow: 0 0 5px rgba(33, 212, 253, 0.5), 0 0 10px rgba(33, 212, 253, 0.3), 0 0 15px rgba(33, 212, 253, 0.2);
      }

      .neon-border {
        box-shadow: 0 0 5px rgba(33, 212, 253, 0.5), 0 0 10px rgba(33, 212, 253, 0.3), 0 0 15px rgba(33, 212, 253, 0.2);
      }

      /* Animations */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .float {
        animation: float 3s ease-in-out infinite;
      }

      /* Boutons */
      .btn {
        display: inline-block;
        padding: 0.8rem 1.8rem;
        border-radius: 50px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 1;
        border: none;
        cursor: pointer;
        background: linear-gradient(45deg, #21D4FD, #B721FF);
        color: white;
        box-shadow: 0 4px 15px rgba(33, 212, 253, 0.4);
      }

      .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(45deg, #B721FF, #21D4FD);
        transition: width 0.4s ease;
        z-index: -1;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(33, 212, 253, 0.6);
      }

      .btn:hover::before {
        width: 100%;
      }

      /* Scrollbar personnalisée */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(#21D4FD, #B721FF);
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(#B721FF, #21D4FD);
      }

      /* Sections */
      section {
        padding: 5rem 0;
        position: relative;
      }

      /* Utilitaires */
      .text-gradient {
        background: linear-gradient(to right, #21D4FD, #B721FF);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .bg-gradient {
        background: linear-gradient(45deg, #21D4FD, #B721FF);
      }

      /* Media queries */
      @media (max-width: 768px) {
        html {
          font-size: 14px;
        }
        
        h1 {
          font-size: 2.8rem;
        }
        
        h2 {
          font-size: 2.2rem;
        }
      }

      @media (max-width: 576px) {
        html {
          font-size: 12px;
        }
        
        h1 {
          font-size: 2.5rem;
        }
        
        h2 {
          font-size: 2rem;
        }
      }
    `}
      </style>
      <LocaleProvider>
        <Layout setDark={setDark} dark={dark}>
          <Component 
            {...pageProps} 
          />
          <Analytics />
        </Layout>
      </LocaleProvider>
    </>
  );
}
