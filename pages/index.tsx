import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import Button from "../components/button";

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
                <Button href="#0">Go to Projects Page</Button>
            </div>
        </main>
    </div>
  )
}

//TODO: Navigation Bar, Footer
