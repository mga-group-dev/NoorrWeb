"use client";

import { motion, useReducedMotion } from "framer-motion";

// Every route fades in, like a cut between scenes. (No blur filter: it is costly to animate on phones.)
export default function Template({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
