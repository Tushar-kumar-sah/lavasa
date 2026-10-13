import { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'coffee', label: 'Coffee & Brews' },
  { id: 'beverages', label: 'Refreshing Drinks' },
  { id: 'savoury', label: 'Savoury Bites & Baos' },
  { id: 'pizza-pasta', label: 'Pizza & Pasta' },
  { id: 'bakery-desserts', label: 'Bakery & Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & BREWS
  {
    id: 'c1',
    name: 'Artisan Cortado',
    category: 'coffee',
    categoryLabel: 'Coffee & Brews',
    price: 160,
    description: 'Double shot of freshly ground specialty espresso cut gently with equal parts steamed whole milk. Smooth, balanced, and intensely aromatic.',
    image: '/images/cortado.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: '120ml • Spanish Style'
  },
  {
    id: 'c2',
    name: 'Irish Hot Coffee',
    category: 'coffee',
    categoryLabel: 'Coffee & Brews',
    price: 190,
    description: 'Rich dark roast espresso steeped with warming non-alcoholic Irish cream notes and crowned with velvety floating vanilla cream.',
    image: '/images/irish-coffee.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: 'House Specialty'
  },
  {
    id: 'c3',
    name: 'Classic Velvet Flat White',
    category: 'coffee',
    categoryLabel: 'Coffee & Brews',
    price: 170,
    description: 'Double ristretto with micro-foamed milk poured with delicate floral latte art. Silky texture with lingering cacao notes.',
    image: '/images/latte-art.jpg',
    isVegetarian: true,
    portionOrNote: 'Hot • 180ml'
  },
  {
    id: 'c4',
    name: 'Affogato al Caffè',
    category: 'coffee',
    categoryLabel: 'Coffee & Brews',
    price: 180,
    description: 'A generous scoop of artisanal Madagascar vanilla bean gelato drowned in a freshly pulled scalding double espresso shot.',
    image: '/images/cortado.jpg',
    isVegetarian: true,
    portionOrNote: 'Italian Classic'
  },
  {
    id: 'c5',
    name: 'Cappuccino Lavassa',
    category: 'coffee',
    categoryLabel: 'Coffee & Brews',
    price: 150,
    description: 'Traditional 1:1:1 espresso, steamed milk, and dense froth, dusted with single-origin Dutch cocoa powder.',
    image: '/images/latte-art.jpg',
    isVegetarian: true,
    portionOrNote: 'Hot • 200ml'
  },

  // REFRESHING BEVERAGES
  {
    id: 'b1',
    name: 'Berry Hibiscus Cold Sparkler',
    category: 'beverages',
    categoryLabel: 'Refreshing Drinks',
    price: 180,
    description: 'Brewed wild hibiscus petals, crushed raspberries, fresh garden mint, and sparkling tonic water over hand-cut ice.',
    image: '/images/refreshing-drink.jpg',
    isVegetarian: true,
    portionOrNote: 'Chilled • 300ml'
  },
  {
    id: 'b2',
    name: 'Lavassa Belgian Iced Mocha',
    category: 'beverages',
    categoryLabel: 'Refreshing Drinks',
    price: 210,
    description: 'Blended Belgian dark chocolate ganache, espresso, cold milk, and crushed ice, finished with whipped cream curls.',
    image: '/images/lavassa-drink-special.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: 'Indulgent Frappé'
  },
  {
    id: 'b3',
    name: 'Kaffir Lime & Mint Cooler',
    category: 'beverages',
    categoryLabel: 'Refreshing Drinks',
    price: 160,
    description: 'Crushed Kolkata limes, aromatic kaffir leaves, cane sugar, and chilled fizz for an exhilarating midday refresh.',
    image: '/images/refreshing-drink.jpg',
    isVegetarian: true,
    portionOrNote: 'Signature Refresher'
  },

  // SAVOURY BITES & BAOS
  {
    id: 's1',
    name: 'Smoky BBQ Glazed Wings',
    category: 'savoury',
    categoryLabel: 'Savoury Bites & Baos',
    price: 280,
    description: 'Tender chicken wings slow-tossed in our house-crafted hickory smoked BBQ glaze, toasted sesame, and scallions.',
    image: '/images/bbq-chicken.jpg',
    isVegetarian: false,
    isBestseller: true,
    portionOrNote: '6 Pcs • Savoury Favourite'
  },
  {
    id: 's2',
    name: 'Steamed Asian Fluffy Baos',
    category: 'savoury',
    categoryLabel: 'Savoury Bites & Baos',
    price: 240,
    description: 'Pillowy cloud-soft lotus leaf buns packed with pickled cucumber, crushed peanuts, spicy sriracha mayo, and savoury fillings.',
    image: '/images/bao-buns.jpg',
    isVegetarian: true,
    portionOrNote: '2 Pcs • Steamed Fresh'
  },
  {
    id: 's3',
    name: 'Truffle & Herb Potato Bites',
    category: 'savoury',
    categoryLabel: 'Savoury Bites & Baos',
    price: 210,
    description: 'Crispy skin-on golden potatoes infused with white truffle essence, shaved aged parmesan, and roasted garlic aioli dip.',
    image: '/images/lavassa-pastries.jpg',
    isVegetarian: true,
    portionOrNote: 'Great for Sharing'
  },

  // PIZZA & PASTA
  {
    id: 'p1',
    name: 'Creamy Genovese Pesto Penne',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    price: 280,
    description: 'Al dente penne folded in freshly ground sweet Italian basil, pine nuts, cold-pressed olive oil, cream, and Parmigiano-Reggiano.',
    image: '/images/pesto-pasta.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: 'Classic Italian Recipe'
  },
  {
    id: 'p2',
    name: 'Margherita di Bufala Wood-Style Pizza',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    price: 320,
    description: 'Thin hand-stretched crust topped with crushed San Marzano tomato sugo, molten fresh mozzarella, and sweet garden basil leaves.',
    image: '/images/artisan-pizza.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: '10 Inch • Hand Tossed'
  },
  {
    id: 'p3',
    name: 'Smoked Chicken & Fiery Jalapeno Pizza',
    category: 'pizza-pasta',
    categoryLabel: 'Pizza & Pasta',
    price: 380,
    description: 'Shredded house-smoked chicken, spicy pickled jalapenos, sweet caramelised onions, and mozzarella on seasoned tomato base.',
    image: '/images/artisan-pizza.jpg',
    isVegetarian: false,
    portionOrNote: '10 Inch • Thin Crust'
  },

  // BAKERY & DESSERTS
  {
    id: 'd1',
    name: 'San Sebastián Cheesecake with Belgian Chocolate Pour',
    category: 'bakery-desserts',
    categoryLabel: 'Bakery & Desserts',
    price: 250,
    description: 'The iconic Burnt Basque cheesecake with deeply caramelised crust and an impossibly creamy, custardy center. Doused in warm Belgian chocolate table-side.',
    image: '/images/san-sebastian.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: 'House Signature • Behala Talk of the Town'
  },
  {
    id: 'd2',
    name: 'Italian Chocolate Bomboloni',
    category: 'bakery-desserts',
    categoryLabel: 'Bakery & Desserts',
    price: 150,
    description: 'Fried Italian brioche doughnut rolled in superfine sugar and generously bursting with silky hazelnut chocolate crema.',
    image: '/images/bomboloni.jpg',
    isVegetarian: true,
    isBestseller: true,
    portionOrNote: 'Fresh from Bakery'
  },
  {
    id: 'd3',
    name: 'Artisanal French Butter Croissant',
    category: 'bakery-desserts',
    categoryLabel: 'Bakery & Desserts',
    price: 160,
    description: 'Laminated with pure European butter for hundreds of whisper-thin, crispy, flaky honeycomb layers. Baked fresh every morning.',
    image: '/images/croissants.jpg',
    isVegetarian: true,
    portionOrNote: 'Daily Bake'
  },
  {
    id: 'd4',
    name: 'Parisian Choux à la Crème',
    category: 'bakery-desserts',
    categoryLabel: 'Bakery & Desserts',
    price: 150,
    description: 'Crisp craquelin choux pastry puff stuffed with chilled Madagascar vanilla diplomat cream and lightly dusted with snow sugar.',
    image: '/images/choux-pastry.jpg',
    isVegetarian: true,
    portionOrNote: 'French Patisserie'
  },
  {
    id: 'd5',
    name: 'Zesty Lemon Meringue Tartlet',
    category: 'bakery-desserts',
    categoryLabel: 'Bakery & Desserts',
    price: 180,
    description: 'Buttery sablé shortcrust shell filled with tart Meyer lemon curd and crowned with torched golden Italian meringue peaks.',
    image: '/images/lemon-tart.jpg',
    isVegetarian: true,
    portionOrNote: 'Chef’s Special'
  },
];
