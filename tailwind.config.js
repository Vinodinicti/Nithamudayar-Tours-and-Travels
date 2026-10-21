/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          espresso: '#342521',
          'espresso-dark': '#241815',
          'espresso-light': '#44322d',
          divider: '#352925',
          gold: '#D4AF37',
          'gold-bright': '#F3C64F',
          'gold-light': '#FCF6BA',
          'gold-dark': '#AA771C',
          card: '#5B6767',
          'card-dark': '#485252',
          charcoal: '#1E1E1E',
          surface: '#FDFBF7',
          whatsapp: '#25D366',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
