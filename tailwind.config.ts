import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libreBodoni: ["Libre Bodoni"],
        nunito: ["Nunito"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			colors: {
        black200: "#222",
        red100: "#A24D54",
        red200: "#C2153E",
        pink100: "#FFE7E9",
        pink200: "#FFDFE7",
        pink300: "#FFA3BA",
        pink400: "#FFD1DC",
        pink500: "#FFEAEC",
        pink600: "#FFB6C1",
        yellow100: "#C5A25D"
      },
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1504px",
      },
    },
  },
  plugins: [],
};
export default config;
