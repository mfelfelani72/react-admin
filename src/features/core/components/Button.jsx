import React from "react";
import { Link } from "react-router-dom";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

export const ButtonLink = ({ children, className, ...props }) => {
  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <>
      <Link
        {...props}
        className={cn(
          `transition-all h-14 flex flex-row justify-center items-center rounded-2xl bg-${themeColor} dark:bg-${themeColor} hover:bg-${themeColor} focus:bg-${themeColor} focus:outline-none select-none text-Textlight dark:text-Text-dark`,
          className
        )}
      >
        <div className="flex flex-row gap-2 ">{children}</div>
      </Link>
    </>
  );
};

export const ButtonNoLink = ({ children, className, ...props }) => {
  // states
  const themeColor = useAppStore((state) => state.themeColor);
  return (
    <>
      <div
        {...props}
        className={cn(
          `inline-flex h-14 px-4 justify-center items-center rounded-2xl bg-${themeColor} dark:bg-${themeColor} hover:bg-${themeColor} focus:bg-${themeColor} focus:outline-none select-none text-Textlight dark:text-Text-dark transition-all cursor-pointer`,
          className
        )}
      >
        <div className="flex flex-row items-center justify-center w-full gap-2 text-center whitespace-nowrap">
          {children}
        </div>
      </div>
    </>
  );
};
