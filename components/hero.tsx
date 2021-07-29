import Image from "next/image";
import styles from "../styles/components/hero.module.scss"
import pic from '../public/images/hero.webp'

interface HeroProps {
    src: string;
    alt: string;
    className?: string;
}

export default function Hero(props: HeroProps) : JSX.Element {
    return (
        <div className={styles.test}>
            <Image src={pic} alt={props.alt}/>
        </div>
    );
}