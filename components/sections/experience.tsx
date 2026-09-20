import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./background-sections.module.css";

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.tintedSection}`} aria-label="Professional experience">
      <div className="container">
        <Reveal>
          <SectionHeading number="02" eyebrow="Professional experience" title="A people-first perspective." description="Real-world experience in information management, data quality, and cross-functional collaboration." />
        </Reveal>
        <div className={styles.experienceList}>
          {experiences.map((experience) => (
            <Reveal key={experience.organization}>
              <article className={styles.experienceRow}>
                <div className={styles.experienceDate}>
                  <span className={styles.timelineDot} aria-hidden="true" />
                  <p>{experience.startDate}<br />— {experience.endDate}</p>
                  <span className={styles.location}><MapPin size={13} aria-hidden="true" />{experience.location}</span>
                </div>
                <div className={`glass-card ${styles.experienceCard}`}>
                  <div className={styles.experienceTop}>
                    <div className={styles.organizationIcon} aria-hidden="true"><Building2 size={24} /></div>
                    <div>
                      <p className={styles.cardEyebrow}>NRC</p>
                      <h3>{experience.organization}</h3>
                    </div>
                    <span className={styles.currentPill}>Current</span>
                  </div>
                  <p className={styles.context}>{experience.context}</p>
                  <ul className={styles.responsibilities}>
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}><ArrowUpRight size={16} aria-hidden="true" /><span>{responsibility}</span></li>
                    ))}
                  </ul>
                  <ul className={styles.tags} aria-label="Transferable skills">
                    {experience.skills.map((skill) => <li key={skill} className="tag">{skill}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
