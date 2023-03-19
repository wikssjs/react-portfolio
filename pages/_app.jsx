import "normalize.css/normalize.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import { useState } from "react";
import {
  Roboto_Flex,
  Playfair_Display,
  Cormorant_Garamond,
} from "@next/font/google";
import Layout from "../component/Layout";

const roboto = Roboto_Flex({ subsets: ["latin"] });
const playFair = Playfair_Display({ subsets: ["latin"] });
const garamond = Cormorant_Garamond({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  const setDarkMode = () => {
    setDark(dark);
  };
  return (
    <>
      <style jsx global>
        {`
      html {
        // font-family : ${roboto.style.fontFamily};
      }

      h1,h2,h3,h4,h5,h6,p,li,div,.txt-type {
        font-family : ${playFair.style.fontFamily}
      }

      body{
        ${
          dark
            ? "background-color:#292b2c"
            : `background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`
        }
    
      }
      .txt-type{
        color:${dark ? "white" : "black"};
        font-family : ${garamond.style.fontFamily};

      }
      p {
        font-family : ${garamond.style.fontFamily}
        font-size:20px;
      }

      pre{
        font-family : ${garamond.style.fontFamily}
        background-color:red
      }


      a{
        color: #fff;
        text-decoration :none
      }
    
    `}
      </style>
      <Layout setDark={setDark} dark={dark}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
