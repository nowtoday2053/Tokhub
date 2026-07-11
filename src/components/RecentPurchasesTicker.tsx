import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const purchases = [
  { name: 'Marcus T.', location: 'Austin, TX', product: 'Aged Creator Account', time: '2 min ago' },
  { name: 'Sarah K.', location: 'London, UK', product: 'Starter U.S. Account', time: '5 min ago' },
  { name: 'David L.', location: 'Toronto, CA', product: 'Agency Bundle', time: '8 min ago' },
  { name: 'Jessica M.', location: 'Miami, FL', product: 'Aged Creator Account', time: '12 min ago' },
  { name: 'Ryan P.', location: 'Berlin, DE', product: 'Starter U.S. Account', time: '15 min ago' },
  { name: 'Nina S.', location: 'Sydney, AU', product: 'Agency Bundle', time: '18 min ago' }
];

export const RecentPurchasesTicker: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % purchases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = purchases[index];

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <ShoppingBag className="h-3.5 w-3.5 text-zinc-400" />
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-zinc-600"
        >
          <span className="font-medium text-zinc-900">{current.name}</span>
          {' '}from {current.location} purchased{' '}
          <span className="font-medium text-zinc-900">{current.product}</span>
          {' · '}{current.time}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
