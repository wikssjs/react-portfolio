import { useState } from "react";
import AproposContenu from "../component/AproposContenu";
import styles from "../styles/Apropos.module.css";
import Education from "../component/Education";
import Head from "next/head";
export default function Apropos() {
  const [anim, addAnim] = useState(false);

  const changeAddAnim = () => {
    addAnim(!anim);
  };
  return (
    <>
      <Head>
        <title>JamesBell - Contact</title>
        <meta name="description" content="Page Apropos de mon portfolio" />
        <meta property="og:title" content="JamesBell - Apropos" />
        <meta
          property="og:description"
          content="Page Appropos de mon portfolio"
        />
        <meta
          property="og:image"
          content="https://jamesbell.vercel.app/james.png"
        />
      </Head>
      <main
        className={`${styles.main} d-flex flex-column gap-5 container-lg shadow-lg rounded-5 p-3`}
      >
        <AproposContenu />
        <Education />
      </main>
    </>
  );
}
