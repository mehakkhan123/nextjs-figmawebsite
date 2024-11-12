import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop-lg': '1152px',
      // => @media (min-width: 1024px) { ... }

      'desktop-xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      'desktop-2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
