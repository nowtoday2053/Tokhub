import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { GradientBackground } from '../components/GradientBackground';

export const PaymentConfirmed: React.FC = () => {
  return (
    <div className="min-h-screen text-zinc-900">
      <GradientBackground />

      <main className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-8"
        >
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-card">
              <CheckCircle2 className="h-10 w-10" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Payment confirmed
            </h1>
            <p className="text-base text-zinc-500">
              Your account credentials are on the way to your inbox.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100">
                  <Mail className="h-4 w-4 text-zinc-600" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900">Check your email</h3>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500">
                Login details were sent to the email you used at checkout. Check spam if you don&apos;t see it within a few minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100">
                  <Clock className="h-4 w-4 text-zinc-600" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900">Delivery time</h3>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500">
                Most orders arrive instantly. If you don&apos;t receive credentials within 1 hour, contact support for immediate help.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-card">
            <h3 className="mb-4 text-sm font-semibold text-zinc-900">Next steps</h3>
            <ol className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-xs font-semibold text-zinc-600">1</span>
                <span>Check your email for login credentials (email, password, TikTok access)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-xs font-semibold text-zinc-600">2</span>
                <span>Log in using a U.S. residential proxy and change your password immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-xs font-semibold text-zinc-600">3</span>
                <span>Update your profile and start posting — you&apos;re live</span>
              </li>
            </ol>
          </div>

          <p className="text-sm text-zinc-400">
            Need help?{' '}
            <a href="mailto:support@tokaccs.com" className="font-medium text-zinc-900 hover:underline">
              support@tokaccs.com
            </a>
          </p>

          <Button
            size="lg"
            onClick={() => { window.location.href = '/'; }}
            className="gap-2"
          >
            Return to home
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </main>
    </div>
  );
};
