import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { GradientBackground } from '../components/GradientBackground';

export const PaymentConfirmed: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900">
      <GradientBackground />

      <main className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full space-y-8"
        >
          {/* Success Icon */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-[0_20px_60px_rgba(16,185,129,0.4)]">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Payment Confirmed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-slate-600 sm:text-lg"
            >
              Your order has been processed successfully. Your U.S. TikTok account
              credentials will be delivered to your email within 60 minutes.
            </motion.p>
          </div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <Mail className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Check Your Email
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                We&apos;ll send your account credentials to the email address you
                used during checkout. Check your inbox (and spam folder) within
                the next hour.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Delivery Time
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                Most accounts are delivered within 30–60 minutes. If you
                haven&apos;t received yours after an hour, contact support.
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              What&apos;s Next?
            </h3>
            <ol className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                  1
                </span>
                <span>
                  Check your email for the account credentials (email + password
                  + TikTok login info)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                  2
                </span>
                <span>
                  Use a U.S. residential proxy when logging in to avoid any
                  issues
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                  3
                </span>
                <span>Start posting and watch your views explode!</span>
              </li>
            </ol>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-xs text-slate-500">
              Need help? Email us at{' '}
              <a
                href="mailto:support@tokaccs.xyz"
                className="font-medium text-slate-900 hover:underline"
              >
                support@tokaccs.xyz
              </a>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Return to Home
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};
