import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Accounts', href: '#pricing' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' }
  ],
  legal: [
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Refund Policy', href: '#refund' },
    { label: 'Privacy Policy', href: '#privacy' }
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white">
                T
              </div>
              <span className="text-sm font-semibold text-zinc-900">Tokaccs</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              Premium U.S. TikTok accounts for creators, agencies, and brands.
              Verified, aged, and delivered fast.
            </p>
            <div className="space-y-2 text-sm text-zinc-500">
              <a
                href="mailto:support@tokaccs.com"
                className="flex items-center gap-2 transition-colors hover:text-zinc-900"
              >
                <Mail className="h-4 w-4" />
                support@tokaccs.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                United States
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Product
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Guarantees
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>24-hour money-back guarantee</li>
              <li>Free account replacement</li>
              <li>Secure Square checkout</li>
              <li>24/7 email support</li>
            </ul>
          </div>
        </div>

        <div id="terms" className="mt-12 space-y-8 border-t border-zinc-100 pt-10">
          <PolicyBlock
            title="Terms of Service"
            content="By purchasing from Tokaccs, you agree to use accounts responsibly and in compliance with applicable laws. Accounts are sold as-is with credentials for immediate use. Tokaccs is not affiliated with TikTok or ByteDance. You are responsible for account security after delivery, including changing passwords and enabling two-factor authentication."
          />
          <PolicyBlock
            id="refund"
            title="Refund Policy"
            content="We offer a 24-hour money-back guarantee on all purchases. If your account cannot be accessed, has pre-existing issues, or does not match the listed specifications, contact support@tokaccs.com within 24 hours for a full refund or free replacement. No questions asked."
          />
          <PolicyBlock
            id="privacy"
            title="Privacy Policy"
            content="We collect only the information necessary to process your order and deliver account credentials (email address and payment details via Square). We do not sell your data to third parties. Payment processing is handled securely by Square. Contact support@tokaccs.com to request data deletion."
          />
        </div>
      </div>

      <div className="border-t border-zinc-100 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Tokaccs. All rights reserved.</p>
          <p>
            Not affiliated with TikTok or ByteDance. All trademarks belong to their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

const PolicyBlock: React.FC<{ title: string; content: string; id?: string }> = ({
  title,
  content,
  id
}) => (
  <div id={id} className="scroll-mt-28">
    <h3 className="mb-2 text-sm font-semibold text-zinc-900">{title}</h3>
    <p className="text-xs leading-relaxed text-zinc-500">{content}</p>
  </div>
);
