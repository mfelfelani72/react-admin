import { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { InputSearch } from "../../core/components/Input";
import {
  BellIcon,
  LanguageIcon,
  UserSettingIcon,
} from "../../core/components/Icon";
import Languages from "../components/Languages.jsx";
import GhostBox from "../../core/components/GhostBox/GhostBox.jsx";
import UserSetting from "./UserSetting.jsx";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const Header = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);
  return (
    <>
      <div className="fixed w-[calc(100vw-16rem)] bg-Background-light dark:bg-Background-dark py-4 px-8 flex flex-row justify-between items-center border-b border-Line-light dark:border-Line-dark">
        {/* search */}
        <div className="w-96">
          <InputSearch placeholder={t("search")} />
        </div>

        <div className="flex flex-row-reverse">
          {/* user */}

          <GhostBox
            id={"user-settings"}
            className={"bottom-5"}
            gap={16}
            trigger={
              <div className="elative bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <UserSettingIcon />
              </div>
            }
            triggerClassName={""}
            childrenClassName={""}
          >
            <UserSetting />
          </GhostBox>

          {/* language */}
          <GhostBox
            id={"language"}
            className={"bottom-5"}
            gap={16}
            trigger={
              <div className="bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <LanguageIcon />
              </div>
            }
            triggerClassName={""}
            childrenClassName={""}
          >
            <Languages />
          </GhostBox>

          {/* notification */}
          <GhostBox
            id={"notification"}
            className={"bottom-5"}
            gap={16}
            trigger={
              <div className="relative bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <div
                  className={cn(
                    "absolute top-2 right-2 rounded-full w-2 h-2",
                    "bg-" + themeColor
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute top-1.5 right-1.5 rounded-full w-3 h-3 animate-ping",
                    "bg-" + themeColor
                  )}
                ></div>
                <div className="">
                  <BellIcon />
                </div>
              </div>
            }
            triggerClassName={""}
            childrenClassName={""}
          >
            <div className="absolute top-12 ltr:-right-7 rtl:-left-7 inline-flex flex-col gap-4 bg-Background-light dark:bg-Background-dark z-[20] p-5 border border-Line-light dark:border-Line-dark rounded-xl whitespace-nowrap">
              <span className="text-Text-light dark:text-Text-Disable-dark">{t("notification")}</span>
            </div>
          </GhostBox>
        </div>
      </div>
    </>
  );
};

export default Header;
