import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skill";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/Contact";
import ThemeSwitch from "./components/theme-switch";
import About from "./components/about";
import SectionDivider from "./components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center  ">
      {/* <Navbar/> */}
      <Hero/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
     {/* <ThemeSwitch/> */}
    </main>
  );
}
