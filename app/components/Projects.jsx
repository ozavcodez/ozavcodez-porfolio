"use client";
import React, { useState } from "react";
import { projectsData, projectCategories } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import ProjectModal from "./ProjectModal";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Projects = () => {
    const {ref} = useSectionInView("Projects");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter projects based on active category
    const filteredProjects = activeCategory === "All" 
        ? projectsData 
        : projectsData.filter(project => project.category === activeCategory);

    // Function to open modal with selected project
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return ( 
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {projectCategories.map((category, index) => (
                    <motion.button
                        key={category}
                        className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                            activeCategory === category
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => setActiveCategory(category)}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>
            
            {/* Projects Grid */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-10 max-w-[45rem]">
                    {filteredProjects.slice(0, 3).map((project, index) =>(
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Project {...project} onOpenModal={() => openModal(project)} />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* View All Projects Button */}
            <div className="text-center mt-10">
                <a
                    href="/projects"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                    View All Projects
                </a>
            </div>

            {/* Project Modal */}
            <ProjectModal 
                project={selectedProject} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </section>
    );
}

export default Projects;