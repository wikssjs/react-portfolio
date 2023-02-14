
import Accueil from '../component/Accueil'
import Apropos from '../component/Apropos'
import Contact from '../component/Contact'
import Projet1 from '../component/Projet1'
import Projet2 from '../component/Projet2'

export default function Home({page}) {

  return <>
  {page === 'accueil'?
  <Accueil/>
  :
  page ==='projet1'?
  <Projet1/>
  :page === 'projet2'?
  <Projet2/>
  :page=="Apropos" ?
  <Apropos/> 
  :page=="Contact" ?
  <Contact/>
  :""
  }
  </>
}