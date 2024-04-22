"use client"
import React, {useEffect} from "react";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
const About = () => {
    const {ref} = useSectionInView("About")

    return ( 
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity:0, y:100}}
            animate= {{opacity:1, y:0}}
            transition={{delay:0.175}}
            id="about"
        >
            <SectionHeading> About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in {" "}
                <span className="font-medium">English and Literature</span>, I decided to pursue my passion for programming I enrolled in a coding bootcamp and learned {" "}
                <span className="font-medium">full-stack web developmen</span>.{" "}
                <span className="italic"> My favorite part of programming</span> is the feeling of finallly figuring out a solution to a problem. My core stack is {" "}
                <span className="font-medium">Vue, React, Next.js, Node.js, and MongoDB</span>. 
                I am also familiar with TypeScript . I am always looking to learn new technologies. I am currnetly looking for a {" "}
                <span className="font-medium">full-time position</span> as a software developer
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing wih my dog. I also enjoy {" "}
                <span className="font-medium">learning new things</span>. I am currently learning about {" "}
                <span>history and philossophy</span>. I'm also learning how to play the guiter.
            </p>
        </motion.section>
     );
}
 
export default About;