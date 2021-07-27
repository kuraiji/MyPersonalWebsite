import {useEffect, useState} from "react";



interface ScrollProps{
    initialDirection: boolean;
    thresholdPixels: number;
}


const useScrollDirection = ({initialDirection, thresholdPixels} : ScrollProps) => {
    const [scrollDir, setScrollDir] = useState(0);

    useEffect( () => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            setScrollDir(scrollY > lastScrollY ? -1 : 1);
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [initialDirection, thresholdPixels])

    return scrollDir;
}


export default useScrollDirection;