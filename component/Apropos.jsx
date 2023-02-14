import { useState } from 'react'
import Image from 'next/image'
import ilus from '../public/ilus.png'
import ProjetGrid from './ProjetGrid';
import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/js.png'
import AproposContenu from './AproposContenu';
import Education from './Education';
export default function Apropos() {

        const [anim, addAnim] = useState(false);


        const changeAddAnim = () => {
                addAnim(!anim)
        }
        return <main className='d-flex flex-column gap-5 container-lg shadow-lg rounded-5 p-3'>
               <AproposContenu/>
               <Education/>
        </main>

}