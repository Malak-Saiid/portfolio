import { ArrowUpRight, Braces, GraduationCap, Layers3 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./background-sections.module.css";

const highlights = [
  { value: "03", label: "Major projects", detail: "Ideas built into applications", icon: ArrowUpRight },
  { value: "Full-stack", label: "Development focus", detail: "From interface to database", icon: Layers3 },
  { value: "MERN", label: "Core stack", detail: "React · Node.js · MongoDB", icon: Braces },
  { value: "Master’s", label: "Currently studying", detail: "Software Engineering", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About Malak">
      <div className="container">
        <Reveal>
          <SectionHeading number="01" eyebrow="A little about me" title="Curiosity meets practical engineering." />
        </Reveal>
        <div className={styles.aboutGrid}>
          <Reveal className={styles.aboutCopy}>
            <p className={styles.aboutLead}>
              I’m a Computer Science graduate building my next chapter in <span>software engineering.</span>
            </p>
            <p>
              Currently pursuing a Master of Software Engineering at Lebanese University,
              I build full-stack web applications with the MERN stack, connecting responsive
              interfaces with REST APIs, authentication, and databases.
            </p>
            <p>
              My work with the Norwegian Refugee Council has shaped how I approach
              information, digital tools, and collaboration: with care, accuracy, and a
              focus on the people who use them.
            </p>
            <p>
              I’m drawn to problem solving, AI, and scalable software—and to teams where
              I can keep learning while contributing to meaningful products.
            </p>
            <a href="#projects" className={styles.textLink}>
              Explore what I’ve built <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
          <div className={styles.highlights}>
            {highlights.map(({ value, label, detail, icon: Icon }, index) => (
              <Reveal key={label} delay={index * 0.06}>
                <div className={`glass-card ${styles.highlight}`}>
                  <Icon size={20} className={styles.highlightIcon} aria-hidden="true" />
                  <p className={styles.highlightValue}>{value}</p>
                  <h3>{label}</h3>
                  <p className={styles.highlightDetail}>{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
