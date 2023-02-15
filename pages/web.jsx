import ProjetElement from "../component/ProjetElement";
import ProjetGrid from "../component/ProjetGrid";
import quiz from '../public/quiz.png'
import meteo from '../public/meteo.png'
import portfolio from '../public/portfolio.png'
import tiktok from '../public/tiktok.png'
import message from '../public/message.png'


/**
 * ma page de projet web
 * @returns un grid avec mes projet elements
 */
export default function Projet2() {
    return <ProjetGrid titre="Website" icon="bi bi-globe">
        <ProjetElement id={3} image={quiz} type="Web development" nom="Randow Quiz Game" anim={"animate__animated animate__bounceInLeft"} video = "/videos/quiz.mp4" github="https://github.com/wikssjs/Quiz" lien="https://james-quiz.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -","API"]}/>
        <ProjetElement id={4} image={meteo} type="Web development" nom="Weather Website" anim={"animate__animated animate__bounceInUp"} video = "/videos/meteo.mp4" github="https://github.com/wikssjs/Weather-app" lien="https://james-worldweather.netlify.app" languages ={["HTML -","BOOTSTRAP -","JAVASCIPT -","API"]}/>
        <ProjetElement id={5} image={portfolio} type="Web development" nom="Portfolio Website" anim={"animate__animated animate__bounceInRight"} video = "/videos/portfolio.mp4" github="https://github.com/wikssjs/james-portfolio" lien="https://jamesbell-portfolio.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -"]}/>
        <ProjetElement id={5} image={tiktok} type="Web development" nom="Tiktok Downloader" anim={"animate__animated animate__bounceInRight"} video = "/videos/tiktok.mp4" github="https://github.com/wikssjs/TiktokDownloader" lien="https://jamesdowntik.azurewebsites.net" languages ={["C# -","ASP.NET -","BOOSTRAP","API"]}/>
        <ProjetElement id={6} image={message} type="Web development" nom="Real Time Chat Room" anim={"animate__animated animate__bounceInRight"} video = "/videos/message.mp4" github="https://github.com/wikssjs/messaging_app" lien="https://message-xz6i.onrender.com" languages ={["NODEJS -","EXPRESS","TAILWIND -","CSS -","SQLITE"]}/>
    </ProjetGrid>
}