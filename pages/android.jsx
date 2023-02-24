import Image from "next/image"
import ecommerce from '../public/ecommerce.jpg'
import ecommerce2 from '../public/ecommerce2.png'
import blackjack from '../public/blackjack.jpg'
import blackjack2 from '../public/blackjack2.jpg'
import todo from '../public/todo.jpg'
import todo2 from '../public/todo.webp'
import ProjetElement from "../component/ProjetElement"
import ProjetGrid from "../component/ProjetGrid"


/**
 * ma page de projet android
 * @returns un grid avec les projet element dedans
 */
export default function Projet1() {


  return <ProjetGrid titre='Android' icon="bi bi-android2">
    <ProjetElement image={ecommerce2} type="Android Developement" nom="ECommerce  App" id={0} anim="animate__animated animate__bounceInLeft" video="/videos/ecommerce.mp4" github="https://github.com/wikssjs/JamesEcommerce" languages={["JAVA -", "ANDROID STUDIO -","FIREBASE -", "API"]} />
    <ProjetElement image={blackjack2} type="Android Developement" nom="Blackjack game App" id={1} anim="animate__animated animate__bounceInUp" video="/videos/blackjack.mp4" github="https://github.com/wikssjs/Blackjack" languages={["JAVA -", "ANDROID STUDIO"]} />
    <ProjetElement image={todo2} type="Android Developement" nom="Todo  App" id={2} anim="animate__animated animate__bounceInRight" video="/videos/todo.mp4" github="https://github.com/wikssjs/TODO_APP" languages={["JAVA -", "ANDROID STUDIO -", "SQLITE"]} />
  </ProjetGrid>

}