"use client";

import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext(null);

export function ActiveSectionContextProvider({ children }) {
    const [activeSection, setActiveSection] = useState("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    
    if (!context) {
        throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
    }
    
    return context;
}