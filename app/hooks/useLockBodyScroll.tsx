import { useLayoutEffect } from "react";

export default function useLockBodyScroll(active: boolean) {
    useLayoutEffect((): any => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [active]);
}
