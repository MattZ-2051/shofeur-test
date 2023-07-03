/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    backgroundColor: {
      'bg-overlay-color': 'rgba(2,2,2, 0.76)'
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')]
};
