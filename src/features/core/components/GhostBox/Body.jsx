import React from "react";

// Functions

import { cn } from "../../../../../utils/libs/cn";

const Body = ({ className, children, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 ltr:left-0 rtl:right-0 z-[999]",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Body;
