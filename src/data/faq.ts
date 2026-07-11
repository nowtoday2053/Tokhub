export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'Are these accounts safe to use?',
    answer:
      'Every account is manually verified before delivery — no bans, no shadowbans, clean history.'
  },
  {
    question: 'How does delivery work?',
    answer:
      'After secure Stripe checkout, login credentials (email, password, and TikTok access details) are sent to your email within 1 hour — usually instantly. For bulk orders, delivery completes within 24 hours.'
  },
  {
    question: 'What is your refund and replacement policy?',
    answer:
      'We offer a 24-hour money-back guarantee and free replacement if you cannot log in or the account has issues. Email support@tokaccs.com with your order details — no runaround, no hoops.'
  }
];
