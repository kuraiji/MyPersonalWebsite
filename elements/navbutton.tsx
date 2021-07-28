import styles from "../styles/elements/navbutton.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {toggleTheme} from "../hooks/ontheme";


interface NavButtonProps {
    children: string;
    icon: IconDefinition;
    href: string;
}

interface NavButtonHomePageProps {
    href: string;
}

interface NavButtonDarkModeProps {
    icon: IconDefinition;
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
            <img className={`${styles.logo} ${styles.iconpadding}`} src="favicon.svg" alt="Homepage Icon"/>
        </a>
    )
}

export function NavButtonDarkMode(props: NavButtonDarkModeProps) : JSX.Element {
    return (
        <button onClick={toggleTheme} className={`${styles.buttontext} ${styles.specialbutton} ${styles.darkmode}`}>
            <FontAwesomeIcon className={`${styles.buttonicon} ${styles.iconpadding}`} icon={props.icon}/>
        </button>
    )
}