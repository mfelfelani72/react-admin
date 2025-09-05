import React, { useState } from "react";
import { Link } from "react-router-dom";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";
import { useTranslation } from "react-i18next";

// Components
import {
  DashboardIcon,
  Google,
  FaceBook,
  Twitter,
} from "../../core/components/Icon.jsx";
import FormInput from "../../core/components/Form/FormInput.jsx";

const LogIn = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-[calc(100vh)] flex flex-row text-Text-light dark:text-Text-dark">
      <div className="w-[55%] h-full bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark">
        <img
          src="src/assets/auth-img1.png"
          alt="builder"
          className="mx-auto my-76"
        />
      </div>

      <div className="w-[45%] bg-Background-light dark:bg-Background-dark flex items-center justify-center">
        <div className="w-100 h-full flex flex-col items-start justify-center">
          <div className="flex flex-row w-full mb-25 gap-4 justify-start items-center">
            <DashboardIcon
              className={cn(
                "w-8 h-8",
                "text-" + themeColor,
                "dark:text-" + themeColor
              )}
            />
            <div className="text-2xl font-bold text-Text-light dark:text-Text-dark">
              {t("dashboard")}
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl">{t("welcome_back")} 👋</h1>
            <p>{t("please_sign_in_to_your_account_and_start_the_adventure")}</p>
          </div>
          <form action="#" className="w-full">
            <div className="mb-5">
              <FormInput
                title={"email_or_username"}
                type={"email"}
                placeholder={"enter_your_email"}
              />
            </div>
            <div className="mb-5">
              <FormInput
                title={"password"}
                type={"password"}
                placeholder={"enter_your_password"}
              />
              <button
                className="hidden"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Show" : "Hidden"}
              </button>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="inline-block">
                {/************************************************
                 ********* چک باکس درست نشده درستش کن ************
                 *********************************************** */}
                <input type="checkbox" className="cursor-pointer" />
                <label htmlFor="remember"> {t("remember_me")}</label>
              </div>
              <a href="#" className={`text-${themeColor}`}>
                {t("forget_password")}
              </a>
            </div>
            <button
              className={`bg-${themeColor} text-Text-dark h-11 w-full cursor-pointer rounded-full my-5`}
            >
              {t("sign_in")}
            </button>
            <p className="text-center">
              {t("new_on_platform")}
              <Link to="/register"  className={`text-${themeColor}`}>{t("sign_up")}</Link>
            </p>
            <div>
              <div className="flex flex-row justify-between items-center gap-x-7 my-10 [&>hr]:w-full [&>hr]:border-Line-light dark:[&>hr]:border-Line-dark">
                <hr />
                <span className="leading-0">{t("or")}</span>
                <hr />
              </div>
            </div>
            <ul className="flex flex-row rlt:flex-row-reverse justify-center items-center gap-x-3.5 [&>li]:cursor-pointer [&>li]:rounded-lg [&>li]:p-1.5">
              <li className="bg-[#f9e1df] dark:bg-[#c9a8a5]">
                <a href="#">
                  <Google />
                </a>
              </li>
              <li className="bg-[#dbf0fd] dark:bg-[#9bc4e2]">
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li className="bg-[#e1e7f3] dark:bg-[#9aa3c0]">
                <a href="#">
                  <FaceBook />
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
