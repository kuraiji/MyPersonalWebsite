import styles from "../styles/elements/navbutton.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

interface NavButtonProps {
    children: string;
    icon: IconDefinition;
    href: string;
}

export default function NavButton(props: NavButtonProps) : JSX.Element {
    return (
        <a className={styles.buttontext} href={props.href}>
            <FontAwesomeIcon className={styles.buttonicon} icon={props.icon}/>
            <p>{props.children}</p>
        </a>
    );
}