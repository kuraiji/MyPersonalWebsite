//Next Imports, Data and Hooks
import Head from 'next/head';
import Image from "next/image";
import useTheme from "../hooks/ontheme";
import {getFrontend, getBackend} from "../data/programminglanguages";
//Style Imports
import styles from '../styles/pages/Home.module.scss';
import shinystyles from '../styles/elements/shiny-effect.module.scss';
//Picture Imports
import InitialPicture from "../public/images/landing/Hero.webp"
import CodingPicture from "../public/images/landing/Coding.jpg"
import GamePicture from "../public/images/landing/Game.jpg"
import MediaPicture from "../public/images/landing/Media.jpg"
//Components and Elements
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../elements/header";
import Hero from "../components/hero";
import List from "../components/list";


export default function Home() {
    const frontend = getFrontend();
    const backend = getBackend();

    return (
    <div className={`${styles.page} ${useTheme()}`}>
        <Head>
            <title>Workbench</title>
        </Head>
        <NavBar/>
        <main>
            <header>
                <div className={styles.openingheader}>
                    <p>Hello, you can call me </p>
                    <Header className={styles.inline}>Payman</Header>
                    <p>.</p>
                </div>
                <Hero className={styles.hero} src={InitialPicture} alt="A picture of Payman Ahmadpour"/>
                <div className={styles.bodytext}>
                    <p>Full Stack <strong>Software Engineer</strong></p>
                    <p>Video Game <strong>Programmer</strong></p>
                    <p>Media and Web Content <strong>Creator</strong></p>
                    <p>Who's always working on the next big project.</p>
                    <p>Some call me the modern day <strong>Da Vinci</strong> because of my uncanny ability to clean up your <strong>UI</strong>, fix that one pesky bug breaking the <strong>database</strong>, and edit your soon-to-be <strong>viral</strong> internet video all in the same day.</p>
                </div>
            </header>
            <div className={styles.codingpicture}>
                <Image src={CodingPicture} alt={"A picture of HTML programming code"}/>
            </div>
            <h2 className={styles.subheader}>Full Stack <strong className={shinystyles.shiny}>Software Engineer</strong></h2>
            <List items={frontend}>Front End</List>
            <List items={backend}>Back End</List>
            <Hero className={styles.hero} src={GamePicture} alt={"A picture of a man playing VR"}/>
            <h2 className={styles.subheader}>Video Game <strong className={shinystyles.shiny}>Programmer</strong></h2>

        </main>
        <Footer/>
    </div>
  )
}

//TODO: Create Landing Page
