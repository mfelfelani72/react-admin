import { useTranslation } from "react-i18next";

// Functions

import { cn } from "../../../../../utils/libs/cn";
import { useEffect } from "react";
const StatusBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  useEffect(() => {
    console.log("FSDfsdfs");
  }, [props]);
  return (
    <>
      {props && (
        <div
          className={cn(
            "w-[5.5rem] flex items-center rounded-4xl gap-1 px-2",
            "bg-" + props.status.color + "-100"
          )}
        >
          <div
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              "bg-" + props.status.color + "-500"
            )}
          ></div>
          <div className={cn("text-" + props.status.color + "-300")}>
            {t(props?.status?.title)}
          </div>
        </div>
      )}
    </>
  );
};

export default StatusBox;
