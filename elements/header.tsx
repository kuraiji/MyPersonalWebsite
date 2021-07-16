import main_styles from "../styles/elements/header.module.scss"

interface HeaderProps {
    children?: string;
    className?: string;
}

export default function Header(props: HeaderProps) : JSX.Element {
    return (
        <h1 className={`${props.className} ${main_styles.header}`}>{props.children}</h1>
    );
}