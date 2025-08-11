import React, { useEffect, useState } from "react";
import i18n from "../../../../utils/services/i18n";

// Components

import { InputRadioButton } from "../../core/components/Input";
import { IranIcon, USIcon } from "../../core/components/Icon";
import { useTranslation } from "react-i18next";

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const Languages = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  //   states
  const [language, setLanguage] = useState("empty");

  const languageApp = useAppStore((state) => state.languageApp);
  const setLanguageApp = useAppStore((state) => state.setLanguageApp);

  // constants
  const languageList = [
    {
      id: "fa",
      flag: <IranIcon className={"w-15 h-15"} />,
      dir: "rtl",
      name: t("persion"),
    },
    {
      id: "en",
      flag: <USIcon className={"w-15 h-15"} />,
      dir: "ltr",
      name: t("english"),
    },
  ];

  //   function
  const changeLanguage = (id, dir) => {
    try {
      i18n.changeLanguage(id);
      const rootHtml = document.getElementById("root-html");
      const prevLang = localStorage.getItem("currentLngId");

      if (rootHtml) {
        localStorage.setItem("currentLngId", id);
        localStorage.setItem("currentLngDir", dir);
        rootHtml.setAttribute("lang", id);
        rootHtml.setAttribute("dir", dir);
      }
      setLanguageApp(id);
      //   setIsOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  useEffect(() => {
    if (language !== "empty")
      changeLanguage(
        language,
        languageList?.find((item) => item?.id === language)?.dir
      );
  }, [language]);
  return (
    <>
      <div className="absolute top-15 ltr:right-19 rtl:left-19 inline-flex flex-col gap-4 bg-white z-[20] p-5 border border-gray-300 rounded-xl">
        {languageList?.map((item, index) => (
          <div key={index} className="flex flex-row justify-between w-48">
            <div className="flex flex-row gap-2 items-center">
              <div className="relative w-10 h-10 rounded-full border border-gray-300 overflow-hidden">
                <div className="absolute top-[-0.65rem] right-[-0.675rem]">
                  {item?.flag}
                </div>
              </div>
              <div className="font-bold">{item?.name}</div>
            </div>
            <div className="flex items-center">
              <InputRadioButton
                id={index}
                name={"language"}
                setSortRadio={setLanguage}
                index={item?.id}
                checked={languageApp == item?.id}
                className={"bg-neutral-100"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
