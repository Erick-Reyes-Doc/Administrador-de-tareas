/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#424242', // Gris oscuro claro
          DEFAULT: '#333333', // Gris oscuro principal
          dark: '#212121', // Gris muy oscuro
        },
        secondary: {
          light: '#4CAF50', // Verde claro para detalles
          DEFAULT: '#388E3C', // Verde más oscuro
          dark: '#1B5E20', // Verde muy oscuro
        },
        background: '#121212', // Fondo oscuro
        surface: '#1E1E1E', // Fondo de tarjetas y elementos
        text: {
          dark: '#E0E0E0', // Texto claro
          light: '#BDBDBD', // Texto gris más suave
        },
        accent: '#BB86FC', // Púrpura para resaltar
        success: '#4CAF50', // Verde para éxito
        error: '#F44336', // Rojo para errores
        neutral: '#757575', // Gris neutro para bordes y textos secundarios
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(255, 255, 255, 0.1)', // Sombra ligera con opacidad
        'custom-md': '0 4px 8px rgba(255, 255, 255, 0.15)', // Sombra mediana
        'custom-dark': '0 6px 12px rgba(0, 0, 0, 0.5)', // Sombra más profunda
      },
      spacing: {
        18: '4.5rem', // Para algunos márgenes y rellenos personalizados
      },
    },
  },
  plugins: [],
}
