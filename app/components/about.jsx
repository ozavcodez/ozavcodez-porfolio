"use client"
import React from "react";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const About = () => {
    const { ref } = useSectionInView("About")

    return ( 
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            
            <div className="text-base md:text-lg text-gray-700 dark:text-white/80">
                <p className="mb-3">
                    After graduating with a degree in {" "}
                    <span className="font-medium">English and Literature</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned {" "}
                    <span className="font-medium">full-stack web development</span>.{" "}
                    <span className="italic">My favorite part of programming</span> is the feeling of finally figuring out a solution to a problem. My core stack is {" "}
                    <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. 
                    I am also familiar with TypeScript and Vue.js. I am always looking to learn new technologies. I am currently looking for a {" "}
                    <span className="font-medium">full-time position</span> as a software developer.
                </p>
                
               
                
                <p>
                    <span className="font-medium">What drives me:</span> I'm passionate about creating efficient, user-friendly applications that solve real-world problems. 
                    I believe in writing clean, maintainable code and continuously improving my skills through practice and learning.
                </p>
            </div>
        </motion.section>
    );
}

export default About;