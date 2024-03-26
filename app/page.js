import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skill";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className=" ">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </main>
  );
}
