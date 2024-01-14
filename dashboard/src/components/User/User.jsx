/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const User = ({
  jakeClassName,
  jakeClassNameOverride,
  jake = "https://c.animaapp.com/pKgdbKN7/img/jake-3@2x.png",
  groupClassName,
  nameClassName,
  text = "Mark Ferdinand",
  nameClassNameOverride,
  text1 = "mkferdinand@gmail.com",
  inputType = "email",
}) => {
  return (
    <div className="flex w-[168px] items-center gap-[15px] relative">
      <div
        className={`relative w-[44px] h-[44px] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] rounded-[100px] border-2 border-solid border-[#e6e5f9] ${jakeClassName}`}
      >
        <img
          className={`absolute w-[40px] h-[40px] top-0 left-0 object-cover ${jakeClassNameOverride}`}
          alt="Jake"
          src={jake}
        />
      </div>
      <div className={`relative w-[113px] h-[30px] ${groupClassName}`}>
        <div className="inline-flex flex-col items-start gap-[2px] relative">
          <div
            className={`mt-[-1.00px] text-color-palette-typography-light-base-primary text-[length:var(--title-1-TT-hoves-medium-font-size)] relative w-fit font-title-1-TT-hoves-medium font-[number:var(--title-1-TT-hoves-medium-font-weight)] tracking-[var(--title-1-TT-hoves-medium-letter-spacing)] leading-[var(--title-1-TT-hoves-medium-line-height)] whitespace-nowrap [font-style:var(--title-1-TT-hoves-medium-font-style)] ${nameClassName}`}
          >
            {text}
          </div>
          <input
            className={`text-color-palette-typography-light-base-secondary text-[length:var(--title-3-TT-hoves-medium-font-size)] relative w-fit font-title-3-TT-hoves-medium font-[number:var(--title-3-TT-hoves-medium-font-weight)] tracking-[var(--title-3-TT-hoves-medium-letter-spacing)] leading-[var(--title-3-TT-hoves-medium-line-height)] whitespace-nowrap [font-style:var(--title-3-TT-hoves-medium-font-style)] [background:transparent] border-[none] p-0 ${nameClassNameOverride}`}
            placeholder={text1}
            type={inputType}
          />
        </div>
      </div>
    </div>
  );
};
