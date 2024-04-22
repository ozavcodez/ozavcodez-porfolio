"use client"
import React, {useRef} from "react";
// import { projectsData } from "@/lib/data";
import Image from "next/image";
import {useScroll, motion, useTransform} from "framer-motion";



// const ProjectProps = (typeof projectsData)[number]
const Project = ({
    title, 
    description, 
    tags, 
    imageUrl
}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    return (
        <motion.div className="group mb-3 sm mb-8.last:mb-0"
        ref={ref} 
            style={{
                scale:scaleProgress,
                opacity: opacityProgress
            }}
        >
            <section 
                
                className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 rounded-lg sm:group-even:pl-8 transition dark:bg-white/10 dark:text-white dark:hover:bg-white/20" >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col sm:group-even:ml-[18rem] ">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li 
                                key={index}
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            >
                                {tag}
                                <span></span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <Image 
                    src={imageUrl} 
                    alt="Project I have worked on" 
                    quality={95} 
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[28.25rem] rounded-t-lg shadow-2xl 
                    transition
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
                    
                />
            </section>
        </motion.div>
        
    )
}
 
export default Project;