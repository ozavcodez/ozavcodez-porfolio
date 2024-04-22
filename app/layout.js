import { inter } from  '@/app/ui/fonts';
import "./globals.css";
import ThemeSwitch from './components/theme-switch';
import ThemeContextProvider from "@/context/theme-context";
import Header from './components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from './components/Footer';



export const metadata = {
  title: "My Portfolio",
  description: "Developed by Akande Ozavize",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 relative text-gray-950 dark:bg-gray-900 dark:text-gray-50  dark:text-opacity-90 `} >
        <div className="absolute -z-10 rounded-full bg-[#fbe2e3] top-[-6rem] blur-[10rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75] right-[11rem] dark:bg-[#946263]"></div>
        <div className="absolute -z-10 rounded-full bg-[#dbd7fb] top-[-1rem] blur-[10rem] h-[31.25rem] w-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer/>
            <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    
    </html>
  );
}
