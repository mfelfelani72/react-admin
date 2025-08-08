import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { AngleIcon } from "./Icon.jsx";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

const DropListBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div
        {...props}
        className={cn(
          "flex flex-row items-center justify-between hover:bg-blue-100 rounded-lg cursor-pointer select-none px-4 py-2 hover:text-blue-500 transition-all ease-in-out",
          className
        )}
      >
        <div className="flex flex-row gap-2">
          <div>{props?.icon}</div>
          <div>{t(props?.title)}</div>
        </div>
        <div>
          <AngleIcon />
        </div>
      </div>
    </>
  );
};

export default DropListBox;
