export type Product = {
  id: number;
  name: string;
  category: 'Stuffed Toys' | 'Keychains' | 'BTS Bombs' | 'Miniatures' | 'Animated Pictures';
  price: number;
  image: string;
  rating: number;
  popularity: number;
  'data-ai-hint': string;
  description: string;
};

export const products: Product[] = [
  {
    id: 13,
    name: 'RJ',
    category: 'Stuffed Toys',
    price: 29.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-1EsQM6wW5se-u2SHxlhXqn8BkiRi6hwug&s',
    rating: 4.8,
    popularity: 93,
    'data-ai-hint': 'plush toy',
    description: "Add the sleepy and smart Koya to your collection. This soft and cuddly plush toy, designed by RM, is perfect for any ARMY.",
  },
  {
    id: 14,
    name: 'Cooky',
    category: 'Stuffed Toys',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/51lNu0OWpwL._SX300_SY300_QL70_FMwebp_.jpg',
    rating: 4.9,
    popularity: 95,
    'data-ai-hint': 'pink bunny',
    description: "Bring home the energetic and tough bunny Cooky. This adorable plush, designed by Jungkook, is ready for any adventure.",
  },
  {
    id: 15,
    name: 'BT21 Keychain',
    category: 'Keychains',
    price: 12.99,
    image: 'https://www.lovekarnival.com/cdn/shop/products/BT21stuffedtoykeychain1.jpg',
    rating: 4.7,
    popularity: 88,
    'data-ai-hint': 'keychain toy',
    description: "Take your favorite BT21 characters wherever you go with this adorable keychain. A perfect accessory for any ARMY's bag or keys.",
  },
];
