"use client"
import { SocialIcon } from 'react-social-icons'
import Link from "next/link";
import { motion } from "framer-motion"

const Navbar = () => {
    const hover = " transitions font-medium text-graywhite hover:bg-clip-text hover:text-transparent hover:bg-img"
    const Hover =({isActive}) => (isActive ? 'bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkpur via-main to-blues' : hover)
    
    return ( 
        <header className="   sticky top-0 z-20 ">
            <div className=" max-w-7xl mx-auto md:grid grid-cols-10 md:grid-cols-12 justify-between md:justify-center p-2 nav-bar rounded-2xl items-center bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
                <motion.div 
                    className="col-span-5"
                    initial={{
                        opacity:0,
                        x:"-50%",
                        y:-100,
                        // scale:0.5
                    }}
                    animate={{
                        opacity:1,
                        x:"0",
                        y:0,

                        // scale:1 
                    }}
                    transition={{duration:0.5}}
                >
                    <Link href="/">
                        <h1 className="  flex md:justify-center text-white title">Ozav<span class="text-orange-400 ">codez</span></h1>
                    </Link> 
                </motion.div>
                <motion.div 
                    className=' col-span-5 flex gap-4 md:justify-center items-center'
                    initial={{
                        opacity:0,
                        x:500,
                        scale:0.5
                    }}
                    animate={{
                        opacity:1,
                        x:0,
                        scale:1 
                    }}
                    transition={{duration:0.5}}
                >
                    <SocialIcon
                    url="https://www.linkedin.com/in/ozavize-akande"
                    bgColor='transparent'
                    fgColor='gray'
                    />
                    <SocialIcon
                    url="https://github.com/ozavcodez"
                    bgColor='transparent'
                    fgColor='gray'
                    />
                    <SocialIcon
                    url="https://twitter.com/akandeOzavize"
                    bgColor='transparent'
                    fgColor='gray'
                    />
                    <SocialIcon
                    url="https://facebook.com/akandeOzavize"
                    bgColor='transparent'
                    fgColor='gray'
                    />
                    
                    
                </motion.div>
                
            </div>
           
        </header>

     );
}
 
export default Navbar;