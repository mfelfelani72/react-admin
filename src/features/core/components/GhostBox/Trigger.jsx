import React from "react";

// Functions

import { cn } from "../../../../../utils/libs/cn";

const Trigger = ({ className, children, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "absolute top-0 rtl:right-0 ltr:left-0 select-none",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Trigger;
