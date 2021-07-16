import styles from "../styles/elements/subheader.module.scss"

interface SubheaderProps {
    children?: string;
    className?: string;
}

export default function Subheader(props: SubheaderProps) : JSX.Element {
    return (
    <h2 className={`${props.className} ${styles.subheader}`}>{props.children}</h2>
    )
}