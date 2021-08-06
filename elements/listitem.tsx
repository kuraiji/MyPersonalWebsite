import styles from "../styles/elements/listitem.module.scss"
import gl_styles from "../styles/elements/glitch-effect.module.scss"

interface ListItemProps {
    children?: string;
    className?: string;
}

export default function ListItem(props: ListItemProps) : JSX.Element {
    return (
        <li className={`${props.className} ${styles.item}`}>{props.children}</li>
    );
}

export function GlitchedListItem(props: ListItemProps) : JSX.Element {
    return (
        <li className={`${props.className} ${styles.item} ${gl_styles.glitch}`} key={`${props.children}_li`}>
            <span className={gl_styles.glitch_span} aria-hidden="true">{props.children} key={`${props.children}_span1`}</span>
            {props.children}
            <span className={gl_styles.glitch_span} aria-hidden="true">{props.children} key={`${props.children}_span2`}</span>
        </li>
    );
}