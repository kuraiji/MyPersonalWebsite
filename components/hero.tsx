import styles from "../styles/components/hero.module.scss"

interface HeroProps {
    src: string;
    alt: string;
    loading?: "lazy" | "eager";
    className?: string;
}

export default function Hero(props: HeroProps) : JSX.Element {
    return (
        <div className={styles.hero_container}>
            <picture>
                <source/>
                <img className={styles.hero_image} src={props.src} alt={props.alt}/>
            </picture>
        </div>
    );
}