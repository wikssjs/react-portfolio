import ProjetElement from "../component/ProjetElement";
import ProjetGrid from "../component/ProjetGrid";
import Head from "next/head";
import quiz from "../public/quiz.png";
import meteo from "../public/meteo.png";
import tiktok_logo from "../public/tiktok_logo.jpg";
import haiti from "../public/haiti.png";
import chat from "../public/chat.png";
import bug from "../public/bug.png";
import amazeMart from "../public/amazemart.jpg";

/**
 * ma page de projet web
 * @returns un grid avec mes projet elements
 */
export default function Projet2() {
  return (
    <>
      <Head>
        <title>JamesBell - Contact</title>
        <meta
          name="description"
          content="Page de projet Web de mon portfolio"
        />
        <meta property="og:title" content="JamesBell - Projet-Web" />
        <meta
          property="og:description"
          content="Page de Projet Web de mon portfolio"
        />
        <meta
          property="og:image"
          content="https://jamesbell.vercel.app/james.png"
        />
      </Head>

      <ProjetGrid titre="Website" icon="bi bi-globe">
        <ProjetElement
          id={10}
          image={amazeMart}
          type="Web development"
          nom="AmazeMart"
          video="/videos/amazemart.mp4"
          github="https://github.com/wikssjs/AmazeMart"
          lien="https://amazemart.vercel.app"
          languages={["NextJs -", "NodeJs -", "Sqlite -", "Boostrap"]}
        />

        <ProjetElement
          id={9}
          image={bug}
          type="Web development"
          nom="Bug Tracker"
          video="/videos/bug.mp4"
          github="https://github.com/wikssjs/Bug-Tracker"
          lien="https://james-bug-tracker.vercel.app"
          languages={["SQLITE -", "EXPRESS -", "REACTJS -", "NODEJS"]}
        />

        <ProjetElement
          id={6}
          image={chat}
          type="Web development"
          nom="Real Time Chat Room"
          video="/videos/message.mp4"
          github="https://github.com/wikssjs/messaging_app"
          lien="https://realtimechat-app-0825e678ed39.herokuapp.com/connexion"
          languages={["NODEJS -", "EXPRESS -", "TAILWIND -", "CSS -", "SQLITE"]}
        />

        <ProjetElement
          id={7}
          image={tiktok_logo}
          type="Web development"
          nom="Tiktok Downloader"
          video="/videos/tiktok.mp4"
          github="https://github.com/wikssjs/TiktokDownloader"
          lien="https://jamesdowntik.azurewebsites.net"
          languages={["C# -", "ASP.NET -", "BOOSTRAP", "API"]}
        />

        <ProjetElement
          id={8}
          image={haiti}
          type="Web development"
          nom="Haiti"
          video="/videos/haiti.mp4"
          github="https://github.com/wikssjs/james"
          lien="https://haiti.vercel.app"
          languages={["React -", "BOOTSTRAP -", "CSS"]}
        />

        <ProjetElement
          id={4}
          image={meteo}
          type="Web development"
          nom="Weather Website"
          video="/videos/meteo.mp4"
          github="https://github.com/wikssjs/Weather-app"
          lien="https://james-worldweather.netlify.app"
          languages={["HTML -", "BOOTSTRAP -", "JAVASCIPT -", "API"]}
        />

        <ProjetElement
          id={3}
          image={quiz}
          type="Web development"
          nom="Randow Quiz Game"
          video="/videos/quiz.mp4"
          github="https://github.com/wikssjs/Quiz"
          lien="https://james-quiz.netlify.app"
          languages={["HTML -", "CSS -", "JAVASCIPT -", "API"]}
        />



      </ProjetGrid>
    </>
  );
}
