import React, { useState } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Headphones,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Timer,
  Wallet
} from 'lucide-react';
import { GradientBackground } from './components/GradientBackground';
import { Button } from './components/Button';
import { StatCounter } from './components/StatCounter';
import { FeatureCard } from './components/cards/FeatureCard';
import { PricingCard } from './components/cards/PricingCard';
import { TestimonialCard } from './components/cards/TestimonialCard';
import { FAQItem } from './components/FAQItem';
import { PaymentConfirmed } from './pages/PaymentConfirmed';

export const App: React.FC = () => {
  // Check if we're on the payment confirmed page
  const urlParams = new URLSearchParams(window.location.search);
  const isPaymentConfirmed = urlParams.get('success') === 'true' || window.location.pathname === '/payment-confirmed';

  if (isPaymentConfirmed) {
    return <PaymentConfirmed />;
  }
  const { scrollYProgress } = useScroll();
  const headerBlur = useTransform(scrollYProgress, [0, 0.08], [0, 20]);
  const headerHeight = useTransform(scrollYProgress, [0, 0.15], [80, 64]);
  const headerBgOpacity = useTransform(scrollYProgress, [0, 0.15], [0.7, 0.9]);
  const headerBackdrop = useMotionTemplate`blur(${headerBlur}px)`;
  const headerBackground = useMotionTemplate`rgba(248,250,252,${headerBgOpacity})`;

  const [ctaLoading, setCtaLoading] = useState(false);

  const onPrimaryCta = () => {
    setCtaLoading(true);
    setTimeout(() => setCtaLoading(false), 1200);
    const pricingEl = document.getElementById('pricing');
    pricingEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen text-slate-900">
      <GradientBackground />

      {/* Sticky header */}
      <motion.header
        style={{
          backdropFilter: headerBackdrop,
          height: headerHeight,
          backgroundColor: headerBackground
        }}
        className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70"
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-semibold tracking-tight text-slate-900">
              Tokaccs
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-xs text-slate-500 sm:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button size="sm" variant="secondary" onClick={onPrimaryCta} isLoading={ctaLoading}>
              Get your account
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        {/* Hero */}
        <section
          id="hero"
          className="flex flex-col items-center gap-10 pb-24 text-center"
        >
          <div className="space-y-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700 shadow-sm md:mx-0 mx-auto"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/90 text-[10px] font-semibold text-emerald-50">
                <BadgeCheck className="h-3 w-3" />
              </span>
              5,492 U.S. TikTok accounts delivered as of 1/10/2026
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
              className="space-y-5"
            >
              <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Reach 170M Americans.
                <span className="relative block pt-1">
                  <span className="relative z-10">Go viral faster.</span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-3 rounded-full bg-gradient-to-r from-indigo-500/70 via-violet-500/70 to-sky-500/70 opacity-70 blur-[6px]" />
                </span>
              </h1>
              <p className="max-w-xl mx-auto text-sm leading-relaxed text-slate-600 sm:text-base">
                Warmed American accounts ready to go viral. Bypass geo blocks
                and start racking up viral views today. Every account is aged,
                manually reviewed, and backed by our{' '}
                <span className="font-medium text-slate-900">
                  24 hour money back guarantee
                </span>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Button
                size="lg"
                variant="light"
                onClick={onPrimaryCta}
                isLoading={ctaLoading}
              >
                Get your U.S. account
              </Button>
              <Button variant="secondary" size="lg" onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                Learn how it works
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
              className="grid grid-cols-3 gap-4 rounded-3xl border border-slate-200 bg-white p-4 text-xs text-slate-500 sm:text-sm"
            >
              <div>
                <dt className="text-[11px] text-slate-400">Accounts delivered</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  <StatCounter value={5400} suffix="+" />
                </dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-400">Agency & brand teams</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  <StatCounter value={121} suffix="+" />
                </dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-400">Customer rating</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  <StatCounter value={4} suffix=".9/5" prefix="" />
                </dd>
              </div>
            </motion.dl>
          </div>
        </section>

        {/* Safe usage / proxy guidance */}
        <section id="usage" className="space-y-8 border-t border-slate-200/60 pt-24 text-center">
          <div className="flex flex-col items-center gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                How To Use These Accounts
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                To protect your investment and keep each profile healthy, it&apos;s critical
                that you follow these steps.
              </p>
            </div>
          </div>
          <div className="grid gap-5 text-left sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                1. Always use a U.S. residential proxy
              </h3>
              <p className="text-sm">
                These accounts are created on U.S. IPs and must be used with a{' '}
                <span className="font-semibold">dedicated American residential proxy</span>{' '}
                (not a datacenter VPN). Logging in from other countries or random
                shared VPNs can trigger security checks and flags.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                2. Keep device & location consistent
              </h3>
              <p className="text-sm">
                Use the same device and U.S. proxy endpoint per account and stick to it.
                Avoid logging in from multiple devices, IPs, or countries other than the U.S.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                3. Start with natural activity
              </h3>
              <p className="text-sm">
                And that&apos;s it! Post like you do normally and watch your views explode!
                Don&apos;t forget to make good content ;)
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-8 border-t border-slate-200/60 pt-24 text-center">
          <div className="flex flex-col items-center gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Built For Performance
              </h2>
               <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                 Every Tokaccs account is hand reviewed, warmed, and ready to go viral.
               </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>24 hour money back guarantee</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Sparkles}
              title="Pre-warmed accounts"
               description="Every account is aged and algorithm-ready. No cold start period, just instant viral potential."
            />
            <FeatureCard
              icon={Bolt}
              title="High engagement rate"
              description="Built to perform in the U.S. algorithm. These accounts see higher views, likes, and shares from day one."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Zero restrictions"
              description="No geo-blocks, no shadowbans, no limitations. Full access to America&apos;s 170M+ active users."
            />
          </div>
        </section>

        {/* Pricing / product tiers */}
        <section id="pricing" className="space-y-8 border-t border-slate-200/60 pt-24 text-center">
           <div className="flex flex-col items-center gap-3">
             <div>
               <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                 Pricing
               </h2>
               <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                 From fresh U.S. accounts to aged, authority-ready profiles —
                 pick the tier that fits your campaign.
               </p>
             </div>
             <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] text-slate-600">
               <Wallet className="h-3.5 w-3.5 text-sky-400" />
               <span>Secure payments via Stripe.</span>
             </div>
           </div>
          <div className="grid gap-5 md:grid-cols-3">
            <PricingCard
               name="Starter U.S. Account"
               description="Warmed U.S. account, perfect for marketing new startups, offers, etc."
               price="$10"
               showBogo
               buyUrl="https://buy.stripe.com/6oU9AN9Sg3qW8Yqe0k5gc03"
              features={[
                 'U.S. IP + email verified',
                 'Created within last 1-2 months',
                 'Clean history & email included',
                 'Ready to post immediately'
              ]}
            />
            <PricingCard
              name="Aged Creator Account"
              description="Warmed U.S. accounts for serious founders and creators."
              price="$20"
              highlighted
              unitLabel="5 accounts"
              buyUrl="https://buy.stripe.com/8x28wJ4xWe5A4Ia8G05gc04"
              features={[
                '3–6 months account age',
                'Higher trust & stability',
                'Organic posting history',
                'Perfect for scaling'
              ]}
            />
            <PricingCard
              name="Agency-Ready Bundle"
              description="Built for teams, agencies, and mass campaigns"
              price="$50"
              unitLabel="10 accounts"
              buyUrl="https://buy.stripe.com/aFaaER9Sge5A6QicWg5gc05"
              features={[
                '10x aged U.S. accounts',
                'Built for high-volume content testing',
                'Volume discount included',
                'Priority Support'
              ]}
            />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="space-y-8 border-t border-slate-200/60 pt-24 text-center">
          <div className="flex flex-col items-center gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                From Purchase To Posting
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                Go from purchase to your first post in minutes.
              </p>
            </div>
          </div>
          <ol className="relative grid gap-6 border-l border-white/10 pl-6 sm:grid-cols-3 sm:border-l-0 sm:pl-0 sm:pt-2 text-left">
            {[
              {
                title: 'Login To Your Account',
                description:
                  'Make sure to use a proxy when logging in to avoid any issues.',
                icon: Sparkles
              },
              {
                title: 'Secure Your Account',
                description:
                  'Log in with the provided credentials. Change the password immediately. Enable 2-step verification (recommended).',
                icon: Lock
              },
              {
                title: 'Optimize Your Profile',
                description:
                  'Upload your profile photo or logo. Add a bio related to your niche. Keep changes related to your niche.',
                icon: Bolt
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative flex flex-col gap-3 sm:pl-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft">
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/80 to-sky-500/80 opacity-80" />
                      <span className="relative text-xs font-semibold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 space-y-1">
                    <h3 className="text-sm font-medium text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-6 border-t border-slate-200/60 pt-24 text-center">
          <div className="flex flex-col items-center gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                FAQ
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                Still not sure if Tokaccs is right for you? Here are the most
                common questions we get from creators and agencies.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <FAQItem
              question="How fast will I receive my account after paying?"
              answer="Accounts are delivered within an hour. You'll receive full account credentials and you can change the email, password, etc. once you're logged in."
            />
            <FAQItem
              question="What exactly is included with each account?"
              answer="You'll receive email + password and TikTok login credentials."
            />
            <FAQItem
              question="What if the account has issues or I can’t log in?"
              answer="If there’s any issue accessing your account, we'll either replace the account or issue a full refund."
            />
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="space-y-6 border-t border-slate-200/60 pt-24 text-center">
          <div className="flex flex-col items-center gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Need Help?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                Have questions or need assistance? Our support team is here to help.
              </p>
            </div>
            <motion.a
              href="mailto:support@tokaccs.xyz"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.2)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/90 to-sky-500/90 text-white shadow-soft">
                <Mail className="h-5 w-5" />
              </span>
              <span>support@tokaccs.xyz</span>
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-semibold text-slate-900">
                Tokaccs
              </span>
            </div>
            <p className="max-w-md text-[11px] text-slate-500">
              Tokaccs is not affiliated with or endorsed by TikTok or ByteDance.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <p>© 2025 Tokaccs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StarRow: React.FC = () => {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_0_0_1px_rgba(251,191,36,0.6)]"
        />
      ))}
    </span>
  );
};

