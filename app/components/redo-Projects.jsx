"use client"
import React, {useRef} from "react";
import Image from "next/image";
import {useScroll, motion, useTransform} from "framer-motion";
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Link from "next/link";
import { SocialIcon } from 'react-social-icons'
import SectionHeading from "./section-heading";


const ProjectsToWorkOn = () => {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["0 1", "1.33 1"],
    });
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["0 0", "1 1"], // Adjust the offset as needed
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["0 0", "1 1"], // Adjust the offset as needed
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: ref3,
        offset: ["0 0", "1 1"], // Adjust the offset as needed
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    const scaleProgress1 = useTransform(scrollYProgress1, [0, 1], [0.8, 1]);
    const opacityProgress1 = useTransform(scrollYProgress1, [0, 1], [0.6, 1 ]);

    const scaleProgress2 = useTransform(scrollYProgress2, [0, 1], [0.8, 1]);
    const opacityProgress2 = useTransform(scrollYProgress2, [0, 1], [0.6, 1]);
    const scaleProgress3= useTransform(scrollYProgress3, [0, 1], [0.8, 1]);
    const opacityProgress3 = useTransform(scrollYProgress3, [0, 1], [0.6, 1]);

    return ( 
        
        <section id="projects" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div 
                
               
            >
                <div className="space-y-2">
                    <motion.div 
                        ref={ref} 
                        style={{
                            scale:scaleProgress,
                            opacity: opacityProgress
                        }}
                        className="  flex flex-col md:flex-row gap-10 justify-center items-center " >
                        <Image
                            className=" bg-orange-400 p-5"
                            src="/gpon-edu.jpg"
                            width={400}
                            height={430}
                            alt="Project I have worked on"
                        />
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">featured project</h4>
                                <h2 className="title text-2xl py-5">E-Learning Portal</h2>
                                <div className="w-full space-y-5 right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This is an e-learning platform. Users have several options of courses they can explore. Once a user logs in, he gets access to the course he registered for. The user learning phase is tracked and once he is done with a course, he gets a certificate.
                                    </p>
                                    <p>
                                        The key functionalities are to autheticate user, see list  of courses registered for, and issue certificate with a unique id to user
                                    </p>
                                    <div className=" flex flex-wrap gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">laravel</button>
                                        <button className="skill-btn">javascript</button>


                                    </div>
                                    <div className=" flex gap-5 cursor-pointer items-center">
                                        <Link href="https://goalprimeedu.org/">
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#CCD6F6]"/>
                                        </Link>
                                        <SocialIcon
                                            url="https://github.com/ozavcodez"
                                            bgColor='transparent'
                                            fgColor='#CCD6F6'
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={ref1} 
                        style={{
                            scale:scaleProgress1,
                            opacity: opacityProgress1
                        }}
                        className="  flex flex-col-reverse md:flex-row gap-10 justify-center items-center" >
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">featured project</h4>
                                <h2 className="title text-2xl py-5">Organization's website</h2>
                                <div className="w-full space-y-5 right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This is an Organization website. It gives the Organizationan online presence. Presenting all what the oganization can do. This project enables a user friendly experinece for those interested in the Organization
                                    </p>
                                    <p>
                                        Users can easily get to know the current state of the organization, Users can comment on the blogpost and register for the organization newsletter
                                    </p>
                                    <div className=" flex flex-wrap gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">laravel</button>
                                        <button className="skill-btn">javascript</button>


                                    </div>
                                    <div className=" flex gap-5 cursor-pointer items-center">
                                        <Link href="https://goalprime.org/">
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#CCD6F6]"/>
                                        </Link>
                                        <SocialIcon
                                            url="https://github.com/ozavcodez"
                                            bgColor='transparent'
                                            fgColor='#CCD6F6'
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <Image
                            className="bg-orange-400 p-5 "
                            src="/gpon-web.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        
                    </motion.div>
                    <motion.div 
                        ref={ref2} 
                        style={{
                            scale:scaleProgress2,
                            opacity: opacityProgress2
                        }}
                        className=" flex flex-col md:flex-row gap-10 justify-center items-center " >
                        <Image
                            className=" bg-orange-400 p-5"
                            src="/get-linked.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">personal project</h4>
                                <h2 className="title text-2xl py-5">Hackathon Project</h2>
                                <div className="w-full space-y-5 right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        An hackathon project designed for users who want to peartake in the next hackathon. It a user friendly website for registering users interested in the next hackathon and passing information about the challenge
                                    </p>
                                    <p>
                                        The key functionalities are to register users, and to give more information about the challenge 
                                    </p>
                                    <div className=" flex flex-wrap gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">React</button>
                                        <button className="skill-btn">Axios</button>
                                        <button className="skill-btn">restapi</button>
                                        

                                    </div>
                                    <div className=" flex gap-5 cursor-pointer items-center">
                                        <Link href="https://get-linked-one.vercel.app/">
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#CCD6F6]"/>
                                        </Link>
                                        <SocialIcon
                                            url="https://github.com/ozavcodez/get-linked "
                                            bgColor='transparent'
                                            fgColor='#CCD6F6'
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </motion.div>
                    <motion.div 
                        ref={ref3} 
                        style={{
                            scale:scaleProgress3,
                            opacity: opacityProgress3
                        }}
                        className=" flex flex-col-reverse md:flex-row gap-10 justify-center items-center" >
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-500">personal project</h4>
                                <h2 className="title text-2xl py-5">Portfolio Website</h2>
                                <div className="w-full space-y-5 right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This presents some of the projects I have worked on. Users can see my projects, know more about me and contact me.
                                    </p>
                                    <p>
                                        This project features a summary of my work and and a good user exprience as they reach out to me
                                    </p>
                                    <div className=" flex flex-wrap gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">React</button>
                                        <button className="skill-btn">Next Js</button>
                                        {/* <button className="skill-btn">restapi</button> */}
                                        

                                    </div>
                                    <div className=" flex gap-5 cursor-pointer items-center">
                                        <Link href="https://ozavcodez-porfolio.vercel.app/">
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#CCD6F6]"/>
                                        </Link>
                                        <SocialIcon
                                            url="https://github.com/ozavcodez "
                                            bgColor='transparent'
                                            fgColor='#CCD6F6'
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <Image
                            className=" bg-orange-400 p-5 "
                            src="/portfolio.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        
                    </motion.div>
                </div>
                
            </div>
        </section>
       
     );
}
 
export default ProjectsToWorkOn;