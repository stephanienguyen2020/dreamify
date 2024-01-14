/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StylePrimarySmall = ({ className, divClassName, text = "Button" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[8px] px-[24px] py-[12px] relative bg-dark-gray border border-solid border-black ${className}`}
    >
      <div
        className={`relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
