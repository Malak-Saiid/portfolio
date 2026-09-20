import { ArrowDown, ArrowRight, ArrowUpRight, Atom, Braces, Check, CodeXml, Database, Download, Mail, MapPin, Server, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/social-icons";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedRole } from "@/components/ui/animated-role";
import { site } from "@/data/site";
import styles from "./hero.module.css";

function DeveloperVisual() {
  return (
    <div className={styles.visual} aria-label="Developer workspace illustration showing Malak's React, Node.js and MongoDB stack" role="img">
      <div className={styles.visualGrid} aria-hidden="true" />
      <div className={`${styles.floatingBadge} ${styles.reactBadge}`} aria-hidden="true"><Atom size={19} /><span>React.js</span></div>
      <div className={styles.editor} aria-hidden="true">
        <div className={styles.editorBar}><span className={styles.windowDots}><i /><i /><i /></span><span>developer.ts</span><CodeXml size={13} /></div>
        <div className={styles.editorTab}><Braces size={13} /><span>developer.ts</span><span className={styles.tabDot} /></div>
        <div className={styles.codeBody}>
          <div><span className={styles.lineNumber}>01</span><code><span className={styles.syntaxComment}>{"// A little about me"}</span></code></div>
          <div><span className={styles.lineNumber}>02</span><code><span className={styles.syntaxPurple}>const</span> developer <span className={styles.syntaxPurple}>=</span> {"{"}</code></div>
          <div><span className={styles.lineNumber}>03</span><code>{"  "}name: <span className={styles.syntaxString}>{'"Malak Saiid"'}</span>,</code></div>
          <div><span className={styles.lineNumber}>04</span><code>{"  "}role: <span className={styles.syntaxString}>{'"Software Engineer"'}</span>,</code></div>
          <div><span className={styles.lineNumber}>05</span><code>{"  "}stack: [</code></div>
          <div><span className={styles.lineNumber}>06</span><code>{"    "}<span className={styles.syntaxString}>{'"React", "Node.js", "MongoDB"'}</span></code></div>
          <div><span className={styles.lineNumber}>07</span><code>{"  "}],</code></div>
          <div><span className={styles.lineNumber}>08</span><code>{"  "}passion: <span className={styles.syntaxString}>{'"Building with purpose"'}</span></code></div>
          <div><span className={styles.lineNumber}>09</span><code>{"};"}</code></div>
          <div><span className={styles.lineNumber}>10</span><code>&nbsp;</code></div>
          <div><span className={styles.lineNumber}>11</span><code><span className={styles.syntaxBlue}>build</span>(developer)<span className={styles.syntaxPurple}>;</span><span className={styles.cursor} /></code></div>
        </div>
        <div className={styles.editorStatus}><span><span className={styles.statusDot} />MERN stack</span><span>UTF-8<span className={styles.statusDivider}>|</span>TypeScript</span></div>
      </div>
      <div className={styles.terminal} aria-hidden="true"><div className={styles.terminalTitle}><Terminal size={13} />Terminal<span>zsh</span></div><div className={styles.terminalLine}><span>❯</span> npm run build</div><div className={styles.terminalSuccess}><Check size={13} /> Ideas → interfaces → impact<span className={styles.terminalCaret}>_</span></div></div>
      <div className={`${styles.floatingBadge} ${styles.apiBadge}`} aria-hidden="true"><span className={styles.apiIcon}><Server size={16} /></span><div><strong>Full-stack mindset</strong><small>From interface to API.</small></div></div>
      <div className={`${styles.floatingBadge} ${styles.databaseBadge}`} aria-hidden="true"><Database size={17} /><span>MongoDB</span></div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useSpring(x, { stiffness: 35, damping: 22 });
  const glowY = useSpring(y, { stiffness: 35, damping: 22 });
  return (
    <section id="home" className={styles.hero} onPointerMove={(event) => {
      if (event.pointerType !== "mouse" || reduced) return;
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left - rect.width / 2) * .075);
      y.set((event.clientY - rect.top - rect.height / 2) * .075);
    }} onPointerLeave={() => { x.set(0); y.set(0); }}>
      <motion.div className={styles.purpleGlow} style={{ x: glowX, y: glowY }} aria-hidden="true" />
      <div className={styles.blueGlow} aria-hidden="true" />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroGrid}>
          <Reveal className={styles.copy}>
            <div className={styles.available}><span />Open to opportunities<ArrowUpRight size={12} aria-hidden="true" /></div>
            <p className={styles.hello}>Hello, I&apos;m</p>
            <h1>Malak <span className="gradient-text">Saiid<span className={styles.nameDot}>.</span></span></h1>
            <p className={styles.role}><span className={styles.roleSlash}>&lt;</span><AnimatedRole /><span className={styles.roleSlash}>/&gt;</span></p>
            <p className={styles.intro}>I turn ideas into <strong>thoughtful interfaces</strong><br className={styles.desktopBreak} /> and complete, scalable web applications.</p>
            <p className={styles.description}>Computer Science graduate and Software Engineering Master&apos;s student building with React, Node.js, Express, MongoDB, REST APIs, authentication, and cloud technologies.</p>
            <div className={styles.location}><MapPin size={14} aria-hidden="true" />{site.location}<span className={styles.locationDash} /><span>Built with purpose.</span></div>
            <div className={styles.heroActions}><a className="button button-primary" href="#projects">View My Work<ArrowRight aria-hidden="true" /></a><a className="button button-secondary" href="#contact">Contact Me<Mail aria-hidden="true" /></a></div>
            <div className={styles.heroSocials}>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Malak's GitHub (opens in a new tab)"><Github size={18} /></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Malak's LinkedIn (opens in a new tab)"><Linkedin size={18} /></a>
              <a href={`mailto:${site.email}`} aria-label="Email Malak"><Mail size={18} /></a>
              <span className={styles.socialDivider} />
              <a className={styles.textDownload} href={site.cvPath} download="Malak-Saiid-CV.pdf"><Download size={14} />Download CV</a>
            </div>
          </Reveal>
          <Reveal className={styles.visualColumn} delay={.12}><DeveloperVisual /></Reveal>
        </div>
        <div className={styles.heroBottom}><a href="#about"><span className={styles.scrollIcon}><ArrowDown size={13} /></span>Scroll to explore</a><span className={styles.bottomNote}>THOUGHTFUL CODE. MEANINGFUL EXPERIENCES.</span></div>
      </div>
      <div className={styles.stackStrip}><div className={`container ${styles.stackInner}`}><span className={styles.stackLabel}>MY CORE STACK</span><span><Atom />React</span><span><Server />Node.js</span><span><Braces />Express</span><span><Database />MongoDB</span><span><CodeXml />REST APIs</span></div></div>
    </section>
  );
}
