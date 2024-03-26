"use client"
import { useForm } from "react-hook-form"
import {motion} from "framer-motion"
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("name")) // watch input value by passing the name of it
    
    return ( 
    <>
    <div className=" flex relative flex-col text-center md:text-left lg:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center ">
        <div className="my-10 lg:my-0">
        <motion.h3 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5}}
            
            className="bg-clip-text text-transparent bg-img text-2xl md:text-5xl md:text-left text-center justify-center tracking-[20px] py-10"> Contact
        </motion.h3>
        <div className="flex flex-col space-y-10">
            {/* <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.
                <span className="decoration-orange-400 underline">Let's Talk</span>
            </h4> */}
            <div className='space-y-10 px-2 md-px-0'>
                <div className="flex items-center space-x-5">
                    <PhoneIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-lg md:text-2xl">08103005115</p>
                </div>
                <div className="flex items-center space-x-5">
                    <EnvelopeIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-lg md:text-2xl">akandeozavize@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5">
                    <MapPinIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-lg md:text-2xl">Ibadan, Nigeria</p>
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
    </> 
    );
}
 
export default Contact;