import { motion, MotionValue, useMotionTemplate } from 'framer-motion';
import React from 'react';
import { Headphones, MessageCircle } from 'lucide-react';
import { Button } from './Button';

type HeaderProps = {
  headerBlur: MotionValue<number>;
  headerHeight: MotionValue<number>;
  headerBackground: MotionValue<string>;
  onPrimaryCta: () => void;
  ctaLoading: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  headerBlur,
  headerHeight,
  headerBackground,
  onPrimaryCta,
  ctaLoading
}) => {
  const headerBackdrop = useMotionTemplate`blur(${headerBlur}px)`;

  return (
    <motion.header
      style={{
        backdropFilter: headerBackdrop,
        height: headerHeight,
        backgroundColor: headerBackground
      }}
      className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200/80"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white">
            T
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            Tokaccs
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-500 md:flex">
          <a href="#pricing" className="transition-colors hover:text-zinc-900">
            Accounts
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-zinc-900">
            How it works
          </a>
          <a href="#reviews" className="transition-colors hover:text-zinc-900">
            Reviews
          </a>
          <a href="#faq" className="transition-colors hover:text-zinc-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="mailto:support@tokaccs.com"
            className="hidden items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 sm:inline-flex"
          >
            <Headphones className="h-3.5 w-3.5" />
            Support
          </a>
          <a
            href="mailto:support@tokaccs.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 sm:hidden"
            aria-label="Contact support"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button size="sm" onClick={onPrimaryCta} isLoading={ctaLoading}>
            Get started
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
