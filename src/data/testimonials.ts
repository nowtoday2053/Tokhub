export type Testimonial = {
  name: string;
  handle: string;
  role: string;
  quote: string;
  result: string;
  photoUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jordan M.',
    handle: '@jordancreates',
    role: 'Content Creator',
    quote:
      'Got my account in 40 minutes. First video hit 52K views — something that never happened on my old account. Zero shadowban issues.',
    result: '52K views on first post',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop'
  },
  {
    name: 'Alex T.',
    handle: '@alextmedia',
    role: 'Agency Owner',
    quote:
      'We manage 8 brand accounts and needed reliable U.S. aged accounts fast. Tokaccs delivered clean logins and support replied in under 20 minutes.',
    result: '8 accounts deployed in 1 day',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop'
  },
  {
    name: 'Sam K.',
    handle: '@samkbuilds',
    role: 'SaaS Founder',
    quote:
      "I'm based in Europe and couldn't get U.S. reach before. Logged in with a residential proxy and posted same day. Views went from hundreds to thousands.",
    result: '10x view increase in week 1',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop'
  },
  {
    name: 'Priya R.',
    handle: '@priyacontent',
    role: 'UGC Creator',
    quote:
      'The aged account felt legit from day one. No weird flags, no verification loops. Replaced one account within hours when I had a login issue.',
    result: 'Replaced within 2 hours',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop'
  },
  {
    name: 'Marcus L.',
    handle: '@marcuslabs',
    role: 'Growth Lead',
    quote:
      'Bought the agency bundle to A/B test hooks across niches. Three accounts are already profitable. The value-per-dollar is honestly unmatched.',
    result: '3 profitable accounts in 2 weeks',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop'
  },
  {
    name: 'Elena V.',
    handle: '@elenaviral',
    role: 'Influencer',
    quote:
      'I was skeptical about buying accounts but the process was as smooth as any SaaS checkout. Credentials arrived instantly, account was exactly as described.',
    result: 'Instant delivery, as promised',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop'
  }
];
