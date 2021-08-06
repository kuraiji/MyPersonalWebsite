import Image from "next/image";
import styles from "../styles/components/hero.module.scss"

interface HeroProps {
    src: StaticImageData;
    alt: string;
    className?: string;
}

export default function Hero(props: HeroProps) : JSX.Element {
    return (
        <div className={`${props.className} ${styles.hero}`}>
            <Image src={props.src} alt={props.alt}/>
        </div>
    );
}