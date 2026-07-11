import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Headphones,
  Mail,
  Package,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GradientBackground } from './components/GradientBackground';
import { Header } from './components/Header';
import { TrustBar } from './components/TrustBar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { StatCounter } from './components/StatCounter';
import { StarRating } from './components/StarRating';
import { RecentPurchasesTicker } from './components/RecentPurchasesTicker';
import { PricingCard } from './components/cards/PricingCard';
import { TestimonialCard } from './components/cards/TestimonialCard';
import { FAQItem } from './components/FAQItem';
import { PaymentConfirmed } from './pages/PaymentConfirmed';
import { tiers } from './data/tiers';
import { testimonials } from './data/testimonials';
import { faqs } from './data/faq';

export const App: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isPaymentConfirmed =
    urlParams.get('success') === 'true' ||
    window.location.pathname === '/payment-confirmed';

  if (isPaymentConfirmed) {
    return <PaymentConfirmed />;
  }

  const { scrollYProgress } = useScroll();
  const headerBlur = useTransform(scrollYProgress, [0, 0.08], [0, 16]);
  const headerHeight = useTransform(scrollYProgress, [0, 0.15], [72, 60]);
  const headerBgOpacity = useTransform(scrollYProgress, [0, 0.15], [0.8, 0.95]);
  const headerBackground = useTransform(headerBgOpacity, (v) => `rgba(255,255,255,${v})`);

  const [ctaLoading, setCtaLoading] = useState(false);

  const onPrimaryCta = () => {
    setCtaLoading(true);
    setTimeout(() => setCtaLoading(false), 800);
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen text-zinc-900">
      <GradientBackground />

      <Header
        headerBlur={headerBlur}
        headerHeight={headerHeight}
        headerBackground={headerBackground}
        onPrimaryCta={onPrimaryCta}
        ctaLoading={ctaLoading}
      />

      <main>
        {/* Hero */}
        <section id="hero" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm">
                <StarRating size="sm" />
                <span className="text-zinc-900">5/5</span>
                <span className="text-zinc-300">|</span>
                <span>500+ accounts sold</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                  U.S. TikTok Accounts That Go Viral Within A Week.
                </h1>
                <p className="max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg">
                  Skip geo-blocks and start posting to the U.S. algorithm today.
                  Every account is aged, manually verified, and backed by a{' '}
                  <span className="font-medium text-zinc-800">24-hour money-back guarantee</span>.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" onClick={onPrimaryCta} isLoading={ctaLoading} className="w-fit whitespace-nowrap">
                  Choose your account
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  See how it works
                </a>
              </div>

              <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-card">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                    Accounts sold
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-900">
                    <StatCounter value={500} suffix="+" />
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                    Creators & agencies
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-900">
                    <StatCounter value={120} suffix="+" />
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                    Avg. rating
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-900">
                    <StatCounter value={5} suffix="/5" />
                  </dd>
                </div>
              </dl>

              <RecentPurchasesTicker />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden lg:flex lg:items-center lg:justify-end"
            >
              <img
                src="/image.png"
                alt="TikTok analytics showing viral U.S. reach"
                className="w-full max-w-md translate-x-6 drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-t border-zinc-200/80 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                How it works
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500 sm:text-base">
                Three steps from checkout to your first U.S. viral post. No waiting, no guesswork.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  icon: Package,
                  title: 'Choose your account',
                  description:
                    'Pick the tier that fits your goals — starter, aged creator, or agency bundle. Every listing shows exactly what you get.'
                },
                {
                  step: '02',
                  icon: CreditCard,
                  title: 'Secure payment',
                  description:
                    'Pay safely through Stripe. Encrypted checkout, instant confirmation, and a receipt sent to your email.'
                },
                {
                  step: '03',
                  icon: Zap,
                  title: 'Instant delivery',
                  description:
                    'Your accounts arrive in your inbox within 30 seconds. Log in, secure the account, and start posting.'
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative rounded-2xl border border-zinc-200 bg-surface p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-300">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-zinc-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Choose your account
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500 sm:text-base">
                U.S.-based, manually verified accounts. Full specs listed — no surprises at checkout.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Secure payments via Stripe · 24hr guarantee on every order
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <PricingCard key={tier.name} {...tier} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="border-t border-zinc-200/80 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Trusted by creators and agencies
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500 sm:text-base">
                Real results from real customers. Here&apos;s what happens after delivery.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600">
                <StarRating />
                <span className="font-medium text-zinc-900">5/5</span>
                <span>from 120+ verified buyers</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, index) => (
                <TestimonialCard key={t.handle} {...t} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-200/80 bg-white py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm text-zinc-500 sm:text-base">
                Everything you need to know before buying. Still unsure?{' '}
                <a href="mailto:support@tokaccs.com" className="font-medium text-zinc-900 hover:underline">
                  Email us
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section id="support" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-card sm:p-12">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <Headphones className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Questions before you buy?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
                Our team responds within minutes. Reach out anytime — before or after your purchase.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href="mailto:support@tokaccs.com">
                  <Button variant="secondary" className="gap-2">
                    <Mail className="h-4 w-4" />
                    support@tokaccs.com
                  </Button>
                </a>
                <Button onClick={onPrimaryCta} className="gap-2">
                  Browse accounts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Avg. response under 30 min
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  24/7 email support
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Free replacements
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
