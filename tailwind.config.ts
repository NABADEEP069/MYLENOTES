import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {     
    extend: {
      colors: {
        'text': '#e8eefc',
        'background': '#010409',
        'primary': '#8ca8f2',
        'secondary': '#2412a0',
        'accent': '#6b3fe9',
       },
    },
  },
  plugins: [],
};
export default config;
