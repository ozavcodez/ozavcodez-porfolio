import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';

const Contact = () => {
    return ( 
    <>
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]"> Contact</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.
                <span className="decoration-orange-400 underline">Let's Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className="flex items-center space-x-5">
                    <PhoneIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-2xl">08103005115</p>
                </div>
                <div className="flex items-center space-x-5">
                    <EnvelopeIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-2xl">akandeozavize@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5">
                    <MapPinIcon className='h-7 w-7 text-orange-500 animate-pulse'/>
                    <p className="text-2xl">Ibadan, Nigeria</p>
                </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className="flex space-x-2">
                    <input className='contactInput' placeholder='name' type="text"  />
                    <input className='contactInput'placeholder='email' type="email"  />
                </div>
                <input className='contactInput'placeholder='subject' type="text"  />
                <textarea className='contactInput' placeholder='message' />
                <button className='py-5 px-10 rounded-md text-black font-bold text-lg bg-orange-400'>Submit</button>
            </form>
        </div>
    </div>
    </> 
    );
}
 
export default Contact;