/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'soft-purple': '#A855F7',
        'dark-teal': '#0F766E',
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #FB923C 0%, #A855F7 100%)',
      },
    },
  },
  plugins: [],
}