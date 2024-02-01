"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"
const Skills = () => {
    
    return ( 
        <>
        <section className="min-h-screen relative flex  flex-col text-center md:text-left justify-center w-[90%] mx-auto mt-10">
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5}}
                
            >
                <h4 className="bg-clip-text text-transparent bg-img text-2xl md:text-5xl md:text-left text-center justify-center  uppercase tracking-[20px]  ">Skills</h4>
                <p className=" justify-center   tracking-[3px] uppercase text-xl md:text-2xl "> Here is a list of my skill </p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-center mt-20 mx-auto w-[70%] ">
                <motion.div
                    className=" group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/html.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/css.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/tailwind.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/javascript.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/vue.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/reactjs.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/sass.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/mongoDB.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                <motion.div
                    className="group relative cursor-pointer"
                    initial={{x:-100, opacity:0}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                >
                    <Image
                    src="/img/nodeJS.png"
                    width={100}
                    height={100}
                    alt=""
                    className="rounded w-40 h-40 border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    />
                </motion.div>
                
            </div>
            </motion.div>
            
        </section>
        </>
     );
}
 
export default Skills;