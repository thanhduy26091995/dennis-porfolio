import Section from "@/components/ui/Section";
import Hero from "@/components/sections/Hero";
import Hobby from "@/components/sections/Hobby";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Section id="about">
        <Hero />
        <Hobby />
      </Section>
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
