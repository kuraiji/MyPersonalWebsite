import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import List from "../components/list";

export default function Home() {
  const frontend = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Next.js'];
  const backend = ['C', 'C++', 'C#', 'Python', 'Java', 'TypeScript', 'Node.js', 'SQL', 'NoSQL'];

  return (
    <div className={styles.page}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main>
            <div>
                <List className={styles.test} items={frontend}>Front End</List>
            </div>
        </main>
    </div>
  )
}

//TODO: List (Glitched and Not Glitched), Hero, Button, Navigation Bar, Footer
