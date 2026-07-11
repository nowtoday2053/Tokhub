import { motion } from 'framer-motion';
import React from 'react';
import { StarRating } from '../StarRating';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import type { Testimonial } from '../../data/testimonials';

type TestimonialCardProps = Testimonial & { index?: number };

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  handle,
  quote,
  role,
  result,
  photoUrl,
  index = 0
}) => {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-card"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={photoUrl}
            alt={name}
            className="h-10 w-10 rounded-full border border-zinc-200 bg-white object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-medium text-zinc-900">{name}</p>
            <p className="text-xs text-zinc-400">
              {handle} · {role}
            </p>
          </div>
        </div>
        <StarRating />
      </div>

      <p className="flex-1 text-sm leading-relaxed text-zinc-600">&ldquo;{quote}&rdquo;</p>

      <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
        {result}
      </div>
    </motion.article>
  );
};
