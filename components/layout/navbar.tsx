import { useEffect, useRef, useState } from "react";
import { ArrowUp, CodeXml, Download, Menu, Moon, Sun, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { navigation, site } from "@/data/site";
import styles from "./navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const position = window.scrollY;
      setScrolled(position > 24);
      let current: string = "home";
      for (const link of navigation) {
        const element = document.getElementById(link.id);
        if (element && element.getBoundingClientRect().top <= 160) current = link.id;
      }
      if (window.innerHeight + position >= document.documentElement.scrollHeight - 20) current = "contact";
      setActive(current);
    }
    function onScroll() { if (!frame) frame = requestAnimationFrame(update); }
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const desktop = window.matchMedia("(min-width: 1200px)");
    function onDesktop(event: MediaQueryListEvent) { if (event.matches) setOpen(false); }
    desktop.addEventListener("change", onDesktop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onDesktop);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "dark" ? "#080B14" : "#F8F7FF");
    try { localStorage.setItem("malak-theme", nextTheme); } catch { /* Theme works for this visit even without persistent storage. */ }
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} onKeyDown={(event) => {
        if (event.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
      }}>
        <motion.div className={styles.progress} style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        <div className={`container ${styles.inner}`}>
          <a className={styles.brand} href="#home" aria-label="Malak Saiid — home" onClick={() => setOpen(false)}>
            <span className={styles.mark}><CodeXml size={21} aria-hidden="true" /></span>
            <span>Malak Saiid<span className={styles.brandDot}>.</span></span>
          </a>
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navigation.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? styles.active : ""} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>)}
          </nav>
          <div className={styles.actions}>
            <button className={`icon-button ${styles.themeToggle}`} aria-label="Toggle color theme" title="Toggle dark / light mode" onClick={toggleTheme}>
              <Sun className={styles.sun} aria-hidden="true" /><Moon className={styles.moon} aria-hidden="true" />
            </button>
            <a href={site.cvPath} download="Malak-Saiid-CV.pdf" className={`button button-primary ${styles.download}`}><Download aria-hidden="true" /><span>Download CV</span></a>
            <button ref={toggleRef} className={`icon-button ${styles.menuToggle}`} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation" hidden={!open}>
          {navigation.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? styles.active : ""} aria-current={active === link.id ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href={site.cvPath} download="Malak-Saiid-CV.pdf" className="button button-primary" onClick={() => setOpen(false)}><Download size={16} aria-hidden="true" />Download CV</a>
        </nav>
      </header>
      <a className={`icon-button ${styles.backToTop} ${scrolled && active !== "home" ? styles.backVisible : ""}`} href="#home" aria-label="Back to top" tabIndex={scrolled && active !== "home" ? 0 : -1}><ArrowUp aria-hidden="true" /></a>
    </>
  );
}
