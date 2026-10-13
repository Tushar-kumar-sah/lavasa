import { GalleryImage } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'ambiance', label: 'Interior & Ambiance' },
  { id: 'coffee', label: 'Artisan Coffee & Drinks' },
  { id: 'desserts', label: 'Bakery & Sweet Treats' },
  { id: 'food', label: 'Kitchen & Savouries' },
] as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/lavassa-storefront-real.png',
    title: 'The Iconic Storefront at Dusk',
    caption: 'Illuminated golden Lavassa Café & Bakery signage, glass facade, and welcoming staircase on Bhupen Roy Road, Behala.',
    category: 'ambiance',
    categoryLabel: 'Interior & Ambiance',
    isRealStorePhoto: true
  },
  {
    id: 'g2',
    src: '/images/botanical-interior.jpg',
    title: 'Warm Rattan Pendants & Greenery',
    caption: 'Soft amber woven pendant lights suspended beneath lush hanging botanical foliage and natural wood textures.',
    category: 'ambiance',
    categoryLabel: 'Interior & Ambiance'
  },
  {
    id: 'g3',
    src: '/images/san-sebastian.jpg',
    title: 'San Sebastián Basque Cheesecake',
    caption: 'Deeply caramelized Basque cheesecake with molten center, awaiting the warm Belgian chocolate drip.',
    category: 'desserts',
    categoryLabel: 'Bakery & Sweet Treats'
  },
  {
    id: 'g4',
    src: '/images/lavassa-chocolate-pour.jpg',
    title: 'Decadent Chocolate Pour',
    caption: 'Rich melted Belgian chocolate cascade poured table-side over fresh bakery confections.',
    category: 'desserts',
    categoryLabel: 'Bakery & Sweet Treats',
    isRealStorePhoto: true
  },
  {
    id: 'g5',
    src: '/images/cortado.jpg',
    title: 'Specialty Artisan Cortado',
    caption: 'A precise ratio of rich espresso and velvety microfoam served in traditional Spanish glassware.',
    category: 'coffee',
    categoryLabel: 'Artisan Coffee & Drinks'
  },
  {
    id: 'g6',
    src: '/images/wicker-patio.jpg',
    title: 'Wicker Chairs & Sunlit Corners',
    caption: 'White wicker seating paired with earthy cushions and natural European café charm.',
    category: 'ambiance',
    categoryLabel: 'Interior & Ambiance'
  },
  {
    id: 'g7',
    src: '/images/lavassa-pastries.jpg',
    title: 'Fresh Daily Bakes & Savoury Tarts',
    caption: 'Golden hand-rolled shortcrust tarts and artisanal bakery delicacies on wooden display boards.',
    category: 'desserts',
    categoryLabel: 'Bakery & Sweet Treats',
    isRealStorePhoto: true
  },
  {
    id: 'g8',
    src: '/images/latte-art.jpg',
    title: 'Morning Latte Rosette',
    caption: 'Micro-foamed milk poured with delicate floral latte art by our passionate baristas.',
    category: 'coffee',
    categoryLabel: 'Artisan Coffee & Drinks'
  },
  {
    id: 'g9',
    src: '/images/artisan-pizza.jpg',
    title: 'Wood-Style Margherita Pizza',
    caption: 'Fresh basil leaves, bubbling mozzarella, and San Marzano tomato sugo on crisp hand-stretched dough.',
    category: 'food',
    categoryLabel: 'Kitchen & Savouries'
  },
  {
    id: 'g10',
    src: '/images/pesto-pasta.jpg',
    title: 'Creamy Genovese Pesto Pasta',
    caption: 'Handmade pasta folded with crushed sweet basil, pine nuts, and aged Italian cheese.',
    category: 'food',
    categoryLabel: 'Kitchen & Savouries'
  },
  {
    id: 'g11',
    src: '/images/croissants.jpg',
    title: 'Honeycomb Butter Croissants',
    caption: 'Flaky, buttery French laminated croissants freshly baked every morning.',
    category: 'desserts',
    categoryLabel: 'Bakery & Sweet Treats'
  },
  {
    id: 'g12',
    src: '/images/friends-cafe.jpg',
    title: 'Moments Worth Slowing Down For',
    caption: 'Friends reconnecting over cups of coffee, laughs, and comforting food in our botanical haven.',
    category: 'ambiance',
    categoryLabel: 'Interior & Ambiance'
  }
];
