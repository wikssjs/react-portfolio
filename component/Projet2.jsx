import ProjetElement from "./ProjetElement";
import ProjetGrid from "./ProjetGrid";
import quiz from '../public/quiz.png'
import meteo from '../public/meteo.png'
export default function Projet2(){
    return <ProjetGrid titre="Website" icon="bi bi-globe">
        <ProjetElement image={quiz} type="Web development" nom="Randow Quiz Game"/>
        <ProjetElement image={meteo} type="Web development" nom="Weather Website"/>
    </ProjetGrid>
}