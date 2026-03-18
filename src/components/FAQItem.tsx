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
        open ? 'border-slate-300 bg-white' : 'border-slate-200 bg-white/80 hover:border-slate-300'
      ].join(' ')}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
      >
        <span className="text-sm font-semibold text-slate-900 sm:text-[15px]">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={[
            'shrink-0 rounded-full border p-1 transition-colors',
            open ? 'border-slate-300 bg-slate-100' : 'border-slate-200 bg-white group-hover:bg-slate-50'
          ].join(' ')}
        >
          <ChevronDown className="h-4 w-4 text-slate-600" />
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
            <div className="px-5 pb-5 text-sm leading-relaxed text-slate-700">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

