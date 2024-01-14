/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdarkcanvas: "var(--bgdarkcanvas)",
        bgdarksurface: "var(--bgdarksurface)",
        "dark-gray": "var(--dark-gray)",
        fgdisabled: "var(--fgdisabled)",
        "fgon-accent": "var(--fgon-accent)",
        "light-grey": "var(--light-grey)",
        primarydefault: "var(--primarydefault)",
        primarylighter: "var(--primarylighter)",
        primarylightest: "var(--primarylightest)",
        tertiarydefault: "var(--tertiarydefault)",
        white: "var(--white)",
      },
      fontFamily: {
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "text-medium-bold": "var(--text-medium-bold-font-family)",
        "text-medium-normal": "var(--text-medium-normal-font-family)",
        "text-regular-medium": "var(--text-regular-medium-font-family)",
        "text-regular-normal": "var(--text-regular-normal-font-family)",
        "text-regular-semi-bold": "var(--text-regular-semi-bold-font-family)",
        "text-small-link": "var(--text-small-link-font-family)",
        "text-small-normal": "var(--text-small-normal-font-family)",
        "text-small-semi-bold": "var(--text-small-semi-bold-font-family)",
        "text-tiny-normal": "var(--text-tiny-normal-font-family)",
      },
    },
  },
  plugins: [],
};
