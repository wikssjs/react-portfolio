import Image from "next/image"
import ecommerce from '../public/ecommerce.jpg'
import blackjack from '../public/blackjack.jpg'
import todo from '../public/todo.jpg'
import styles from '../styles/Projet1.module.css'
import ProjetElement from "./ProjetElement"
import ProjetGrid from "./ProjetGrid"


/**
 * ma page de projet android
 * @returns un grid avec les projet element dedans
 */
export default function Projet1() {


  return <ProjetGrid titre='Android' icon="bi bi-android2">
    <ProjetElement image={ecommerce} type="Android Developement" nom="E-Commerce Android App" id={0} anim = "animate__animated animate__bounceInLeft" video = "/videos/ecommerce.mp4" github="https://github.com/wikssjs/JamesEcommerce" languages ={["JAVA -","ANDROID STUDIO -","RAPID API"]} />
    <ProjetElement image={blackjack} type="Android Developement" nom="Blackjack game App"  id={1} anim = "animate__animated animate__bounceInUp" video = "/videos/blackjack.mp4" github="https://github.com/wikssjs/Blackjack" languages ={["JAVA -","ANDROID STUDIO"]}/>
    <ProjetElement image={todo} type="Android Developement" nom="Todo Android App"  id={2} anim = "animate__animated animate__bounceInRight" video = "/videos/todo.mp4" github="https://github.com/wikssjs/TODO_APP" languages ={["JAVA -","ANDROID STUDIO -","SQLITE"]}/>
  </ProjetGrid>

}