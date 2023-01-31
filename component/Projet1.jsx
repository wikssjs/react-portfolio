import Image from "next/image"
import ecommerce from '../public/ecommerce.jpg'
import blackjack from '../public/blackjack.jpg'
import todo from '../public/todo.jpg'
import styles from '../styles/Projet1.module.css'
import ProjetElement from "./ProjetElement"
import ProjetGrid from "./ProjetGrid"

export default function Projet1() {
  return <ProjetGrid titre='Android' icon="bi bi-android2">
    <ProjetElement image={ecommerce} type="Android Developement" nom="E-Commerce Android App" id={0} anim = "animate__animated animate__bounceInLeft"/>
    <ProjetElement image={blackjack} type="Android Developement" nom="Blackjack game App"  id={1} anim = "animate__animated animate__bounceInUp"/>
    <ProjetElement image={todo} type="Android Developement" nom="E-Commerce Android App"  id={2} anim = "animate__animated animate__bounceInRight"/>
  </ProjetGrid>

}