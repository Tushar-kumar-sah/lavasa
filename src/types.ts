export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'beverages' | 'savoury' | 'pizza-pasta' | 'bakery-desserts';
  categoryLabel: string;
  price: number;
  description: string;
  image: string;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  portionOrNote?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  content: string;
  highlightDish?: string;
  verifiedSource: 'Google Reviews' | 'Zomato' | 'Swiggy Dineout';
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'ambiance' | 'coffee' | 'desserts' | 'food';
  categoryLabel: string;
  isRealStorePhoto?: boolean;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor-cozy' | 'botanical-corner' | 'window-seat' | 'no-preference';
  specialRequests: string;
}
