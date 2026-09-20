import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/social-icons";
import { navigation, site } from "@/data/site";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a className={styles.name} href="#home"><span className={styles.monogram} aria-hidden="true">m<span>.</span></span>{site.name}<span className={styles.nameDot}>.</span></a>
            <p>Junior Software Engineer</p>
            <span className={styles.tagline}>Thoughtful code. Meaningful experiences.</span>
          </div>
          <div className={styles.links}>
            <nav aria-label="Footer navigation" className={styles.navigation}>
              {navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
            </nav>
            <div className={styles.socials}>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={16} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={16} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={`mailto:${site.email}`} aria-label="Email Malak Saiid"><Mail size={16} aria-hidden="true" /><span>Email</span><ArrowUpRight size={12} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed &amp; built with <span>React</span><span className={styles.divider} aria-hidden="true">/</span>Made in Lebanon</p>
        </div>
      </div>
    </footer>
  );
}
