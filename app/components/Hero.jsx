"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import JoyImg from "@/public/ozav.png"
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const hero = () => {
    const {ref} = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
    
    return ( 
        <motion.section
        ref={ref} 
        id="home"
        className=" pt-28 sm:pt-36  mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
            initial={{opacity:0, y:100}} 
            animate={{opacity:1, y:0}}   
        >
            <div className="flex items-center justify-center">
                <div className="relative -z-10">
                    <motion.div
                        initial= {{opacity: 0, scale:0}}
                        animate = {{opacity:1, scale:1}}
                        transition ={{
                            type:"tween",
                            duration: 0.2,
                        }}
                    >
                        
                        <Image 
                        src={JoyImg}
                            alt="Ozavize portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="rounded-full h-24 w-24 object-cover shadow-xl border-[0.35rem] border-white "
                        />
                        <motion.span 
                            className="text-4xl absolute bottom-0 right-0"
                            initial={{opacity:0, scale:0}}
                            animate={{opacity:1, scale:1}}
                            transition={{
                                type:"spring",
                                stiffness: 125,
                                delay:0.1,
                                duration:0.7,
                            }}
                        >
                            👋
                        </motion.span>
                    </motion.div>
                </div>
            </div>
            <motion.h1 
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity:0, y:100}} 
                animate={{opacity:1, y:0}}       
            >
                <span className="font-bold">Hello, I'm Ozavize</span> I'm a {" "} 
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">2 years</span> of experience. I enjoy building 
                <span className="italic">sites & apps</span> My focus is{" "}
                <span className="underline">React (Next.js)</span>
            </motion.h1>
            <motion.div 
             className="flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium px-4"
             initial={{opacity:0, y:100}} 
             animate={{opacity:1, y:0}}
             transition={{
                delay:0.1,
             }}   
            >
                <Link href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={()=>
                    {
                     setActiveSection("Contact");
                     setTimeOfLastClick(Date.now())
                    }

                 }
                >
                    contact me here <BsArrowRight  className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>

                <a href="/ozav-cv.pdf" className=" group bg-white  px-7 py-3 flex items-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" download> 
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/> 
                </a>
                <a href="https://www.linkedin.com/in/ozavize-akande" className="bg-white p-4 text-gray-700 flex items-center  gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/ozavcodez" className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center  gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                    <FaGithubSquare />
                </a>
            </motion.div>

        </motion.section>
     );
}
 
export default hero;