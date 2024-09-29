import type { Config } from "tailwindcss";

type ColorObject = {
  [key: string]: string;
};

const tailwindColors: ColorObject = {
  white: "#FFFFFF",
  primary: "#29AFBD",
  secondary : "#42246E",
  "secondary-content": "#534667",
  "secondary-bg" : "#EFEDF2",
  warning: "#F7A506",
  neutral: "#F5F5F5",
  "neutral_content" : "#282828",
  "neutral-shadow" : "#B6ADC2",
  "neutral-base": "#9689A8",
  accent: "#FF005C",
  error: "#f87272",
}

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: tailwindColors,
    container: {
      center: true
    },
    extend: {
    
    },
  },
  plugins: [require("@vicgutt/tailwindcss-debug")],
};
export default config;
