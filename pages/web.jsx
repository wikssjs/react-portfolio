import ProjetElement from "../component/ProjetElement";
import ProjetGrid from "../component/ProjetGrid";
import quiz from '../public/quiz.png'
import meteo from '../public/meteo.png'
import portfolio from '../public/portfolio.png'
import tiktok from '../public/tiktok.png'
import tiktok_logo from '../public/tiktok_logo.jpg'
import haiti from '../public/haiti.png'
import message from '../public/message.png'
import chat from '../public/chat.png'


/**
 * ma page de projet web
 * @returns un grid avec mes projet elements
 */
export default function Projet2() {
    return <ProjetGrid titre="Website" icon="bi bi-globe">
        <ProjetElement id={6} image={chat} type="Web development" nom="Real Time Chat Room" anim={"animate__animated animate__bounceInLeft"} video = "/videos/message.mp4" github="https://github.com/wikssjs/messaging_app" lien="https://message-xz6i.onrender.com" languages ={["NODEJS -","EXPRESS","TAILWIND -","CSS -","SQLITE"]}/>
        <ProjetElement id={7} image={tiktok_logo} type="Web development" nom="Tiktok Downloader" anim={"animate__animated animate__bounceInDown"} video = "/videos/tiktok.mp4" github="https://github.com/wikssjs/TiktokDownloader" lien="https://jamesdowntik.azurewebsites.net" languages ={["C# -","ASP.NET -","BOOSTRAP","API"]}/>
        <ProjetElement id={8} image={haiti} type="Web development" nom="Haiti" anim={"animate__animated animate__bounceInRight"} video = "/videos/haiti.mp4" github="https://github.com/wikssjs/james" lien="https://haiti.vercel.app" languages ={["React -","BOOTSTRAP -","CSS"]}/>
        <ProjetElement id={4} image={meteo} type="Web development" nom="Weather Website" anim={"animate__animated animate__bounceInRight"} video = "/videos/meteo.mp4" github="https://github.com/wikssjs/Weather-app" lien="https://james-worldweather.netlify.app" languages ={["HTML -","BOOTSTRAP -","JAVASCIPT -","API"]}/>
        <ProjetElement id={3} image={quiz} type="Web development" nom="Randow Quiz Game" anim={"animate__animated animate__bounceInUp"} video = "/videos/quiz.mp4" github="https://github.com/wikssjs/Quiz" lien="https://james-quiz.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -","API"]}/>
    </ProjetGrid>
}