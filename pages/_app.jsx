import 'normalize.css/normalize.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Roboto_Flex,Montserrat} from '@next/font/google'
import Layout from '../component/Layout';
const roboto = Roboto_Flex({subsets:['latin']});
const montserrat = Montserrat({subsets:['latin']});


export default function App({ Component, pageProps }) {
  return  <>

  <style jsx global>
    {`
    body{
      background-color : #333;
      color  : #fff
    }
      html {
        font-family : ${roboto.style.fontFamily};
      }

      h1,h2,h3,h4,h5,h6,p {
        font-family : ${montserrat.style.fontFamily}
      }

      a{
        color: #fff;
        text-decoration :none
      }
    
    `}
  </style>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}
