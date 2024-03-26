"use client"
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import JoyImg from "@/public/joy-5.jpg"

const hero = () => {
    const [text] = useTypewriter({
        words:["A Frontend Developer", "A Software Developer"],
        loop:true,
        delaySpeed: 2000

    });
    return ( 
        <motion.section 
            className=" md:flex w-[90%] mx-auto justify-between gap-10 mt-20 "
            initial={{opacity:0, y:100}} 
            animate={{opacity:1, y:0}}   
        >
            <div className=" relative">
                <div className="leading-loose space-y-5 ">
                    <h1 >Hi I'm</h1>
                    <h1 className="text-2xl lg:text-6xl font-bold ">Akande Ozavize</h1>
                    <h1 className="bg-clip-text text-transparent bg-img text-4xl lg:text-7xl ">
                        <Cursor cursorColor="orange-500"/>
                        <span>{text}</span>
                    </h1>
                    <p className="text-justify max-w-prose py-5"> 
                
                    A software developer functioning in the industry for 2years. I am passionate about learning new technologies and solving problems. I have a Good knowledge of software design, architecture, and principles, writing efficient and optimized programs in Languages such as  Javascript, Vue Js, React, and CSS.
                    </p>
                    <a href='/ozav-cv.pdf' className="btn py-3 my-3" download={true}> Download Resume</a>
                </div>
            </div>
            <div>
                <div className="md:bg-radial ">
                    <Image
                        className="  py-10  h-[38rem] w-[25rem] hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2 transition object-contain"
                        src={JoyImg}
                        alt='Ozavize'

                        
                    />
                </div>
            </div>

        </motion.section>
     );
}
 
export default hero;