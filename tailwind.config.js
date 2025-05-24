/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1f93ff',
          dark: '#3b82f6'
        },
        chatwoot: {
          blue: '#1f93ff',
          green: '#10b981',
          yellow: '#f59e0b',
          red: '#ef4444',
          purple: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}