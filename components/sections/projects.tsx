import { ArrowUpRight, Check, ChevronDown, Code2, ExternalLink, Sparkles } from "lucide-react";
import { Github } from "@/components/ui/social-icons";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectPreview } from "@/components/ui/project-preview";
import styles from "./projects.module.css";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className={styles.links}>
      {project.liveUrl ? (
        <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={15} /> Live Demo <ArrowUpRight size={14} /><span className="sr-only"> for {project.name} (opens in a new tab)</span>
        </a>
      ) : (
        <span className={styles.unavailable} aria-label={`${project.name} live demo is not yet available`}><ExternalLink size={14} />Demo unavailable</span>
      )}
      {project.githubUrl ? (
        <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={15} /> GitHub <span className="sr-only">repository for {project.name} (opens in a new tab)</span>
        </a>
      ) : (
        <span className={styles.unavailable} aria-label={`${project.name} GitHub repository link is not yet available`}><Github size={14} />Repository unavailable</span>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className={project.featured ? styles.featuredWrap : styles.cardWrap}>
      <article className={`glass-card ${styles.card} ${project.featured ? styles.featuredCard : ""}`} aria-labelledby={`${project.id}-title`}>
        <div className={styles.previewContainer}><ProjectPreview project={project} /></div>
        <div className={styles.content}>
          <div className={styles.meta}>
            {project.featured ? <span className={styles.featuredBadge}><Sparkles size={12} />Featured Project</span> : <span className={styles.projectNumber}>0{index + 1} / FULL STACK</span>}
            <span className={styles.period}>{project.period}</span>
          </div>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className={styles.category}>{project.category}</p>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((feature) => <li key={feature}><Check size={14} aria-hidden="true" /><span>{feature}</span></li>)}
          </ul>
          <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => <li className="tag" key={technology}>{technology}</li>)}
          </ul>
          <details className={styles.details}>
            <summary><span><Code2 size={14} />Explore functionality</span><ChevronDown size={15} /></summary>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </details>
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section className={`section ${styles.section}`} id="projects" aria-label="Projects">
      <div className="container">
        <SectionHeading number="03" eyebrow="Selected work" title="Ideas into working applications." description="End-to-end projects that bring together thoughtful interfaces, secure APIs, and connected data." />
        <div className={styles.grid}>
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
