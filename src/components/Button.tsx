import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import React from 'react';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'bg-zinc-900 text-white shadow-sm hover:bg-zinc-800 hover:shadow-md',
        secondary:
          'bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:border-zinc-300 hover:bg-zinc-50',
        outline:
          'bg-transparent text-zinc-700 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50',
        accent:
          'bg-brand-500 text-white shadow-sm hover:bg-brand-600 hover:shadow-md'
      },
      size: {
        sm: 'text-xs px-3.5 py-2 rounded-md',
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
      whileTap={{ scale: 0.98 }}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      <span className="relative inline-flex items-center justify-center gap-2">
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}
        {children}
      </span>
    </motion.button>
  );
};
