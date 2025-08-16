import React, { useState } from "react";
import { DashboardIcon } from "../../core/components/Icon.jsx";
import { cn } from "../../../../utils/libs/cn.js";

const TableCell = ({className, ...props}) => {
  return (
    <>
      <th>
        <span className="flex justify-between items-center pr-[1.5rem]">
          {props?.title}
          {props?.icon}
        </span>
      </th>
    </>
  );
};

export default TableCell;
