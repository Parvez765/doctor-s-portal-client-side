/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
                  
          "primary": "#ec4899",
                  
          "secondary": "#007a41",
                  
          "accent": "#f9eaae",
                  
          "neutral": "#2E253C",
                  
          "base-100": "#313335",
                  
          "info": "#279DDD",
                  
          "success": "#69E8D5",
                  
          "warning": "#F7D21D",
                  
          "error": "#F54753",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
