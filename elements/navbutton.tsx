import styles from "../styles/elements/navbutton.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import useTheme, {toggleTheme} from "../hooks/ontheme";

interface NavButtonProps {
    children: string;
    icon: IconDefinition;
    href: string;
}

interface NavButtonHomePageProps {
    href: string;
}

interface NavButtonDarkModeProps {
    iconDark: IconDefinition;
    iconLight: IconDefinition;
}

export default function NavButton(props: NavButtonProps) : JSX.Element {
    return (
        <a className={`${styles.buttontext} ${styles.normalbutton}`} href={props.href}>
            <FontAwesomeIcon className={styles.buttonicon} icon={props.icon}/>
            <p>{props.children}</p>
        </a>
    );
}

export function NavButtonHomePage(props: NavButtonHomePageProps) : JSX.Element {
    return (
        <a className={`${styles.buttontext} ${styles.specialbutton}`} href={props.href}>
            <img className={`${styles.logo}`} src="favicon.svg" alt="Homepage Icon"/>
        </a>
    )
}

export function NavButtonDarkMode(props: NavButtonDarkModeProps) : JSX.Element {
    return (
        <button onClick={toggleTheme} className={`${styles.buttontext} ${styles.specialbutton}`}>
                <div className={styles.darkmode}>
                    <FontAwesomeIcon className={`${styles.buttonicon} ${styles.darkbutton} ${useTheme() === "light" ? styles.hidden : styles.active}`}  icon={props.iconDark}/>
                    <FontAwesomeIcon className={`${styles.buttonicon} ${styles.darkbutton} ${useTheme() === "light" ? styles.active : styles.hidden}`} icon={props.iconLight}/>
                </div>
        </button>
    )
}