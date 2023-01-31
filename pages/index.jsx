
import { useState } from 'react'
import Accueil from '../component/Accueil'
import Projet1 from '../component/Projet1'
import Projet2 from '../component/Projet2'
export default function Home() {

  const [page,setPage] = useState('projet1')
  return <>
  {page === 'accueil'?
  <Accueil/>
  :
  page ==='projet1'?
  <Projet1/>
  :page === 'projet2'?
  <Projet2/>
  :
  404
  }
  </>
}