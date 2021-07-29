import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import useTheme from "../../hooks/ontheme";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Button from "../../components/button";

export default function Home() {
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
