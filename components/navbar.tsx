import styles from "../styles/components/navbar.module.scss"
import NavButton, {NavButtonDarkMode, NavButtonHomePage} from "../elements/navbutton";
import {faInfo, faStar, faLaptopCode, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import useScrollDirection from "../hooks/onscroll";

export default function NavBar() : JSX.Element {
    const dir = useScrollDirection({initialDirection:false, thresholdPixels:30});

    return (
        <ul className={`${styles.navbar} ${dir < 0 ? styles.hidden : styles.active}`}>
            <li className={styles.navbutton}>
                <NavButton icon={faInfo} href="/about">About</NavButton>
            </li>
            <li className={styles.navbutton}>
                <NavButton icon={faStar} href="/ranking">Ranking</NavButton>
            </li>
            <li className={`${styles.navbutton} ${styles.grow}`}>
                <NavButtonHomePage href="/"/>
            </li>
            <li className={styles.navbutton}>
                <NavButton icon={faLaptopCode} href="/projects">Projects</NavButton>
            </li>
            <li className={`${styles.navbutton}`}>
                <NavButtonDarkMode iconDark={faMoon} iconLight={faSun}/>
            </li>
        </ul>
    );
}