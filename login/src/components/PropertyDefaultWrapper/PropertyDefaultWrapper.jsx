/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[24px] bg-[100%_100%] h-[24px] ${
        state.property1 === "variant-2"
          ? "bg-[url(https://c.animaapp.com/up7iaTKc/img/check-2.svg)]"
          : "bg-[url(https://c.animaapp.com/up7iaTKc/img/check-3.svg)]"
      } ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}
