import {GlitchedListItem} from "../elements/listitem";
import styles from "../styles/components/list.module.scss"

interface ListProps {
    children?: string;
    className?: string;
    items: Array<string>;
}

export default function List(props: ListProps) : JSX.Element {
    return (
        <div className={styles.list_container}>
            <h3 className={`${props.className} ${styles.list_header}`}>{props.children}</h3>
            <ul className={styles.list}>
                {props.items.map(item => <GlitchedListItem className={`${styles.list_items}`}>{item}</GlitchedListItem>)}
            </ul>
        </div>
    );
}