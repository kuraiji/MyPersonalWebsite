import styles from "../styles/components/button.module.scss"

interface ButtonProps {
    href: string;
    children?: string;
    className?: string;
}

export default function Button(props: ButtonProps) : JSX.Element {
    return (
        <a className={`${props.className} ${styles.button}`} href={props.href}>{props.children}</a>
    );
}