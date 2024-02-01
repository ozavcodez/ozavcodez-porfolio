"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Link from "next/link";
import { SocialIcon } from 'react-social-icons'


const Projects = () => {
    return ( 
        <>
            <section className=" w-[90] md:w-[80%] mx-auto mt-20 md:mt-40 ">
                <div>
                    <motion.h4 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration: 1.5}}
                        
                        className="bg-clip-text text-transparent bg-img text-2xl md:text-5xl md:text-left text-center justify-center  uppercase tracking-[20px] ">
                        Projects
                    </motion.h4>
                </div>
                <div className="space-y-20 mt-10">
                    <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center " >
                        <Image
                            className=" bg-orange-400 p-5"
                            src="/img/gpon-edu.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">featured project</h4>
                                <h2 className="title text-2xl py-5">E-Learning Portal</h2>
                                <div className="w-full  right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This is an e-learning platform. Users have a several option of courses they can explore. Once a user logs in, he gets access to the course he registered for. The user learning phase is tracked and once he is done with a course, he gets a certificate.
                                    </p>
                                    <p>
                                        The key functionalities are to autheticate user, see list list of courses registered for, and issue certificate with a unique id to user
                                    </p>
                                    <div className="pt-5 flex gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">laravel</button>
                                        <button className="skill-btn">javascript</button>


                                    </div>
                                    <div className="pt-5 flex gap-5 cursor-pointer items-center">
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
                    </div>
                    <div className="relative flex flex-col-reverse md:flex-row gap-10 justify-center items-center" >
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">featured project</h4>
                                <h2 className="title text-2xl py-5">Organization's website</h2>
                                <div className="w-full  right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This is an Organization website. It gives the Organizationan online presence. Presenting all what the oganization can do. This project enables a user friendly experinece for those interested in the Organization
                                    </p>
                                    <p>
                                        Users can easily get to know the current state of the organization, Users can comment on the blogpost and register for the organization newsletter
                                    </p>
                                    <div className="pt-5 flex gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">laravel</button>
                                        <button className="skill-btn">javascript</button>


                                    </div>
                                    <div className="pt-5 flex gap-5 cursor-pointer items-center">
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
                            src="/img/gpon-web.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        
                    </div>
                    <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center " >
                        <Image
                            className=" bg-orange-400 p-5"
                            src="/img/get-linked.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-400">featured project</h4>
                                <h2 className="title text-2xl py-5">Hackathon Project</h2>
                                <div className="w-full  right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        An hackathon project designed for users to who want to peartake in the next hackathon. It a user friendly website ofr registering users interested in the next hackathond and passing information about the challenge
                                    </p>
                                    <p>
                                        The key functionalities are to register users, and to give more information about the challenge 
                                    </p>
                                    <div className="pt-5 flex gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">React</button>
                                        <button className="skill-btn">Axios</button>
                                        <button className="skill-btn">restapi</button>
                                        

                                    </div>
                                    <div className="pt-5 flex gap-5 cursor-pointer items-center">
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
                    </div>
                    <div className="relative flex flex-col-reverse md:flex-row gap-10 justify-center items-center" >
                        <div className=" ">
                            <div className="bg-[#1A0B2E] p-2 md:p-10 max-w-[600px]">
                                <h4 className="text-lg text-orange-500">featured project</h4>
                                <h2 className="title text-2xl py-5">Portfolio Website</h2>
                                <div className="w-full  right-10 text-[#CCD6F6]  rounded-2xl ">
                                    <p>
                                        This presents some of te project I have worked on. Users can see my projects, know more about me and contact me.
                                    </p>
                                    <p>
                                        this project features a summary of my work and and a good user exprience as we they reach out to me
                                    </p>
                                    <div className="pt-5 flex flex-wrap gap-3 cursor-progress">
                                        <button className="skill-btn">tailwind css</button>
                                        <button className="skill-btn">React</button>
                                        <button className="skill-btn">Next Js</button>
                                        {/* <button className="skill-btn">restapi</button> */}
                                        

                                    </div>
                                    <div className="pt-5 flex gap-5 cursor-pointer items-center">
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
                            src="/img/portfolio.jpg"
                            width={400}
                            height={430}
                            alt=""
                        />
                        
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Projects;