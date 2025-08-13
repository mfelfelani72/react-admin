import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Components

import { AngleIcon } from "./Icon.jsx";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

const DropListBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // states
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div {...props} 
      onClick={()=>{
        !props?.items && navigate(props?.to)
      }}
      className="flex flex-col">
        <div
          id={props?.id}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "flex flex-row items-center justify-between hover:bg-blue-100 rounded-lg cursor-pointer select-none px-4 py-2 hover:text-blue-500 transition-all ease-in-out",
            className,
            isOpen && "text-blue-500 bg-blue-100"
          )}
        >
          <div className="flex flex-row gap-2">
            <div>{props?.icon}</div>
            <div>{t(props?.title)}</div>
            {/* translation remember */}
          </div>
          {props?.items && (
            <div
              className={cn(
                "transition duration-400 rtl:rotate-180",
                isOpen && "ltr:rotate-90 rtl:rotate-90"
              )}
            >
              <AngleIcon />
            </div>
          )}
        </div>
        <div
          className={cn(
            "px-4 h-1 transition-all ease-in duration-150 opacity-0 pointer-events-none",
            isOpen &&
              props?.items &&
              "h-full ml-3 opacity-100 pointer-events-auto"
          )}
        >
          <ul>
            {props?.items &&
              props?.items?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(item?.link);
                  }}
                  className="p-1 py-1 cursor-pointer select-none"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div>{item?.icon}</div>
                    <div
                      className={cn(
                        "transition text-xs font-medium text-gray-600 hover:text-blue-500"
                      )}
                    >
                      {t(item?.name)}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropListBox;
