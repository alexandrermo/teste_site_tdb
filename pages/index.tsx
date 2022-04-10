import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TDB</title>
      </Head>

      <main className={styles.main}>
        <h1>TUDO DE BOM</h1>
      </main>
    </div>
  );
};

export default Home;
