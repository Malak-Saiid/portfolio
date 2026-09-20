import { Award, Braces, Cpu, Globe2, Network, Router } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Certificate } from "@/types/profile";
import { certificates, languages } from "@/data/certificates";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import styles from "./background-sections.module.css";

const icons: Record<Certificate["icon"], LucideIcon> = {
  ai: Cpu,
  network: Network,
  routing: Router,
  python: Braces,
};

export function Certificates() {
  return (
    <section id="certificates" className={`section ${styles.tintedSection}`} aria-label="Certifications and languages">
      <div className="container">
        <Reveal>
          <SectionHeading number="06" eyebrow="Beyond the classroom" title="Learning doesn’t stop at a degree." description="Training across artificial intelligence, networking, and programming." />
        </Reveal>
        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => {
            const Icon = icons[certificate.icon];
            return (
              <Reveal key={certificate.title} delay={(index % 2) * 0.07}>
                <article className={`glass-card ${styles.certificateCard}`}>
                  <div className={styles.certificateIcon} aria-hidden="true"><Icon size={23} /></div>
                  <div className={styles.certificateInfo}>
                    <p className={styles.cardEyebrow}>{certificate.provider}</p>
                    <h3>{certificate.title}</h3>
                  </div>
                  <Award size={18} className={styles.certificateMark} aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className={styles.languages}>
            <div className={styles.languagesHeading}>
              <Globe2 size={21} aria-hidden="true" />
              <h3>Languages</h3>
            </div>
            <dl className={styles.languageList}>
              {languages.map((language) => (
                <div key={language.name}>
                  <dt>{language.name}</dt>
                  <dd>{language.proficiency}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
