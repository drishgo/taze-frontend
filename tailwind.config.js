/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all your components are scanned for tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'], // Add Futura font
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#fbcfe8",
          
"primary-content": "#160016",
          
"secondary": "#009300",
          
"secondary-content": "#000800",
          
"accent": "#006a00",
          
"accent-content": "#d0e1ce",
          
"neutral": "#090c08",
          
"neutral-content": "#c6c7c6",
          
"base-100": "#2d2b41",
          
"base-200": "#262437",
          
"base-300": "#1f1d2e",
          
"base-content": "#d0d0d6",
          
"info": "#0092ca",
          
"info-content": "#00080f",
          
"success": "#00af34",
          
"success-content": "#000b01",
          
"warning": "#ffb600",
          
"warning-content": "#160c00",
          
"error": "#ff8b90",
          
"error-content": "#160707",
          },
        },
      ],
    },
}


