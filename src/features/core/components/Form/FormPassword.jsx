import React from "react";
import { useState } from "react";


import { useTranslation } from "react-i18next";

const FormPassword = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <div>
        <div>
          <h5 className="inline text-xl">{t(props?.title)}</h5>
          <span>{t(props?.required)}</span>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={t(props?.placeholder)}
          className="bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark border border-Disable-dark dark:border-Disable-light focus:border-HoverFocus-light-600 dark:focus:border-HoverFocus-dark-600 mt-3.5 w-full transition outline-0 rounded-lg p-[0.7rem_1rem]"
        />
        <button type="button" className="bg-red-300" onClick={() => showPassword(!showPassword)}>
            {showPassword ? "hide" : "show"}
        </button>
      </div>
    </>
  );
};

export default FormPassword;