import { Braces, Database, GitBranch, Monitor, Network, Server, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { SkillIcon } from "@/types/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./background-sections.module.css";

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  code: Braces,
  network: Network,
  tools: GitBranch,
  people: Users,
};

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.tintedSection}`} aria-label="Technical skills">
      <div className="container">
        <Reveal>
          <SectionHeading number="04" eyebrow="My toolkit" title="The stack behind the solutions." description="A full-stack foundation, supported by practical tools and a collaborative mindset." />
        </Reveal>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <Reveal key={category.id} delay={(index % 3) * 0.06} className={category.id === "soft-skills" ? styles.softSkills : undefined}>
                <article className={`glass-card ${styles.skillCard}`}>
                  <div className={styles.skillIntro}>
                    <span className={styles.skillIcon}><Icon size={21} aria-hidden="true" /></span>
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <ul className={styles.skillTags} aria-label={`${category.title} skills`}>
                    {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
