/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1a3a5f',
          darkBlue: '#0f2538',
          lightBlue: '#e8f0f7',
          yellow: '#f4a261',
          orange: '#e76f51',
        },
      },
    },
  },
  plugins: [],
}
