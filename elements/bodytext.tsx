import styles from "../styles/elements/bodytext.module.scss"

interface BodyTextProps {
    children?: string;
    className?: string;
}

export default function BodyText(props: BodyTextProps) : JSX.Element {
    return (
        <p className={`${props.className} ${styles.text}`}>{props.children}</p>
    );
}