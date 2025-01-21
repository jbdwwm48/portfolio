/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Chemin vers le fichier HTML principal
    './src/**/*.{html,js}',  // Chemins vers les fichiers HTML et JS à analyser
  ],
  theme: {
    extend: {
      colors: {
        'ice-blue': '#a0e9f4', // Ajout de la couleur ice-blue
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Ajout de la police Montserrat pour le thème sans-serif
      },
    },
  },
  plugins: [],
}
