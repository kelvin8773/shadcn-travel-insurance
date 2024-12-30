export interface InsurancePlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export const insurancePlans: InsurancePlan[] = [
  {
    id: 'basic',
    name: 'Basic Coverage',
    price: 49.99,
    features: [
      'Emergency Medical Coverage up to $50,000',
      'Trip Cancellation Coverage',
      'Lost Baggage Protection up to $500',
      '24/7 Emergency Assistance'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Coverage',
    price: 89.99,
    recommended: true,
    features: [
      'Emergency Medical Coverage up to $100,000',
      'Trip Cancellation & Interruption Coverage',
      'Lost Baggage Protection up to $1,000',
      'Flight Delay Coverage',
      '24/7 Emergency Assistance',
      'Adventure Sports Coverage'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Coverage',
    price: 149.99,
    features: [
      'Emergency Medical Coverage up to $250,000',
      'Comprehensive Trip Cancellation & Interruption',
      'Lost Baggage Protection up to $2,500',
      'Flight Delay & Missed Connection Coverage',
      'Adventure Sports & Activities Coverage',
      'Rental Car Protection',
      'Premium 24/7 Concierge Service'
    ]
  }
];