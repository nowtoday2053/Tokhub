import React from 'react';
import { CreditCard, Lock, RefreshCw, ShieldCheck } from 'lucide-react';

const PaymentIcons = () => (
  <div className="flex items-center gap-2">
    <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-semibold tracking-wide text-zinc-600">
      VISA
    </span>
    <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-semibold tracking-wide text-zinc-600">
      MC
    </span>
    <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-semibold tracking-wide text-indigo-600">
      square
    </span>
  </div>
);

export const TrustBar: React.FC = () => {
  const items = [
    { icon: Lock, label: 'Secure Checkout' },
    { icon: ShieldCheck, label: '24hr Money-Back Guarantee' },
    { icon: RefreshCw, label: 'Free Replacement' },
    { icon: CreditCard, label: 'Square Payments' }
  ];

  return (
    <div className="border-y border-zinc-200/80 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs font-medium text-zinc-600">
              <Icon className="h-3.5 w-3.5 text-emerald-600" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <PaymentIcons />
      </div>
    </div>
  );
};
