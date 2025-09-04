import React from "react";
import { useTranslation } from "react-i18next";

const FormSelect = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <h5 className="font-bold">{t(props?.title)}</h5>
      <select
        name=""
        id=""
        className="cursor-pointer outline-0 p-[0.7rem_1rem] transition rounded-lg text-left w-full mt-3.5 rtl:text-right bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark border border-Disable-dark dark:border-Disable-light focus:border-HoverFocus-light-600 dark:focus:border-HoverFocus-dark-600"
      >
        <option value="1" disabled selected>
          {t(props?.label)}
        </option>
        <option value="2">{t("option")}</option>
      </select>
    </>
  );
};

export default FormSelect;
