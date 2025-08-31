import React from "react";

import { HomeIcon } from "../../core/components/Icon.jsx";
import { cn } from "../../../../utils/libs/cn.js";
import useAppStore from "../../../app/stores/AppStore.js";

const FormImageDrag = ({ className, ...props }) => {
  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <>
      <div>
        <h5 className="font-bold inline h-[10%]">{props?.title}</h5>
        <span>(required)</span>
      </div>
      <label
        htmlFor="fileUpload"
        className="w-full aspect-[2/1] my-3.5 py-[8%] rounded-lg flex justify-around items-center flex-col transition bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark hover:bg-red-50  hover:dark:bg-red-950"
      >
        <HomeIcon
          className={`text-${themeColor} dark:text-${themeColor} w-15 h-15`}
        />
        <p className="text-Text-light dark:text-Text-dark font-bold">
          Drag or <span className={cn(`text-${themeColor}`)}>Hello</span>
        </p>
        <span className="font-light text-xs">PNG, JPEG(Max 5mb size)</span>
      </label>
    </>
  );
};

export default FormImageDrag;
