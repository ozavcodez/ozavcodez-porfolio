"use client";

import React, { useState, createContext,useContext } from "react";
// import {links} from "@/lib/data";

// import type {SectionName} from "@/lib/types"

// // type SectionName = typeof links[number]["name"];

// type ActiveSectionContextProviderProps = {
//     children: React.ReactNode;
// };
// type ActiveSectionContextType = {
//     activeSection:SectionName;
//     setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>;
//     timeOfLastClick:number;
//     setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
// }
export const ActiveSectionContext = createContext(null);

const ActiveSectionContextProvider = ({children}) => {
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
       >{children}</ActiveSectionContext.Provider> 
    );
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context== null){
        throw new Error(
            "useActiveSectionContext must be used within a ActiveContextProvider"
        );
    }
    return context
}
 
export default ActiveSectionContextProvider;