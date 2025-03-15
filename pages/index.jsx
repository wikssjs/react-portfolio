import Head from 'next/head';
import Hero from '../component/Hero';
import Skills from '../component/Skills';
import ProjectsSection from '../component/ProjectsSection';
import About from '../component/About';
import Contact from '../component/Contact';
import { useEffect, useState } from 'react';

// Images pour les projets web
import amazeMart from '../public/amazemart.jpg';
import bug from '../public/bug.png';
import chat from '../public/chat.png';
import tiktok_logo from '../public/tiktok_logo.jpg';
import haiti from '../public/haiti.png';
import meteo from '../public/meteo.png';
import quiz from '../public/quiz.png';

// Images pour les projets Android
import ecommerce2 from '../public/ecommerce2.png';
import blackjack2 from '../public/blackjack2.jpg';
import todo2 from '../public/todo.webp';

/**
 * ma page d'accueil
 * @returns page d'accueil
 */
export default function Home() {
  const [webProjects, setWebProjects] = useState([]);
  const [androidProjects, setAndroidProjects] = useState([]);

  useEffect(() => {
    // Projets web
    setWebProjects([
      {
        id: 10,
        image: amazeMart,
        type: "Web development",
        nom: "AmazeMart",
        video: "/videos/amazemart.mp4",
        github: "https://github.com/wikssjs/AmazeMart",
        lien: "https://amazemart.vercel.app",
        languages: ["NextJs", "NodeJs", "Sqlite", "Boostrap"]
      },
      {
        id: 9,
        image: bug,
        type: "Web development",
        nom: "Bug Tracker",
        video: "/videos/bug.mp4",
        github: "https://github.com/wikssjs/Bug-Tracker",
        lien: "https://james-bug-tracker.vercel.app",
        languages: ["SQLITE", "EXPRESS", "REACTJS", "NODEJS"]
      },
      {
        id: 6,
        image: chat,
        type: "Web development",
        nom: "Real Time Chat Room",
        video: "/videos/message.mp4",
        github: "https://github.com/wikssjs/messaging_app",
        lien: "https://realtimechat-app-0825e678ed39.herokuapp.com/connexion",
        languages: ["NODEJS", "EXPRESS", "TAILWIND", "CSS", "SQLITE"]
      },
      {
        id: 7,
        image: tiktok_logo,
        type: "Web development",
        nom: "Tiktok Downloader",
        video: "/videos/tiktok.mp4",
        github: "https://github.com/wikssjs/TiktokDownloader",
        lien: "https://jamesdowntik.azurewebsites.net",
        languages: ["C#", "ASP.NET", "BOOSTRAP", "API"]
      },
      {
        id: 8,
        image: haiti,
        type: "Web development",
        nom: "Haiti",
        video: "/videos/haiti.mp4",
        github: "https://github.com/wikssjs/james",
        lien: "https://haiti.vercel.app",
        languages: ["React", "BOOTSTRAP", "CSS"]
      },
      {
        id: 4,
        image: meteo,
        type: "Web development",
        nom: "Weather Website",
        video: "/videos/meteo.mp4",
        github: "https://github.com/wikssjs/Weather-app",
        lien: "https://james-worldweather.netlify.app",
        languages: ["HTML", "BOOTSTRAP", "JAVASCIPT", "API"]
      },
      {
        id: 3,
        image: quiz,
        type: "Web development",
        nom: "Random Quiz Game",
        video: "/videos/quiz.mp4",
        github: "https://github.com/wikssjs/Quiz",
        lien: "https://james-quiz.netlify.app",
        languages: ["HTML", "CSS", "JAVASCIPT", "API"]
      }
    ]);

    // Projets Android
    setAndroidProjects([
      {
        id: 0,
        image: ecommerce2,
        type: "Android Development",
        nom: "ECommerce App",
        video: "/videos/ecommerce.mp4",
        github: "https://github.com/wikssjs/JamesEcommerce",
        languages: ["JAVA", "ANDROID STUDIO", "FIREBASE", "API"]
      },
      {
        id: 1,
        image: blackjack2,
        type: "Android Development",
        nom: "Blackjack Game App",
        video: "/videos/blackjack.mp4",
        github: "https://github.com/wikssjs/Blackjack",
        languages: ["JAVA", "ANDROID STUDIO"]
      },
      {
        id: 2,
        image: todo2,
        type: "Android Development",
        nom: "Todo App",
        video: "/videos/todo.mp4",
        github: "https://github.com/wikssjs/TODO_APP",
        languages: ["JAVA", "ANDROID STUDIO", "SQLITE"]
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>James Bell - Portfolio</title>
        <meta name="description" content="Portfolio de James Bell, développeur web et Android" />
        <meta property="og:title" content="James Bell - Portfolio" />
        <meta property="og:description" content="Portfolio de James Bell, développeur web et Android" />
        <meta property="og:image" content="https://jamesbell.vercel.app/james.png" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <ProjectsSection webProjects={webProjects} androidProjects={androidProjects} />
      <Contact />
    </>
  );
}
