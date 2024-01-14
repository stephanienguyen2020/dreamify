/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconArrowLeft } from "../../icons/IconArrowLeft";
import { IconArrowRight } from "../../icons/IconArrowRight";
import { IconEvents } from "../../icons/IconEvents";
import { IconSend } from "../../icons/IconSend";
import { IconUser } from "../../icons/IconUser";
import { Icons2 } from "../../icons/Icons2";
import { Property1Frame637 } from "../../icons/Property1Frame637";

export const ConcreteComponentNode = ({ icon, iconBookOpenClassName }) => {
  return (
    <>
      {(icon === "book-open" ||
        icon === "chevron-right-16px" ||
        icon === "chevron-right-24px" ||
        icon === "coins" ||
        icon === "container" ||
        icon === "folder" ||
        icon === "grid-02" ||
        icon === "grig-01" ||
        icon === "home" ||
        icon === "message-text-square-01" ||
        icon === "search" ||
        icon === "setings" ||
        icon === "shopping-bag-01" ||
        icon === "shopping-bag-02" ||
        icon === "ssers-01" ||
        icon === "tag" ||
        icon === "wallet") && (
        <div
          className={`bg-[100%_100%] ${
            icon === "chevron-right-16px" ? "w-[16px]" : icon === "search" ? "w-[20px]" : "w-[24px]"
          } ${icon === "chevron-right-16px" ? "h-[16px]" : icon === "search" ? "h-[20px]" : "h-[24px]"} ${
            icon === "grig-01"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/iconly-light-category-1.svg)]"
              : icon === "ssers-01"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/users-01-1.svg)]"
              : icon === "message-text-square-01"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/message-text-square-01-1.svg)]"
              : icon === "shopping-bag-01"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/shopping-bag-01.svg)]"
              : icon === "tag"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/tag-02-1.svg)]"
              : icon === "shopping-bag-02"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/shopping-bag-02-1.svg)]"
              : icon === "home"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/home-02.svg)]"
              : icon === "folder"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/folder-1.svg)]"
              : icon === "container"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/container.svg)]"
              : icon === "grid-02"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/grid-01-1.svg)]"
              : icon === "setings"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/iconly-light-setting.svg)]"
              : icon === "wallet"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/wallet-03-1.svg)]"
              : icon === "coins"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/coins-stacked-01-1.svg)]"
              : icon === "chevron-right-16px"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/chevron-right-5.svg)]"
              : icon === "chevron-right-24px"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/chevron-right-4.svg)]"
              : icon === "search"
              ? "bg-[url(https://c.animaapp.com/pKgdbKN7/img/iconly-light-search-7.svg)]"
              : "bg-[url(https://c.animaapp.com/pKgdbKN7/img/book-open-01-1.svg)]"
          } ${iconBookOpenClassName}`}
        />
      )}

      {icon === "log-out" && <Property1Frame637 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />}

      {icon === "events" && <IconEvents className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />}

      {icon === "user" && <IconUser className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />}

      {icon === "send" && <IconSend className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />}

      {icon === "close" && <Icons2 className="!absolute !w-[16px] !h-[16px] !top-0 !left-0" color="#19161D" />}

      {icon === "arrow-left" && <IconArrowLeft className="!absolute !w-px !h-[24px] !top-0 !left-0 !-rotate-180" />}

      {icon === "arrow-right" && <IconArrowRight className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />}
    </>
  );
};
