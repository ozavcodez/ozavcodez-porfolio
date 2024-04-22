"use client";
import React, {useEffect} from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
const Projects = () => {
    const {ref} = useSectionInView("Projects")

    return ( 
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) =>(
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                    
                ))}
            </div>
        </section>
    );
}

export default Projects;

