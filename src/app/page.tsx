import { Suspense } from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Hero from "@/components/sections/Hero";
import Hobby from "@/components/sections/Hobby";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

function BlogFallback() {
  return (
    <Section id="blog">
      <SectionTitle number="05" title="Blog" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-40 rounded border border-[var(--border)] animate-pulse"
          />
        ))}
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Section id="about">
        <Hero />
      </Section>
      <Skills />
      <Experience />
      <Projects />
      <Suspense fallback={<BlogFallback />}>
        <Blog />
      </Suspense>
      <Section id="about-more">
        <Hobby />
      </Section>
      <Contact />
    </>
  );
}
