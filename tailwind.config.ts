import type { Config } from 'tailwindcss';

const config: Config = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/component/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
],


  theme: {
    extend: {
      colors: {
        primary: '#B10B0B', 
        secondary: '#F9680E',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-rtl"),
  ],
};

export default config;
