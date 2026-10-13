import { ReviewItem } from '../types';

export const REVIEWS_SUMMARY = {
  averageRating: 4.4,
  totalReviews: 268,
  pricePerPerson: '₹200 – ₹400',
  location: 'Behala, Kolkata',
  vibe: 'Cozy Botanical Café & Artisan Bakery'
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Priyanka Mukherjee',
    rating: 5,
    relativeTime: '2 weeks ago',
    content: 'Hands down the coziest cafe in Behala! The warm rattan lighting and lush green decor give it such a soothing European vibe. Their Cortado coffee is legitimately top-notch, and the San Sebastián cheesecake with hot chocolate pour is heavenly.',
    highlightDish: 'San Sebastián Cheesecake & Cortado',
    verifiedSource: 'Google Reviews'
  },
  {
    id: 'r2',
    author: 'Anirban Dasgupta',
    rating: 5,
    relativeTime: '1 month ago',
    content: 'Cafe Lavassa is a hidden gem right opposite IDFC Bank on Bhupen Roy Road. Loved the Irish hot coffee — perfectly balanced warmth and cream. The creamy pesto pasta was fresh and flavorful. Great place to catch up with friends.',
    highlightDish: 'Irish Hot Coffee & Pesto Pasta',
    verifiedSource: 'Google Reviews'
  },
  {
    id: 'r3',
    author: 'Debasmita Roy',
    rating: 5,
    relativeTime: '3 weeks ago',
    content: 'The bakery counter has some of the freshest croissants and bombolinis in South Kolkata! Beautiful white wicker chairs, aesthetic corners for photos, and very courteous staff. Loved every minute of our afternoon here.',
    highlightDish: 'Italian Bomboloni & Butter Croissant',
    verifiedSource: 'Google Reviews'
  },
  {
    id: 'r4',
    author: 'Siddhartha Sen',
    rating: 4,
    relativeTime: '2 months ago',
    content: 'Super cute neighborhood café. The BBQ chicken wings and thin-crust pizza were delicious. Prices are genuinely reasonable for the quality and ambiance (around ₹250–350 per person). Will definitely return.',
    highlightDish: 'Smoky BBQ Wings & Wood-Style Pizza',
    verifiedSource: 'Google Reviews'
  },
  {
    id: 'r5',
    author: 'Sneha Bhattacharya',
    rating: 5,
    relativeTime: 'Recent',
    content: 'The Choux à la Crème and Belgian iced mocha made my weekend! The warm amber glow inside Cafe Lavassa makes you forget the Kolkata traffic outside. Truly a little escape.',
    highlightDish: 'Choux à la Crème & Belgian Mocha',
    verifiedSource: 'Google Reviews'
  }
];
