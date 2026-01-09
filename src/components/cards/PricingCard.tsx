import { motion } from 'framer-motion';
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
  highlighted?: boolean;
  unitLabel?: string;
  showBogo?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  badge,
  features,
  highlighted,
  unitLabel = 'account',
  showBogo = false
}) => {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-3xl border p-6 shadow-[0_18px_45px_rgba(15,23,42,0.16)] ${
        highlighted
          ? 'border-indigo-500/70 bg-gradient-to-b from-indigo-50 via-white to-slate-50'
          : 'border-slate-200 bg-white'
      }`}
    >
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-emerald-50 shadow-soft">
          {badge}
        </span>
      )}
      <div className="mb-4 space-y-2">
        <h3 className="font-medium text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <div className="mb-5 flex items-baseline gap-1">
        <span className="text-3xl font-semibold text-slate-900">{price}</span>
        <span className="text-xs text-slate-500">/ {unitLabel}</span>
      </div>
      {showBogo && (
        <div className="mb-4 inline-flex items-center justify-start gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Buy 1, get 1 free today</span>
        </div>
      )}
      <ul className="mb-6 flex flex-1 flex-col gap-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-slate-700">
            <Check className="mt-[2px] h-4 w-4 text-emerald-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="w-full">
        Buy now
      </Button>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        Delivered within 60 minutes. 24 hour money back guarantee.
      </p>
    </motion.div>
  );
};

