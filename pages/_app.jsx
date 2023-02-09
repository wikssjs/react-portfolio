import 'normalize.css/normalize.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css';
import { useState } from 'react';
import {Roboto_Flex,Montserrat,EB_Garamond} from '@next/font/google'
import Layout from '../component/Layout';


const roboto = Roboto_Flex({subsets:['latin']});
const montserrat = Montserrat({subsets:['latin']});
const j = EB_Garamond({subsets:['latin']});

export default function App({ Component, pageProps }) {
  const [page,setPage] = useState('Apropos')

  return  <>

  <style jsx global>
    {`
      html {
        // font-family : ${roboto.style.fontFamily};
      }

      h1,h2,h3,h4,h5,h6,p {
        font-family : ${j.style.fontFamily}
      }

      body{
        background-color:#f4gt3;
      }
      p {
        font-family : ${roboto.style.fontFamily}
      }


      a{
        color: #fff;
        text-decoration :none
      }
      span{
        font-family : ${roboto.style.fontFamily}

      }
    
    `}
  </style>
  <Layout setPage={setPage}>
  <Component page = {page} {...pageProps} />
  </Layout>
  </>
}
