import ProjetGrid from "./ProjetGrid";
import ProjetElement from "./ProjetElement";import ecommerce from '../public/ecommerce.jpg'


export default function projetFullPage(){
    return <ProjetGrid>
    <ProjetElement image={ecommerce} type="Android Developement" nom="E-Commerce Android App" id={0} anim="animate__animated animate__bounceInLeft" video="/videos/ecommerce.mp4" github="https://github.com/wikssjs/JamesEcommerce" languages={["JAVA -", "ANDROID STUDIO -", "RAPID API"]} />
    <ProjetElement image={ecommerce} type="Android Developement" nom="E-Commerce Android App" id={0} anim="animate__animated animate__bounceInLeft" video="/videos/ecommerce.mp4" github="https://github.com/wikssjs/JamesEcommerce" languages={["JAVA -", "ANDROID STUDIO -", "RAPID API"]} />
    <ProjetElement image={ecommerce} type="Android Developement" nom="E-Commerce Android App" id={0} anim="animate__animated animate__bounceInLeft" video="/videos/ecommerce.mp4" github="https://github.com/wikssjs/JamesEcommerce" languages={["JAVA -", "ANDROID STUDIO -", "RAPID API"]} />
    </ProjetGrid>
}