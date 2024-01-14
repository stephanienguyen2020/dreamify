/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IcoOtherLight = ({
  className,
  iconColorClassName,
  iconColor = "https://c.animaapp.com/pKgdbKN7/img/icon-color-4.svg",
}) => {
  return (
    <div className={`relative w-[24px] h-[24px] ${className}`}>
      <img
        className={`absolute w-[22px] h-[22px] top-px left-px ${iconColorClassName}`}
        alt="Icon color"
        src={iconColor}
      />
    </div>
  );
};
