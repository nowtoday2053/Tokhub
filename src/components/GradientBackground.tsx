import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export const GradientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.div
      style={{ y }}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface"
    >
      <div className="absolute -top-48 left-1/2 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.06),_transparent_70%)]" />
      <div className="absolute right-0 top-1/4 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.04),_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/60 to-transparent" />
    </motion.div>
  );
};
