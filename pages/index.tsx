import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import NavButton from "../elements/navbutton";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const frontend = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Next.js'];
  const backend = ['C', 'C++', 'C#', 'Python', 'Java', 'TypeScript', 'Node.js', 'SQL', 'NoSQL'];

  return (
    <div className={styles.page}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main>
            <div className={styles.test}>
                <NavButton icon={faInfo} href={"#0"}>About</NavButton>
            </div>
        </main>
    </div>
  )
}

//TODO: Navigation Bar, Footer
