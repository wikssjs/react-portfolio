import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from "react";
import AproposContenu from "../component/AproposContenu";
import styles from "../styles/Apropos.module.css";
import Education from "../component/Education";
import Head from "next/head";

export default function Apropos() {
  const router = useRouter();
  const [anim, addAnim] = useState(false);

  const changeAddAnim = () => {
    addAnim(!anim);
  };

  useEffect(() => {
    router.replace('/#about');
  }, [router]);

  return null;
}
