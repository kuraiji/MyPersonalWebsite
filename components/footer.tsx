import styles from "../styles/components/footer.module.scss"

interface FooterProps {
    children?: string
}

export default function Footer(props: FooterProps) : JSX.Element {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#0">
                    <img className={styles.logo} src="favicon.svg" alt="Homepage Icon"/>
                    <strong className={styles.logotext}>Kuraiji</strong>
                </a>
            </div>
            <ul>
                <li><a href="#0">
                    About
                    </a></li>
                <li><a href="#0">
                    Ranking
                </a></li>
                <li><a href="#0">
                    Projects
                </a></li>
            </ul>
            <p>A website by <b>Payman Ahmadpour</b></p>
        </footer>
    );
}