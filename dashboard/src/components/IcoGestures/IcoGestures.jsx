/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IcoGestures = ({
  className,
  iconColorClassName,
  iconColor = "https://c.animaapp.com/pKgdbKN7/img/icon-color-3.svg",
}) => {
  return (
    <div className={`relative w-[24px] h-[24px] ${className}`}>
      <img
        className={`absolute w-[20px] h-[20px] top-[2px] left-[2px] ${iconColorClassName}`}
        alt="Icon color"
        src={iconColor}
      />
    </div>
  );
};
