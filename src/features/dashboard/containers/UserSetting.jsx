import { useTranslation } from "react-i18next";

// Components

import {
  LogoutIcon,
  PenIcon,
  SettingIcon,
  ThemeIcon,
  UserIcon,
} from "../../core/components/Icon";
import { InputDarkLight } from "../../core/components/Input";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const UserSetting = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);
  const setThemeColor = useAppStore((state) => state.setThemeColor);

  // functions

  const saveThemeColor = (value) => {
    localStorage.setItem("themeColor", value);
    setThemeColor(value);
  };

  return (
    <>
      <div className="absolute top-12 ltr:-right-7 rtl:-left-7 w-[18rem] inline-flex flex-col gap-2 bg-Background-light dark:bg-Background-dark z-[20] p-5 border border-Line-light dark:border-Line-dark rounded-xl select-none">
        <div className="flex flex-col border-b border-Line-light dark:border-Line-dark">
          <div className="flex flex-row gap-4 items-center pb-4">
            <UserIcon className={"w-10 h-10"} />
            <div className="flex flex-col gap-2 w-full">
              <div className="font-bold text-Text-light dark:text-Text-dark">
                Mohammad Felfelani
              </div>
              <div className="text-xs font-medium text-TextSecondary-light dark:text-TextSecondary-dark">
                mfelflani72@gmail.com
              </div>
            </div>
          </div>
        </div>
        {/* account setting */}
        <div className="flex flex-row gap-2 p-2 rounded-lg hover:bg-HoverFocus-light-100 hover:dark:bg-HoverFocus-dark-400 cursor-pointer">
          <SettingIcon
            className={`text-${themeColor} dark:text-${themeColor}`}
          />
          <div className="text-TextSecondary-light dark:text-TextSecondary-dark font-medium">
            {t("account_setting")}
          </div>
        </div>
        {/* dark/light */}
        <div className="flex flex-row w-full p-2 rounded-lg  justify-between">
          <div className="inline-flex w-full gap-2">
            <ThemeIcon
              className={`text-${themeColor} dark:text-${themeColor}`}
            />
            <div className="text-TextSecondary-light dark:text-TextSecondary-dark font-medium">
              {t("dark_light")}
            </div>
          </div>

          <div className="inline-flex justify-end">
            <InputDarkLight />
          </div>
        </div>

        {/* theme color */}

        <div className="flex flex-col gap-4 pb-4">
          <div className="flex flex-row gap-2 px-2">
            <PenIcon className={`text-${themeColor} dark:text-${themeColor}`} />
            <div className="text-TextSecondary-light dark:text-TextSecondary-dark font-medium">
              {t("color")}
            </div>
          </div>
          <div className="flex flex-row px-2 justify-between">
            {[
              "blue",
              "orange",
              "purple",
              "green",
              "red",
              "yellow",
              "turquoise",
            ].map((color) => (
              <div
                key={color}
                onClick={() => saveThemeColor(`${color}-theme`)}
                className={cn(
                  "p-1 rounded-full cursor-pointer border-2",
                  themeColor === `${color}-theme`
                    ? `border-${color}-theme` // Border هم‌رنگ دایره
                    : "border-transparent"
                )}
              >
                <div className={`w-4 h-4 rounded-full bg-${color}-theme`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* logout */}
        <div className="flex flex-row gap-2 cursor-pointer border-t border-Line-light dark:border-Line-dark pt-4">
          <span className="ltr:rotate-180">
            <LogoutIcon
              className={`text-${themeColor} dark:text-${themeColor}`}
            />
          </span>

          <div className="text-TextSecondary-light dark:text-TextSecondary-dark font-medium">
            {t("log_out")}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSetting;
