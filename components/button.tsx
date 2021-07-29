import Link from "next/link";
import styles from "../styles/components/button.module.scss"

interface ButtonProps {
    href: string;
    children?: string;
    className?: string;
}

export default function Button(props: ButtonProps) : JSX.Element {
    return (
        <Link href={props.href}>
            <a className={`${props.className} ${styles.button}`}>{props.children}</a>
        </Link>
    );
}