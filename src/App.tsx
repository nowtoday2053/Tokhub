import React, { useState } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bolt,
  Headphones,
  Lock,
  Mail,
  Star,
  Sparkles,
  Timer,
  Wallet
} from 'lucide-react';
import { GradientBackground } from './components/GradientBackground';
import { Button } from './components/Button';
import { StatCounter } from './components/StatCounter';
import { PricingCard } from './components/cards/PricingCard';
import { TestimonialCard } from './components/cards/TestimonialCard';
import { FAQItem } from './components/FAQItem';
import { PaymentConfirmed } from './pages/PaymentConfirmed';

export const App: React.FC = () => {
  // Check if we're on the payment confirmed page
  const urlParams = new URLSearchParams(window.location.search);
  const isPaymentConfirmed =
    urlParams.get('success') === 'true' ||
    window.location.pathname === '/payment-confirmed' ||
    window.location.pathname === '/success';

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
          <a href="#hero" className="group flex items-center gap-2">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-transparent" />
              <img
                src="/logo.png"
                alt="Tokaccs"
                className="relative h-9 w-9 object-contain"
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
              Tokaccs
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 px-2 py-1.5 text-sm text-slate-600 shadow-sm backdrop-blur sm:flex">
            {[
              { href: '#pricing', label: 'Pricing' },
              { href: '#usage', label: 'How it works' },
              { href: '#reviews', label: 'Reviews' },
              { href: '#faq', label: 'FAQ' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 font-medium transition-colors hover:bg-slate-900/5 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="secondary" onClick={onPrimaryCta} isLoading={ctaLoading}>
              Buy now
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        {/* Hero */}
        <section
          id="hero"
          className="relative pb-10 pt-2"
        >
          <div className="grid items-start gap-8 pt-2 md:grid-cols-2 lg:gap-14 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
              className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
                className="inline-flex items-center gap-2 text-xs text-slate-600"
              >
                <span className="inline-flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="font-semibold text-slate-900">4.8/5</span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span className="hidden sm:inline text-slate-500">customer rating</span>
              </motion.div>

              <h1 className="font-sans -mt-0.5 text-[34px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[44px] md:text-[44px] lg:text-[50px]">
                U.S. TikTok Accounts That Go Viral.
              </h1>

              <p className="max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                Forget spending months warming up a new account. Our aged U.S. TikToks go viral the moment you start posting.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Button size="lg" variant="secondary" onClick={onPrimaryCta} isLoading={ctaLoading}>
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const el = document.getElementById('usage');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  How It Works
                </Button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
              className="flex justify-center md:justify-end"
            >
              <motion.div
                className="pt-2 -mt-2 md:-mt-4 md:translate-x-4 lg:translate-x-10"
              >
                <img
                  src="/image.png"
                  alt="Analytics overview on a phone"
                  className="w-full max-w-sm drop-shadow-[0_28px_70px_rgba(15,23,42,0.22)] sm:max-w-md"
                />
              </motion.div>
            </motion.div>
          </div>
          </section>

          {/* Why U.S. TikTok accounts */}
          <section className="border-t border-slate-200/60 bg-white/40 py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
              <div className="space-y-2 text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Why U.S. TikTok Accounts?
                </h2>
                <p className="text-sm text-slate-600 sm:text-base">
                  See the difference between aged U.S. accounts and random international accounts.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white px-6 py-7 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100/70 via-slate-50 to-transparent" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-500">
                        Recommended
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                        U.S. TikTok Accounts
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Clean history, real U.S. signals, and ready to post.
                      </p>
                    </div>
                  </div>

                  <dl className="relative mt-5 space-y-3 text-sm">
                    {[
                      {
                        label: 'Shadowban status',
                        value: 'No shadowbans — clean U.S. IP history.'
                      },
                      {
                        label: 'Audience reach',
                        value: 'Maximum reach with a 90%+ U.S. audience signal.'
                      },
                      {
                        label: 'VPN required',
                        value: 'No VPN gymnastics — native U.S. accounts.'
                      },
                      {
                        label: 'Algorithm priority',
                        value: 'Aligned with U.S. trends and recommendations.'
                      },
                      {
                        label: 'Content performance',
                        value: 'Shown to buyers who convert, not random viewers.'
                      }
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                          ✓
                        </span>
                        <div>
                          <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                            {item.label}
                          </dt>
                          <dd className="text-[13px] text-slate-800">{item.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white px-6 py-7 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/70 via-slate-50 to-transparent" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-500">
                        Not recommended
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                        International Accounts
                      </h3>
                      <p className="mt-1 text-xs text-slate-600">
                        Cheap accounts with the wrong region and bad history.
                      </p>
                    </div>
                  </div>

                  <dl className="relative mt-5 space-y-3 text-sm">
                    {[
                      {
                        label: 'Shadowban status',
                        value: 'Shadowbanned content — wrong country signals.'
                      },
                      {
                        label: 'Audience reach',
                        value: 'Low U.S. reach — deprioritized by the algorithm.'
                      },
                      {
                        label: 'VPN required',
                        value: 'Constant VPN / IP changes to even log in.'
                      },
                      {
                        label: 'Algorithm priority',
                        value: 'Algorithm disadvantage from mixed or foreign regions.'
                      },
                      {
                        label: 'Content performance',
                        value: 'Views in the wrong countries — no buyers, no conversions.'
                      }
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                          ✕
                        </span>
                        <div>
                          <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                            {item.label}
                          </dt>
                          <dd className="text-[13px] text-slate-800">{item.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* Safe usage / proxy guidance */}
          <section id="usage" className="border-t border-slate-200/60 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/50 px-3 py-1.5 text-xs text-slate-600 backdrop-blur">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Lock className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">Safe setup</span>
                <span className="text-slate-400">•</span>
                <span>avoid flags & keep reach</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                How To Use These Accounts
              </h2>
            </div>

            <ol className="mx-auto mt-10 max-w-5xl space-y-8 px-2 sm:px-0">
              {[
                {
                  step: '01',
                  title: 'Use a U.S. residential proxy',
                  description:
                    'These accounts were created on U.S. IPs. Use a U.S. residential proxy (not a datacenter VPN) to avoid flags.',
                  icon: Lock
                },
                {
                  step: '02',
                  title: 'Keep device & location consistent',
                  description:
                    'Stick to one device and one proxy per account. Don’t switch devices or IPs—consistency is key.',
                  icon: Timer
                },
                {
                  step: '03',
                  title: 'Start posting',
                  description:
                    'Fill out your bio, add a profile photo, and post your first video the same day. Keep it natural (no spammy posting), and stay consistent for the first week.',
                  icon: Sparkles
                }
              ].map((item, idx, arr) => {
                const Icon = item.icon;
                const isLast = idx === arr.length - 1;
                return (
                  <li key={item.step} className="relative">
                    <div className="grid gap-4 sm:grid-cols-[auto,1fr] sm:gap-6">
                      <div className="relative flex items-start gap-4">
                        <div className="relative">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                            <Icon className="h-5 w-5" />
                          </span>
                          {!isLast && (
                            <span className="absolute left-1/2 top-12 hidden h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-slate-200 sm:block" />
                          )}
                        </div>
                        <div className="pt-1 sm:hidden">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            Step {item.step}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-none border-b border-slate-200 pb-8 sm:border-b-0 sm:pb-0">
                        <div className="hidden text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:block">
                          Step {item.step}
                        </div>
                        <div className="mt-1 flex items-baseline justify-between gap-4">
                          <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Reviews */}
          <section id="reviews" className="space-y-8 border-t border-slate-200/60 bg-white/40 py-24 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    TikTok Profiles Using Our Accounts
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base mx-auto">
                    See actual US based TikTok accounts from our satisfied customers
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-0">
              {['/pic11.png', '/pic12.png', '/pic13.png', '/pic14.png', '/pic15.png', '/pic16.png'].map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.14)]"
                >
                  <div className="grid aspect-[16/9] place-items-center bg-slate-900/95 p-3 sm:p-4">
                    <img
                      src={src}
                      alt="Customer profile screenshot"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing / product tiers */}
          <section id="pricing" className="space-y-8 border-t border-slate-200/60 py-24 text-center">
             <div className="flex flex-col items-center gap-3">
               <div>
                 <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                   Pricing
                 </h2>
               </div>
               <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] text-slate-600">
                 <Wallet className="h-3.5 w-3.5 text-sky-400" />
                 <span>Secure payments via Stripe.</span>
               </div>
             </div>
            <div className="grid gap-5 md:grid-cols-3">
              <PricingCard
                 name="5 Account Bundle"
                 price="$20"
                 unitLabel="5 accounts"
                 footerNote="Delivered instantly."
                 buyUrl="https://buy.stripe.com/9B614ogxJ9OgcYo6wiefC00"
                features={[
                   'U.S. IP + email verified',
                   'Created within last 1-2 months',
                   'Clean history & email included',
                   'Ready to post immediately'
                ]}
              />
              <PricingCard
                name="10 Account Bundle"
                price="$50"
                highlighted
                unitLabel="10 accounts"
                footerNote="Delivered instantly."
                buyUrl="https://buy.stripe.com/eVqbJ295h6C49Mc4oaefC01"
                features={[
                  '3–6 months account age',
                  'More trusted by the algorithm',
                  'Clean history & email included',
                  'Good for running multiple pages'
                ]}
              />
              <PricingCard
                name="20 Account Bundle"
                price="$100"
                unitLabel="20 accounts"
                footerNote="Delivered instantly."
                buyUrl="https://buy.stripe.com/dRmdRacht5y0f6w8EqefC02"
                features={[
                  '20 aged U.S. accounts',
                  'Test different niches or content styles',
                  'Bulk discount included',
                  'Priority support'
                ]}
              />
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t border-slate-200/60 bg-white/40 py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  FAQ
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Common questions we get. If yours isn&apos;t here, just email us.
                </p>
              </div>

              <div className="mt-8 space-y-3">
              <FAQItem
                question="How fast will I receive my account after paying?"
                answer="Instantly. You'll get the login details by email and can change the password, email, etc. right away."
              />
              <FAQItem
                question="What exactly is included with each account?"
                answer="Email, password, and TikTok login info. Everything you need to get in."
              />
              <FAQItem
                question="What if the account has issues or I can't log in?"
                answer="We'll replace it or give you a full refund. No runaround."
              />
              <FAQItem
                question="Do I need a proxy or VPN to use the account?"
                answer="Yes — use a U.S. residential proxy to match the account’s location and avoid flags. Avoid datacenter VPNs."
              />
              <FAQItem
                question="What does “aged” mean?"
                answer="The account is already a few months old and has more trust signals than a brand-new account."
              />
              <FAQItem
                question="Can I change the email, password, and 2FA?"
                answer="Yes. You can secure it immediately after delivery: change the password, update the email, and enable 2-step verification."
              />
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="space-y-6 border-t border-slate-200/60 py-24 text-center">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1.5 text-xs text-slate-600 shadow-sm backdrop-blur">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Headphones className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">Support</span>
                <span className="text-slate-400">•</span>
                <span>replies within 1 hour</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Need Help?
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Something not working? Email us anytime — we reply within an hour.
              </p>

              <motion.a
                href="mailto:support@tokaccs.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 inline-flex w-full items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/80 px-6 py-5 text-left shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur transition-all hover:border-slate-300 hover:bg-white hover:shadow-[0_26px_70px_rgba(15,23,42,0.16)] sm:px-7"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/90 to-sky-500/90 text-white shadow-soft">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">support@tokaccs.com</span>
                    <span className="text-xs text-slate-500">Tap to email • replies within 1 hour</span>
                  </span>
                </span>
                <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 sm:inline">
                  Email us
                </span>
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
              <p>© 2026 Tokaccs. All rights reserved.</p>
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

