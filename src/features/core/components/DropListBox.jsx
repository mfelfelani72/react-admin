import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

// Components

import { AngleIcon } from "./Icon.jsx";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

const DropListBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // states and consts
  const [isOpen, setIsOpen] = useState(false);

  // Check if any child is active
  const isChildActive = props?.items?.some(
    (item) => location.pathname === item.link
  );

  const shouldHighlight =
    isChildActive || (!props?.items && location.pathname === props?.to);

  // functions

  const handleItemClick = (link) => {
    navigate(link);
  };

  const handleParentClick = () => {
    if (props?.items) {
      setIsOpen((prev) => !prev);
    } else {
      navigate(props?.to);
    }
  };

  useEffect(() => {
    // Auto-open if child is active
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive]);

  return (
    <div className="flex flex-col">
      {/* Parent item */}
      <div
        id={props?.id}
        onClick={handleParentClick}
        className={cn(
          "flex flex-row items-center justify-between rounded-lg cursor-pointer select-none px-4 py-2 transition-all ease-in-out",
          "hover:text-blue-500",
          className,
          shouldHighlight && "text-blue-500 bg-blue-100"
        )}
      >
        <div className="flex flex-row gap-2">
          <div>{props?.icon}</div>
          <div>{t(props?.title)}</div>
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

      {/* Child items */}
      {props?.items && (
        <div
          className={cn(
            "px-4 h-1 transition-all ease-in duration-150 opacity-0 pointer-events-none",
            isOpen && "h-full ml-3 opacity-100 pointer-events-auto"
          )}
        >
          <ul>
            {props?.items?.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item.link)}
                className="p-1 py-1 cursor-pointer select-none"
              >
                <div
                  className={cn(
                    "flex flex-row items-center gap-2 px-2 py-1 rounded-md",
                    "hover:text-blue-500",
                    location.pathname === item.link
                      ? "text-blue-500"
                      : "text-gray-600"
                  )}
                >
                  <div>{item?.icon}</div>
                  <div className="text-xs font-medium">{t(item?.name)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropListBox;
