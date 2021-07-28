import styles from "../styles/components/navbar.module.scss"
import NavButton, {NavButtonDarkMode, NavButtonHomePage} from "../elements/navbutton";
import {faInfo, faStar, faLaptopCode, faToggleOn, faToggleOff} from "@fortawesome/free-solid-svg-icons";
import useScrollDirection from "../hooks/onscroll";

export default function NavBar() : JSX.Element {
    const dir = useScrollDirection({initialDirection:false, thresholdPixels:0});

    return (
        <ul className={`${styles.navbar} ${dir < 0 ? styles.hidden : styles.active}`}>
            <li className={styles.navbutton}>
                <NavButton icon={faInfo} href="#0">About</NavButton>
            </li>
            <li className={styles.navbutton}>
                <NavButton icon={faStar} href="#0">Ranking</NavButton>
            </li>
            <li className={`${styles.navbutton} ${styles.grow}`}>
                <NavButtonHomePage href="#0"/>
            </li>
            <li className={styles.navbutton}>
                <NavButton icon={faLaptopCode} href="#0">Projects</NavButton>
            </li>
            <li className={`${styles.navbutton}`}>
                <NavButtonDarkMode icon={faToggleOn}/>
            </li>
        </ul>
    );
}