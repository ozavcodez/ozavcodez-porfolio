"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, projectCategories } from "@/lib/data";
import Project from "../components/project";
import ProjectModal from "../components/ProjectModal";
import SectionHeading from "../components/section-heading";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

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
    <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        <SectionHeading>My Projects</SectionHeading>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
          Here's a collection of projects I've worked on. Each project reflects my passion for creating 
          meaningful digital experiences.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category, index) => (
            <button
              key={category}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-[45rem]">
            {filteredProjects.map((project, index) => (
              <div key={index}>
                <Project {...project} onOpenModal={() => openModal(project)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </main>
  );
}