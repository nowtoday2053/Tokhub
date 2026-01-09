import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import React from 'react';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 text-white shadow-soft hover:shadow-[0_20px_60px_rgba(79,70,229,0.65)] hover:-translate-y-0.5',
        secondary:
          'bg-slate-900 text-slate-50 border border-slate-900 hover:bg-slate-800 hover:-translate-y-0.5',
        outline:
          'bg-transparent text-slate-900 border border-slate-300 hover:border-slate-900 hover:bg-slate-900/5',
        light:
          'bg-white text-slate-900 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.18)] hover:bg-slate-50 hover:-translate-y-0.5'
      },
      size: {
        sm: 'text-xs px-4 py-1.5',
        md: 'text-sm px-5 py-2.5',
        lg: 'text-base px-6 py-3'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    isLoading?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  isLoading,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      <span className="relative flex items-center gap-2">
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}
        <span>{children}</span>
      </span>
    </motion.button>
  );
};

