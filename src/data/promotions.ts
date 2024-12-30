export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  discount: string;
}

export const promotions: Promotion[] = [
  {
    id: 'home-insurance',
    title: 'Home Insurance',
    description: 'Protect your home with our comprehensive coverage. Get 15% off when bundled with travel insurance.',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=400',
    discount: '15% OFF'
  },
  {
    id: 'car-insurance',
    title: 'Car Insurance',
    description: 'Bundle with travel insurance and save 20% on your auto coverage.',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400',
    discount: '20% OFF'
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    description: 'Secure your family\'s future. Special rates for travel insurance customers.',
    imageUrl: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=400',
    discount: '10% OFF'
  }
];