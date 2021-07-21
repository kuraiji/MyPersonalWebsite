import styles from "../styles/elements/navbutton.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

interface NavButtonProps {
    children: string;
    icon: IconDefinition
}

export default function NavButton(props: NavButtonProps) : JSX.Element {
    return (
        <a className={styles.buttontext} href="#0">
            <FontAwesomeIcon className={styles.buttonicon} icon={props.icon}/>
            {props.children}
        </a>
    );
}