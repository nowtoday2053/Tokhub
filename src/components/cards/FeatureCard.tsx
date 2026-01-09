import { motion } from 'framer-motion';
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description
}) => {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <div className="pointer-events-none absolute inset-px rounded-[22px] bg-gradient-to-b from-slate-50 via-white to-white/0 opacity-80" />
      <div className="relative flex flex-col gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/90 to-sky-500/90 text-white shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
        <div className="space-y-2">
          <h3 className="font-medium text-slate-900">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

