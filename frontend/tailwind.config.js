/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kara: ['Karantina', 'system-ui'],
        marv: ['Marvel', 'sans-serif'],
        lale: ['Lalezar', 'system-ui'],
      },
    },
    screens: {
      'low': '320px',
      'mm' : '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

