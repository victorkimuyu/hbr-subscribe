/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GTA', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto'],
        'numeric-h': ['GT-Ext', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto'],
        'eyebrow': ['GT-Con', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto']
      }
    },
  },
  plugins: [],
}
