/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavassa: {
          ivory: '#F7F2E8',
          cream: '#EFE5D5',
          'cream-dark': '#E5D6C1',
          sage: '#78856A',
          'sage-light': '#98A58A',
          forest: '#293D30',
          'forest-dark': '#1C2B22',
          caramel: '#A8754E',
          'caramel-light': '#C18D64',
          coffee: '#493328',
          'coffee-dark': '#34231A',
          amber: '#D9A45B',
          'amber-light': '#E9B973',
          sand: '#FAF6EE'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 61, 48, 0.07)',
        'warm': '0 8px 30px -4px rgba(73, 51, 40, 0.12)',
        'glow': '0 0 25px rgba(217, 164, 91, 0.35)',
      }
    },
  },
  plugins: [],
}
