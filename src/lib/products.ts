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
  {
    id: 16,
    name: 'BT21 Koya Cushion',
    category: 'Stuffed Toys',
    price: 34.99,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1blJhuoJBj5iSlp5sxHGPk1n-oHADP3jAL5U6ohVJN_Oo2zmR2NoDhS8LHpKo2cxcXaNozHqYcSdbnGZHwEBzpTj1EuOktytvQN9PWCz8manIRlgWhmrfaQ',
    rating: 4.9,
    popularity: 90,
    'data-ai-hint': 'cushion toy',
    description: 'A comfortable and cute Koya cushion to decorate your space. Perfect for relaxing while listening to your favorite BTS tracks.'
  },
  {
    id: 17,
    name: 'Tata',
    category: 'Stuffed Toys',
    price: 29.99,
    image: 'https://images-cdn.ubuy.co.in/6389cd1154410779180d5656-aileen-bts-bt21-stuffed-toy-7-inches.jpg',
    rating: 4.8,
    popularity: 94,
    'data-ai-hint': 'heart plushie',
    description: 'Bring home the curious and unique Tata. This adorable heart-shaped plush, designed by V, is a perfect cuddle companion.'
  },
  {
    id: 18,
    name: 'Chimmy',
    category: 'Stuffed Toys',
    price: 29.99,
    image: 'https://images-cdn.ubuy.co.in/634e48659c9f552b404b4fd5-bt21-official-merchandise-baby-chimmy.jpg',
    rating: 4.8,
    popularity: 92,
    'data-ai-hint': 'yellow puppy',
    description: 'Get the passionate and hardworking Chimmy plush toy. This adorable yellow puppy, designed by Jimin, will brighten up any room.'
  },
  {
    id: 19,
    name: 'Shooky',
    category: 'Stuffed Toys',
    price: 22.99,
    image: 'https://m.media-amazon.com/images/I/61fp9GH6orL.jpg',
    rating: 4.7,
    popularity: 89,
    'data-ai-hint': 'cookie plushie',
    description: 'Add the mischievous and sweet Shooky to your collection. This little cookie plush, designed by Suga, is full of personality.'
  },
  {
    id: 20,
    name: 'Mang',
    category: 'Stuffed Toys',
    price: 29.99,
    image: 'https://m.media-amazon.com/images/I/51b4NOyhx9L.jpg',
    rating: 4.8,
    popularity: 91,
    'data-ai-hint': 'masked horse',
    description: 'Bring home the mysterious and talented dancer Mang. This masked horse plush, designed by J-Hope, is ready to dance its way into your heart.'
  }
];
