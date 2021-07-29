import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import useTheme from "../hooks/ontheme";
import {getFrontend, getBackend} from "../data/programminglanguages";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";

export default function Home() {
    const frontend = getFrontend();
    const backend = getBackend();

    return (
    <div className={`${styles.page} ${styles.test} ${useTheme()}`}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main>
            <NavBar/>
            <Footer/>
            <Button href="#0">Click Me</Button>
        </main>
    </div>
  )
}

//TODO: Create Landing Page
