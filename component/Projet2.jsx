import ProjetElement from "./ProjetElement";
import ProjetGrid from "./ProjetGrid";
import quiz from '../public/quiz.png'
import meteo from '../public/meteo.png'
import portfolio from '../public/portfolio.png'
export default function Projet2() {
    return <ProjetGrid titre="Website" icon="bi bi-globe">
        <ProjetElement id={3} image={quiz} type="Web development" nom="Randow Quiz Game" video = "/videos/quiz.mp4" github="https://github.com/wikssjs/Quiz" lien="https://james-quiz.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -","RAPIDAPI"]}/>
        <ProjetElement id={4} image={meteo} type="Web development" nom="Weather Website" video = "/videos/meteo.mp4" github="https://github.com/wikssjs/Weather-app" lien="https://james-worldweather.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -","RAPIDAPI"]}/>
        <ProjetElement id={5} image={portfolio} type="Web development" nom="Portfolio Website" video = "/videos/portfolio.mp4" github="https://github.com/wikssjs/james-portfolio" lien="https://jamesbell-portfolio.netlify.app" languages ={["HTML -","CSS -","JAVASCIPT -","ANIMATE.CSS"]}/>
    </ProjetGrid>
}