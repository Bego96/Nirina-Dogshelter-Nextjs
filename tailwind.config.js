/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-img": "url('/images/Nirina_za_Landing_Page/Hero_Image.png')",
          "aboutUs-img": "url('/images/Nirina_za_Landing_Page/About_Us_Image.png')",
      },
    },
    maxWidth: {
      "content": "max-content"
    },
    colors: {
      "dark-brown": 'rgb(139,69,19)',
      "yellow": 'rgb(255,215,0)',
      "bordeaux-brown":'rgb(255,233,192)',
      "light-brown": 'rgb(255,244,224)',
      "orange": '#FFA500',
      "dark-orange": 'rgb(176, 116, 42)',
      "white": 'rgb(255, 255, 255)',
      "black": 'rgb(0,0,0)',
      "slate-600": 'rgb(71,85,105)',
      "slate-700": ' rgb(51,65,85)',
      "bordeaux-light-green": '#87B7B6'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
