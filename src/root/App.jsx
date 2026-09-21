import { useEffect } from "react";
import Lenis from "lenis";

import Main from "../container/Main";

export default function App(){

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return(
        <div className="app-container">
            <Main />
        </div>
    );
};