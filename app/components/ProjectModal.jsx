"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl dark:bg-gray-800"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors z-10"
              onClick={onClose}
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="p-6 sm:p-8">
              {project.imageUrl && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                  {project.category}
                </span>
              </div>

              <p className="mb-8 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.projectUrl && project.projectUrl !== "#" && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;