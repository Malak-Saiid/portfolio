import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
