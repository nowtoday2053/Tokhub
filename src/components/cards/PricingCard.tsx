import { motion } from 'framer-motion';
import React from 'react';
import { ArrowRight, Check, Clock, Headphones, Shield } from 'lucide-react';
import { Button } from '../Button';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import type { Tier } from '../../data/tiers';

type PricingCardProps = Tier;

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  badge,
  specs,
  features,
  highlighted,
  unitLabel,
  showBogo,
  buyUrl,
  stockLeft
}) => {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-card-hover ${
        highlighted
          ? 'border-brand-500/30 bg-white shadow-glow'
          : 'border-zinc-200 bg-white shadow-card'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}

      <div className="mb-5 space-y-1">
        <h3 className="text-base font-semibold text-zinc-900">{name}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
      </div>

      <div className="mb-4 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-zinc-900">{price}</span>
        <span className="text-sm text-zinc-400">/ {unitLabel}</span>
      </div>

      {showBogo && (
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Buy 1, get 1 free — limited time
        </div>
      )}

      <ul className="mb-6 flex flex-1 flex-col gap-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* trust badges removed per request */}

      <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button variant={'primary'} className="w-full gap-2">
          Buy now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </motion.div>
  );
};
