"use client"
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const hero = () => {
    const [text] = useTypewriter({
        words:["A Frontend Developer", "A Software Developer"],
        loop:true,
        delaySpeed: 2000

    });
    return ( 
        <section className=" md:flex w-[90%] mx-auto justify-between gap-10 mt-20 ">
            <div className=" relative">
                <div className="leading-loose space-y-5 ">
                    <h1 >Hi I'm</h1>
                    <h1 className="text-2xl lg:text-6xl font-bold ">Akande Ozavize</h1>
                    <h1 className="bg-clip-text text-transparent bg-img text-4xl lg:text-7xl ">
                        <Cursor cursorColor="orange-500"/>
                        <span>{text}</span>
                    </h1>
                    <p className="text-justify max-w-prose py-5"> 
                
                    A software developer functioning in the industry for 2years+. I am passionate about learning new technologies and solving problems. I have a Good knowledge of software design, architecture, and principles, writing efficient and optimized programs in Languages such as  Javascript, Vue Js, React, and CSS.
                    </p>
                    <Link href='' className="btn py-3"> Download Resume</Link>
                </div>
            </div>
            <div>
                <div className="bg-radial ">
                    <Image
                        className="  py-10 md:origin-bottom md:-rotate-12 delay-300 transition-transform hover:rotate-12 ease-linear"
                        src="/img/joy-5.jpg"
                        alt=''
                        width={300}
                        height={450}
                    />
                </div>
            </div>

        </section>
     );
}
 
export default hero;