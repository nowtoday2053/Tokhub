import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export const GradientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.75]);

  return (
    <motion.div
      style={{ y, opacity }}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f5f5f7]"
    >
      {/* Primary subtle spotlight */}
      <div className="absolute -top-64 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_65%)] blur-3xl" />

      {/* Soft bottom vignette */}
      <div className="absolute bottom-[-260px] left-0 right-0 h-[420px] bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.08),_transparent_70%)]" />

      {/* Very subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_60%)]" />
    </motion.div>
  );
};

