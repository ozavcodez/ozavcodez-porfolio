"use client"
import { useForm } from "react-hook-form"
import {motion} from "framer-motion"
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";


const Contact = () => {
    const {ref} = useSectionInView("Contact");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("name")) // watch input value by passing the name of it
    
    return ( 
        <motion.section 
            ref={ref}
            id="contact" 
            className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:1
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <div className=" flex relative flex-col text-center md:text-left lg:flex-row max-w-7xl  gap-5 justify-evenly mx-auto items-center ">
                
                <div className="my-10 lg:my-0">
                    <div className="flex flex-col space-y-10">

                        <div className='space-y-10 px-2 md-px-0'>
                            <div className="flex items-center space-x-5">
                                <PhoneIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                                <p className="text-lg ">08103005115</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <EnvelopeIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                                <p className="text-lg ">akandeozavize@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <MapPinIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                                <p className="text-lg ">Nigeria</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto my-5 md:my-0'>
                        <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
                            <input className='contactInput' placeholder='name' type="text" {...register("name")} />
                            <input className='contactInput'placeholder='email' type="email" {...register("email")}  />
                        </div>
                        <input className='contactInput'placeholder='subject' type="text"  {...register("subject")} />
                        <textarea className='contactInput' placeholder='message' {...register("messsage")}  />
                        <button className='py-5 px-10 rounded-md text-black font-bold text-lg bg-orange-400'>Submit</button>
                    </form>
            </div>
        </motion.section> 
    );
}
 
export default Contact;