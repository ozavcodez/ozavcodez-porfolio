"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";


const Skills = () => {
    const {ref} = useSectionInView("Skills");

    const fadeInAnimationVariants ={
        initial:{
            opacity:0,
            y:100,
        },
        animate: (index) => ({
            opacity:1,
            y:0,
            transition:{
               delay:0.05 * index,
            }
        }),
    }
    
    return ( 
        <>
        <section 
            className="mb-28  max-w-[53rem] scroll-mt-28 text-center sm:mb-40" 
            ref={ref}
            id="skills" 
        >
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5}}
                
            >
            <SectionHeading> MY Skills</SectionHeading>
                
                <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 max-w-[40rem] mx-auto">
                {
                    skillsData.map((skill, index) =>(
                        <motion.li 
                          className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow" 
                          key={index}
                          variants={fadeInAnimationVariants}
                          initial= "initial"
                          whileInView="animate"
                          viewport={{
                            once:true,
                          }}
                          custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
            </motion.div>
            
        </section>
        </>
     );
}
 
export default Skills;