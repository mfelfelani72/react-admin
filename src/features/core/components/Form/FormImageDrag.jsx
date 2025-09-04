import React from "react";

// Components

import { HomeIcon } from "../Icon.jsx";

// Functions

import { cn } from "../../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../../app/stores/AppStore.js";
import { useTranslation } from "react-i18next";

const FormImageDrag = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  
  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <>
      <div>
        <h5 className="font-bold inline h-[10%]">{t(props?.title)}</h5>
        <span>{t(props?.required)}</span>
      </div>
      <label
        htmlFor="fileUpload"
        className="w-full aspect-[2/1] my-3.5 py-[8%] rounded-lg flex justify-around items-center flex-col transition bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark hover:bg-HoverFocus-light-100  hover:dark:bg-HoverFocus-dark-100 cursor-pointer"
      >
        <HomeIcon
          className={`text-${themeColor} dark:text-${themeColor} w-15 h-15`}
        />
        <p className="text-Text-light dark:text-Text-dark font-bold">
          {t("open")} {t("or")} <span className={cn(`text-${themeColor}`)}>{t("drag")}</span>
        </p>
        <span className="font-light text-xs">PNG, JPEG(Max 5mb size)</span>
        <input type="file" id="fileUpload" hidden name="[]" multiple/>
      </label>
    </>
  );
};

export default FormImageDrag;
