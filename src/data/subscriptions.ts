import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 499,
    duration: 'month',
    features: [
      'Profile listing',
      'Up to 5 job applications per month',
      'Email support'
    ],
    recommended: false
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 999,
    duration: 'month',
    features: [
      'Profile listing',
      'Up to 20 job applications per month',
      'Featured in search results',
      'Email & phone support'
    ],
    recommended: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1999,
    duration: 'month',
    features: [
      'Profile listing',
      'Unlimited job applications',
      'Featured in search results',
      'Priority listing',
      'Dedicated account manager',
      '24/7 support'
    ],
    recommended: false
  }
];