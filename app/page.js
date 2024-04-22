import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skill";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
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
    </main>
  );
}
