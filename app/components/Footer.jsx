const Footer = () => {
    return ( 
        <footer className="mb-10 px-4 text-center text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-8">
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} Ozavize Akande. All rights reserved.
            </small>
            <p className="text-xs max-w-2xl mx-auto">
                <span className="font-semibold">About this website:</span> Built with React & Next.js (App Router & Server Actions), Tailwind CSS, Framer Motion, and deployed on Vercel.
            </p>
        </footer>
     );
}
 
export default Footer;