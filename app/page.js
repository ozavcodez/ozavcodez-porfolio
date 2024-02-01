import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-screen bg-[#11071F] text-graywhite snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden">
      <Navbar/>
      <section className="">
        <Hero/>
      </section>
      <section className="">
        <Skills/>
      </section>
      <section className="">
      <Projects/>
      </section>
      <section className="">
      <Contact/>
      </section>
      
    </main>
  );
}
