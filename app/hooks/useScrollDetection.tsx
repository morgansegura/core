import { useEffect, useState } from "react";

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const [distance, setDistance] = useState<number>(0);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";

            if (scrollY === 0) {
                setScrollDirection(null);
                setDistance(0);
            }

            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY || scrollY - lastScrollY)
            ) {
                setScrollDirection(direction);
                setDistance(lastScrollY);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            setDistance(lastScrollY);
        };
        document.body.addEventListener("touchmove", updateScrollDirection);
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            document.body.removeEventListener(
                "touchmove",
                updateScrollDirection
            );
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return { distance, scrollDirection };
}
