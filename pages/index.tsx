import Head from 'next/head'
import BodyText from "../elements/bodytext";
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main>
            <div>
                <BodyText className={styles.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate enim iure iusto, libero nulla rem repellendus sit soluta voluptates. Consequatur cupiditate dolor iure, maxime perferendis quod tempora tempore ullam.</BodyText>
            </div>
        </main>
    </div>
  )
}

//TODO: List (Glitched and Not Glitched), Hero, Button, Navigation Bar, Footer
