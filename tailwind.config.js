/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#FBD0D0",
        200: "#F7A1A1",
        300: "#F47171",
        400: "#F04242",
        500: "#EF3939",
        600: "#BD0F0F",
        700: "#8E0B0B",
        800: "#5E0808",
        900: "#2F0404",
      },
      secondary: {
        100: "#FBD0D0",
        200: "#F7A1A1",
        300: "#F37272",
        400: "#EF4343",
        500: "#470606",
        600: "#BC1010",
        700: "#8D0C0C",
        800: "#5E0808",
        900: "#2F0404",
      },
      accent: {
        100: "#D3F8F8",
        200: "#A8F0F0",
        300: "#7CE9E9",
        400: "#50E2E2",
        500: "#3BDEDE",
        600: "#1DAFAF",
        700: "#168383",
        800: "#0F5757",
        900: "#072C2C",
      },
      background: "#0D0D0C",
      text: "#EEEDED",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
