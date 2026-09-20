import { Award, BookOpen, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./background-sections.module.css";

export function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <Reveal>
          <SectionHeading number="05" eyebrow="Education" title="Always building on the foundation." description="From a Computer Science degree to advanced study in Software Engineering." />
        </Reveal>
        <div className={styles.educationTimeline}>
          {education.map((entry, index) => (
            <Reveal key={entry.degree} delay={index * 0.08}>
              <article className={`glass-card ${styles.educationCard}`}>
                <span className={styles.educationDot} aria-hidden="true" />
                <div className={styles.educationIcon} aria-hidden="true">
                  {entry.current ? <BookOpen size={24} /> : <GraduationCap size={25} />}
                </div>
                <div className={styles.educationMain}>
                  <p className={styles.cardEyebrow}>{entry.institution}</p>
                  <h3>{entry.degree}</h3>
                  <p className={styles.educationDates}>{entry.startDate} — {entry.endDate}</p>
                </div>
                {entry.current && <span className={styles.currentPill}>In progress</span>}
                {entry.gpa && <span className={styles.gpa}><Award size={17} aria-hidden="true" /> GPA <strong>{entry.gpa}</strong></span>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
