import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import Hero from "../components/hero";

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
                <Hero src="/images/hero.webp" alt={"A picture of Payman Ahmadpour"}/>
            </div>
        </main>
    </div>
  )
}

//TODO: Button, Navigation Bar, Footer
