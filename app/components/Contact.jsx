"use client"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
    const { ref } = useSectionInView("Contact");

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
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <div className="flex flex-col lg:flex-row gap-8 md:gap-10 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div 
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-gray-900 dark:text-white">Get in touch</h3>
                        
                        <div className="space-y-5 md:space-y-6">
                            <div className="flex items-start gap-3 md:gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/30">
                                    <PhoneIcon className='h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400">08103005115</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 md:gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/30">
                                    <EnvelopeIcon className='h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">akandeozavize@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 md:gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/30">
                                    <MapPinIcon className='h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Nigeria</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 md:mt-8">
                            <p className="text-gray-600 dark:text-gray-400">
                                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                {/* Contact Form */}
                <motion.div 
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    >
                        <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-gray-900 dark:text-white">Send me a message</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                            
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                            
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                    {...register("subject", { required: true })}
                                />
                                {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                            
                            <div>
                                <textarea 
                                    placeholder="Your Message" 
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                    {...register("message", { required: true })}
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.section> 
    );
}

export default Contact;