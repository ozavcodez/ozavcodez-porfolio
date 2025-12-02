"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const Project = ({
    title, 
    description, 
    tags, 
    imageUrl,
    projectUrl,
    githubUrl,
    category,
    onOpenModal,
}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className="group mb-3 sm:mb-8 last:mb-0 project-card"
            ref={ref} 
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <section 
                className="bg-white max-w-[45rem] border border-black/10 overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:shadow-xl rounded-xl sm:group-even:pl-8 transition-all duration-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-md"
            >
                <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-4 sm:pt-10 sm:max-w-[55%] h-full flex flex-col sm:group-even:ml-[18rem]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                            {category}
                        </span>
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li 
                                key={index}
                                className="bg-blue-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 mt-4">
                        {projectUrl && projectUrl !== "#" && (
                            <Link 
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <span>Live Demo</span>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            </Link>
                        )}
                        {githubUrl && githubUrl !== "#" && (
                            <Link 
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors dark:text-white/80 dark:hover:text-white"
                            >
                                <span>GitHub</span>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            </Link>
                        )}
                        <button
                            onClick={onOpenModal}
                            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors dark:text-white/80 dark:hover:text-white"
                        >
                            <span>View More</span>
                        </button>
                    </div>
                </div>
                
                {/* Desktop Image */}
                <motion.div 
                    className="
                        hidden
                        sm:block
                        absolute
                        top-8
                        -right-40
                        w-[28.25rem]
                        rounded-t-lg
                        shadow-2xl
                        
                        transition-all duration-500
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2
                        
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2

                        group-even:right-[initial]
                        sm:group-even:-left-40
                        "
                    animate={{
                        scale: isHovered ? 1.04 : 1,
                        x: isHovered ? (window.innerWidth > 768 ? -12 : 0) : 0,
                        y: isHovered ? 12 : 0,
                        rotate: isHovered ? -2 : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Image 
                        src={imageUrl} 
                        alt="Project I have worked on" 
                        quality={95} 
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                </motion.div>
                
                {/* Mobile Image */}
                <div className="sm:hidden mt-6 rounded-lg overflow-hidden">
                    <Image 
                        src={imageUrl} 
                        alt="Project I have worked on" 
                        quality={95} 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>
        </motion.div>
    )
}

export default Project;