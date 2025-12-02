"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export function useSectionInView(sectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
        rootMargin: "-100px 0px -200px 0px" // Add margin to trigger section change earlier
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    
    return {
        ref
    };
}