/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdarkcanvas: "var(--bgdarkcanvas)",
        bgdarkmuted: "var(--bgdarkmuted)",
        bgdarksubtle: "var(--bgdarksubtle)",
        bgdarksurface: "var(--bgdarksurface)",
        bglightsubtle: "var(--bglightsubtle)",
        "dark-gray": "var(--dark-gray)",
        fgdefault: "var(--fgdefault)",
        fgdisabled: "var(--fgdisabled)",
        fgmuted: "var(--fgmuted)",
        "fgon-accent": "var(--fgon-accent)",
        "fgon-disabled": "var(--fgon-disabled)",
        fgsubtle: "var(--fgsubtle)",
        "foundation-greygrey-200": "var(--foundation-greygrey-200)",
        "foundationgreygrey-500": "var(--foundationgreygrey-500)",
        "light-grey": "var(--light-grey)",
        "neutral-6": "var(--neutral-6)",
        primarydarker: "var(--primarydarker)",
        primarydarkest: "var(--primarydarkest)",
        primarydefault: "var(--primarydefault)",
        primarydisabled: "var(--primarydisabled)",
        primarylighter: "var(--primarylighter)",
        primarylightest: "var(--primarylightest)",
        secondarydarker: "var(--secondarydarker)",
        secondarydarkest: "var(--secondarydarkest)",
        secondarydefault: "var(--secondarydefault)",
        secondarylighter: "var(--secondarylighter)",
        secondarylightest: "var(--secondarylightest)",
        tertiarydefault: "var(--tertiarydefault)",
        "variable-collection-bg-light-canvas": "var(--variable-collection-bg-light-canvas)",
        "variable-collection-bg-light-muted": "var(--variable-collection-bg-light-muted)",
        "variable-collection-bg-light-surface": "var(--variable-collection-bg-light-surface)",
        white: "var(--white)",
      },
      fontFamily: {
        "14-semibold": "var(--14-semibold-font-family)",
        "body-text-regular": "var(--body-text-regular-font-family)",
        "body-text-semibold": "var(--body-text-semibold-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h1-mobile": "var(--heading-h1-mobile-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h2-mobile": "var(--heading-h2-mobile-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h3-mobile": "var(--heading-h3-mobile-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h4-mobile": "var(--heading-h4-mobile-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h5-mobile": "var(--heading-h5-mobile-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "heading-h6-mobile": "var(--heading-h6-mobile-font-family)",
        "place-holder-regular": "var(--place-holder-regular-font-family)",
        "small-text-1-regular": "var(--small-text-1-regular-font-family)",
        "text-large-bold": "var(--text-large-bold-font-family)",
        "text-large-extra-bold": "var(--text-large-extra-bold-font-family)",
        "text-large-light": "var(--text-large-light-font-family)",
        "text-large-link": "var(--text-large-link-font-family)",
        "text-large-medium": "var(--text-large-medium-font-family)",
        "text-large-normal": "var(--text-large-normal-font-family)",
        "text-large-semi-bold": "var(--text-large-semi-bold-font-family)",
        "text-medium-bold": "var(--text-medium-bold-font-family)",
        "text-medium-extra-bold": "var(--text-medium-extra-bold-font-family)",
        "text-medium-light": "var(--text-medium-light-font-family)",
        "text-medium-link": "var(--text-medium-link-font-family)",
        "text-medium-medium": "var(--text-medium-medium-font-family)",
        "text-medium-normal": "var(--text-medium-normal-font-family)",
        "text-medium-semi-bold": "var(--text-medium-semi-bold-font-family)",
        "text-regular-bold": "var(--text-regular-bold-font-family)",
        "text-regular-extra-bold": "var(--text-regular-extra-bold-font-family)",
        "text-regular-light": "var(--text-regular-light-font-family)",
        "text-regular-link": "var(--text-regular-link-font-family)",
        "text-regular-medium": "var(--text-regular-medium-font-family)",
        "text-regular-normal": "var(--text-regular-normal-font-family)",
        "text-regular-semi-bold": "var(--text-regular-semi-bold-font-family)",
        "text-small-bold": "var(--text-small-bold-font-family)",
        "text-small-extra-bold": "var(--text-small-extra-bold-font-family)",
        "text-small-light": "var(--text-small-light-font-family)",
        "text-small-link": "var(--text-small-link-font-family)",
        "text-small-medium": "var(--text-small-medium-font-family)",
        "text-small-normal": "var(--text-small-normal-font-family)",
        "text-small-semi-bold": "var(--text-small-semi-bold-font-family)",
        "text-tiny-bold": "var(--text-tiny-bold-font-family)",
        "text-tiny-extra-bold": "var(--text-tiny-extra-bold-font-family)",
        "text-tiny-light": "var(--text-tiny-light-font-family)",
        "text-tiny-link": "var(--text-tiny-link-font-family)",
        "text-tiny-medium": "var(--text-tiny-medium-font-family)",
        "text-tiny-normal": "var(--text-tiny-normal-font-family)",
        "text-tiny-semi-bold": "var(--text-tiny-semi-bold-font-family)",
      },
      boxShadow: {
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        xlarge: "var(--xlarge)",
        xsmall: "var(--xsmall)",
        xxlarge: "var(--xxlarge)",
        xxsmall: "var(--xxsmall)",
      },
    },
  },
  plugins: [],
};
