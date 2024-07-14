import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#ff385c',
        'airbnb-pink': '#d50027',
        'airbnb-dark': '#d50027',
      }
    },
  },
  plugins: [],
};
export default config;
