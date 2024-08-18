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
        primary: {
          50: "#F1F1F1",
          100: "#DFDFDF",
          200: "#FFFFFF",
          300: "#4ECB71",
          400: "#20C459",
          500: "#1EB853",
        },
      },
      screens: {
        largerDesktop: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        mediumDesktop: { max: "1441px" },
        // => @media (max-width: 1441px) { ... }

        desktop: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        tabletLandscape: { max: "1116px" },
        // => @media (max-width: 1023px) { ... }

        tabletCustom: { max: "1000px" },
        // => @media (max-width: 1000px) { ... }

        tabletMedium: { max: "910px" },
        // => @media (max-width: 900px) { ... }

        tabletPortrait: { max: "770px" },
        // => @media (max-width: 767px) { ... }

        phone: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        midPhone: { max: "455px" },
        // => @media (max-width: 450px) { ... }

        smallPhone: { max: "395px" },
        //=> @media (max-width: 380px) { ... }

        smallestPhone: { max: "328px" },
        //=> @media (max-width: 320px) { ... }
      },
      keyframes: {
        rotate: {
          to: { transform: "rotate(1turn)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 1s infinite linear",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
