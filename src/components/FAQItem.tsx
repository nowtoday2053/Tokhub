import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        'group overflow-hidden rounded-2xl border transition-colors',
        open ? 'border-zinc-300 bg-white' : 'border-zinc-200 bg-white hover:border-zinc-300'
      ].join(' ')}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2"
      >
        <span className="text-sm font-medium text-zinc-900 sm:text-[15px]">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={[
            'shrink-0 rounded-full border p-1 transition-colors',
            open ? 'border-zinc-300 bg-zinc-100' : 'border-zinc-200 bg-white group-hover:bg-zinc-50'
          ].join(' ')}
        >
          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

