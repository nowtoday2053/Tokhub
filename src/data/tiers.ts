export type Tier = {
  name: string;
  description: string;
  price: string;
  unitLabel: string;
  badge?: string;
  highlighted?: boolean;
  showBogo?: boolean;
  buyUrl: string;
  stockLeft: number;
  specs: { label: string; value: string }[];
  features: string[];
};

export const tiers: Tier[] = [
  {
    name: 'Starter U.S. Account',
    description: 'Perfect for testing one niche or your first U.S. TikTok page.',
    price: '$10',
    unitLabel: 'account',
    showBogo: true,
    stockLeft: 7,
    buyUrl: 'https://square.link/u/gTbWmadX',
    specs: [
      { label: 'Account age', value: '1–2 months' },
      { label: 'Followers', value: '0–50' },
      { label: 'Niche', value: 'General / any' },
      { label: 'Warm-up', value: 'Pre-warmed' },
      { label: 'Delivery', value: 'Under 1 hour' }
    ],
    features: [
      'U.S. IP + email verified',
      'Clean history, no bans',
      'Full login credentials included',
      '24-hour replacement guarantee',
      '24/7 email support'
    ]
  },
  {
    name: 'Aged Creator Account',
    description: 'Higher trust with the algorithm. Best for consistent posting.',
    price: '$20',
    unitLabel: '5 accounts',
    badge: 'Most popular',
    highlighted: true,
    stockLeft: 3,
    buyUrl: 'https://square.link/u/EFPzubkh',
    specs: [
      { label: 'Account age', value: '3–6 months' },
      { label: 'Followers', value: '100–500' },
      { label: 'Niche', value: 'Lifestyle / creator' },
      { label: 'Warm-up', value: 'Fully warmed' },
      { label: 'Delivery', value: 'Under 1 hour' }
    ],
    features: [
      '5 Aged U.S. accounts',
      'Algorithm-trusted aged accounts',
      '5 accounts — run multiple pages',
      '24-hour replacement guarantee',
      'Priority 24/7 support'
    ]
  },
  {
    name: 'Agency Bundle',
    description: 'Volume pricing for teams testing niches, hooks, and formats.',
    price: '$50',
    unitLabel: '10 accounts',
    stockLeft: 2,
    buyUrl: 'https://square.link/u/F7CbDUWr',
    specs: [
      { label: 'Account age', value: '3–6 months' },
      { label: 'Followers', value: '100–500 each' },
      { label: 'Niche', value: 'Mixed niches' },
      { label: 'Warm-up', value: 'Fully warmed' },
      { label: 'Delivery', value: 'Under 24 hours' }
    ],
    features: [
      '10 aged U.S. accounts',
      'Test multiple niches at once',
      'Bulk discount — save 60%',
      '24-hour replacement guarantee',
      'Dedicated agency support line'
    ]
  }
];
