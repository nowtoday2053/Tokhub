import { motion } from 'framer-motion';
import React from 'react';
import { Star } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

type TestimonialCardProps = {
  name: string;
  handle: string;
  quote: string;
  role?: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  handle,
  quote,
  role
}) => {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=312e81&color=f9fafb&size=96&bold=true`;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 rounded-2xl border border-white/10 object-cover"
          />
          <div>
            <p className="text-sm font-medium text-slate-900">{name}</p>
            <p className="text-[11px] text-slate-500">
              {handle} {role && `• ${role}`}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300">
          <Star className="h-3 w-3 fill-emerald-400 text-emerald-400" />
          <span>5.0</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{quote}</p>
    </motion.article>
  );
};

