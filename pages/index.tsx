import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import NavBar from "../components/navbar";
import theme from "../styles/elements/theme.module.scss";

export default function Home() {
  const frontend = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Next.js'];
  const backend = ['C', 'C++', 'C#', 'Python', 'Java', 'TypeScript', 'Node.js', 'SQL', 'NoSQL'];

  return (
    <div className={`${theme.dark} ${styles.page}`}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main>
            <NavBar/>
        </main>
    </div>
  )
}

//TODO: Light Theme, Footer
