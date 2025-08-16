import React, { useState } from "react";
import { DashboardIcon } from "../../core/components/Icon.jsx";
import { cn } from "../../../../utils/libs/cn.js";

const TableRow = ({ className, ...props }) => {
  return (
    <>
      <tr>
        <td className="pl-[1.5rem]">
          <input type="checkbox" />
        </td>
        <td>
          <img
            className="inline mr-[1.5rem]"
            src="https://html.themeholy.com/edmate/assets/images/thumbs/student-img1.png"
            alt="Profile"
          />
          <span>{props?.name}</span>
        </td>
        <td>{props?.email}</td>
        <td>{props?.cours}</td>
        <td>{props?.certificate}</td>
        <td>
          <span className="bg-orange-100 px-2.5 py-1 rounded-2xl text-orange-400">
            <span className="bg-orange-400 align-middle inline-block rounded-2xl p-[5px] mr-2.5 leading-0"></span>
            In Progress
          </span>
        </td>
        <td>
          <span className="bg-blue-100 px-2.5 py-1 rounded-2xl text-blue-400">
            <a href="#">View More</a>
          </span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
