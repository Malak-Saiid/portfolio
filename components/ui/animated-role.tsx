import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const roles = ["Junior Software Engineer", "Full-Stack Developer", "MERN Stack Developer", "Software Engineering Master's Student"];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 4200);
    return () => window.clearInterval(timer);
  }, [reduced]);
  return (
    <>
      <span className="sr-only">Junior Software Engineer and Full-Stack Developer</span>
      <span aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={index} initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -6 }} transition={{ duration: .24 }}>{roles[index]}</motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
