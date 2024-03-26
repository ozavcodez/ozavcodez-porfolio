"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { skillsData } from "@/lib/data";

const Skills = () => {
    
    return ( 
        <>
        <section className="min-h-screen relative flex  flex-col text-center md:text-left justify-center w-[90%] lg:w-[80%] mx-auto mt-10">
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5}}
                
            >
                <h4 className="bg-clip-text text-transparent bg-img text-2xl md:text-5xl md:text-left text-center justify-center  uppercase tracking-[20px]  ">Skills</h4>
                <p className=" justify-center   tracking-[3px] uppercase text-xl md:text-2xl "> Here is a list of my skill </p>
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-5 justify-center mt-20 mx-auto lg:w-[70%] ">
                {skillsData.map((skill)=>(
                    <motion.div
                    className=" group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src={skill.src}
                    alt={skill.src}
                    className="rounded-lg h-24 bg-orange-400 border border-gray-500 p-2 object-fit  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                ))}
                
                
            </div>
            </motion.div>
            
        </section>
        </>
     );
}
 
export default Skills;