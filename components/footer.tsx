import Link from "next/link";
import styles from "../styles/components/footer.module.scss"

export default function Footer() : JSX.Element {
    // noinspection HtmlUnknownTarget
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="/">
                    <a>
                        <img className={styles.logo} src="favicon.svg" alt="Homepage Icon"/>
                        <strong className={styles.logotext}>Kuraiji</strong>
                    </a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/about">
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/ranking">
                        <a>
                            Ranking
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>
                            Projects
                        </a>
                    </Link>
                </li>
            </ul>
            <p><small>A website by <b>Payman Ahmadpour</b></small></p>
        </footer>
    );
}