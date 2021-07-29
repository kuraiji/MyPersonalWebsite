import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import NavBar from "../components/navbar";
import useTheme from "../hooks/ontheme";


export default function Home() {
  const frontend = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Next.js'];
  const backend = ['C', 'C++', 'C#', 'Python', 'Java', 'TypeScript', 'Node.js', 'SQL', 'NoSQL'];

  return (
    <div className={`${styles.page} ${useTheme()}`}>
        <Head>
            <title>Workbench</title>
        </Head>
        <main id="main">
            <NavBar/>
        </main>
    </div>
  )
}

//TODO: Footer, Make API for Video Games and Projects
