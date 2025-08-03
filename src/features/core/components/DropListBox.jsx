import React from "react";

// Components

import { AngleIcon } from "./Icon.jsx";

// Functions

import { cn } from "../../../utils/libs/cn";

const DropListBox = ({ className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-row justify-between hover:bg-blue-100 rounded-lg cursor-pointer select-none px-4 py-2 hover:text-blue-500 transition-all ease-in-out",
          className
        )}
      >
        <div className="flex flex-row gap-2">
          <div>{props?.icon}</div>
          <div>{props?.title}</div>
        </div>
        <div><AngleIcon /></div>
      </div>
    </>
  );
};

export default DropListBox;
