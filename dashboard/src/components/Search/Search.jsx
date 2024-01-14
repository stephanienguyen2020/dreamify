/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons2 } from "../../icons/Icons2";
import { ConcreteComponentNode } from "../ConcreteComponentNode";

export const Search = ({
  type,
  active,
  icon,
  className,
  rectangleClassName,
  concreteComponentNodeIconBookOpenClassName,
  sepClassName,
}) => {
  return (
    <div
      className={`${icon === "off" ? "w-[300px]" : ""} ${icon === "on" ? "inline-flex" : ""} ${
        icon === "on" ? "flex-col" : ""
      } ${icon === "on" ? "items-start" : ""} ${icon === "on" ? "gap-[10px]" : ""} ${
        icon === "off" ? "h-[40px]" : ""
      } ${icon === "on" ? "relative" : ""} ${className}`}
    >
      {icon === "off" && (
        <div className="h-[40px] rounded-[8px] relative">
          <div
            className={`border border-solid border-color-palette-color-palette-light-stroke w-[300px] left-0 top-0 h-[40px] rounded-[8px] bg-color-palette-color-palette-light-unit-BG absolute ${rectangleClassName}`}
          />
          <div className="left-[10px] inline-flex items-start top-[10px] gap-[8px] absolute">
            <ConcreteComponentNode icon="search" iconBookOpenClassName={concreteComponentNodeIconBookOpenClassName} />
            <div
              className={`relative ${active === "off" ? "font-title-2-TT-hoves-regular" : ""} ${
                active === "off" ? "w-fit" : type === "type-3" ? "w-[46px]" : ""
              } ${active === "off" ? "mt-[-1.00px]" : ""} ${
                active === "off" ? "tracking-[var(--title-2-TT-hoves-regular-letter-spacing)]" : ""
              } ${active === "off" ? "text-[length:var(--title-2-TT-hoves-regular-font-size)]" : ""} ${
                active === "off" ? "[font-style:var(--title-2-TT-hoves-regular-font-style)]" : ""
              } ${type === "type-3" ? "mr-[-2.00px]" : ""} ${
                type === "empty"
                  ? "text-color-palette-typography-light-base-secondary"
                  : type === "filled"
                  ? "text-color-palette-typography-light-base-primary"
                  : ""
              } ${active === "off" ? "font-[number:var(--title-2-TT-hoves-regular-font-weight)]" : ""} ${
                type === "type-3" ? "h-[20px]" : ""
              } ${active === "off" ? "whitespace-nowrap" : ""} ${
                active === "off" ? "leading-[var(--title-2-TT-hoves-regular-line-height)]" : ""
              } ${sepClassName}`}
            >
              {type === "empty" && <>Search</>}

              {type === "type-3" && (
                <div className="relative w-[44px] h-[20px]">
                  <div className="absolute top-0 left-0 font-title-2-TT-hoves-regular font-[number:var(--title-2-TT-hoves-regular-font-weight)] text-color-palette-typography-light-base-secondary text-[length:var(--title-2-TT-hoves-regular-font-size)] tracking-[var(--title-2-TT-hoves-regular-letter-spacing)] leading-[var(--title-2-TT-hoves-regular-line-height)] whitespace-nowrap [font-style:var(--title-2-TT-hoves-regular-font-style)]">
                    Search
                  </div>
                  <div className="absolute w-px h-[20px] top-0 left-0 bg-color-palette-typography-light-base-primary" />
                </div>
              )}

              {type === "filled" && <>Content</>}
            </div>
          </div>
        </div>
      )}

      {icon === "on" && (
        <>
          <div className="relative w-[300px] h-[40px] bg-color-palette-color-palette-light-unit-BG rounded-[8px] border border-solid border-color-palette-color-palette-light-stroke" />
          <div className="flex w-[280px] items-center gap-[181px] absolute top-[10px] left-[10px]">
            <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
              <ConcreteComponentNode
                icon="search"
                iconBookOpenClassName="bg-[url(https://c.animaapp.com/pKgdbKN7/img/iconly-light-search-5.svg)] !relative"
              />
              <div className="relative w-[54px] h-[20px] mr-[-2.00px]">
                <div className="absolute top-0 left-0 font-title-2-TT-hoves-regular font-[number:var(--title-2-TT-hoves-regular-font-weight)] text-color-palette-typography-light-base-primary text-[length:var(--title-2-TT-hoves-regular-font-size)] tracking-[var(--title-2-TT-hoves-regular-letter-spacing)] leading-[var(--title-2-TT-hoves-regular-line-height)] whitespace-nowrap [font-style:var(--title-2-TT-hoves-regular-font-style)]">
                  Content
                </div>
                <div className="absolute w-px h-[20px] top-0 left-[51px] bg-color-palette-typography-light-base-primary" />
              </div>
            </div>
            <Icons2 className="!relative !flex-1 !grow !h-[19px]" color="#2B2E48" />
          </div>
        </>
      )}
    </div>
  );
};
