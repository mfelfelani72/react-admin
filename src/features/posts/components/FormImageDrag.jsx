import React from "react";

import useAppStore from "../../../app/stores/AppStore.js";
import { HomeIcon } from "../../core/components/Icon.jsx";

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
        className="w-full h-[80%] mt-3.5 rounded-lg flex justify-center items-center flex-col bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark"
      >
        <HomeIcon
          className={`text-${themeColor} dark:text-${themeColor} w-15 h-15 m-3`}
        />
        <p className="text-Text-light dark:text-Text-dark font-bold">
          Drag or <span className="text-Primary-600">Brows</span>
        </p>
        <span className="font-light">PNG, JPEG(Max 5mb size)</span>
      </label>
    </>
  );
};

export default FormImageDrag;
