import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import {
  CloseSquareIcon,
  DangerIcon,
  EmailIcon,
  MobielIcon,
  SunIcon,
  HideIcon,
  LockIcon,
  SearchIcon,
  ShowIcon,
  MoonIcon,
} from "./Icon.jsx";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Functions

//  --> for remove value input and disable submit Button
const handleClear = (id, first_id, secound_id, afterFunction) => {
  const Button1 = document.getElementById(first_id);
  const Button2 = document.getElementById(secound_id);
  if (Button1 && Button2) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }
  document.getElementById(id).value = "";

  if (afterFunction) {
    afterFunction();
  }
};
//  --> for toggle ShowIcon/hidden password
const handleShow = (id) => {
  const input = document.getElementById(id);
  if (input.type === "text") {
    input.type = "password";
    document.getElementById(id + "-ShowIcon").classList.toggle("hidden");
    document.getElementById(id + "-HideIcon").classList.toggle("hidden");
  } else {
    input.type = "text";
    document.getElementById(id + "-ShowIcon").classList.toggle("hidden");
    document.getElementById(id + "-HideIcon").classList.toggle("hidden");
  }
};
// --> for compare ch_password and ch_confirm_password
const comparePassword = (event, button_id) => {
  const ch_password = document.getElementById("ch_password");
  const username = document.getElementById("username");
  const Button1 = document.getElementById(button_id);
  const Button2 = document.getElementById(`${button_id}_disable`);

  if (ch_password.value !== event.target.value) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }

  if (
    ch_password.value.slice(0, event.target.value.length) !== event.target.value
  ) {
    event.target.classList.add("!focus:border-Error-400", "!border-Error-400");
    document.getElementById("error_message").classList.remove("hidden");
  } else {
    if (
      ch_password.value === event.target.value &&
      ch_password.value.length !== 0 &&
      event.target.value.length !== 0
    ) {
      Button1.classList.add("flex");
      Button1.classList.remove("hidden");
      Button2.classList.add("hidden");
      Button2.classList.remove("flex");
      document.getElementById("error_message").classList.add("hidden");
      event.target.classList.remove(
        "!focus:border-Error-400",
        "!border-Error-400"
      );
    }
  }
};

// Zustand

import useAppStore from "../../../app/stores/AppStore";

export const InputText = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label
          htmlFor={props?.id}
          className="text-Neutral-300 text-[10px] font-medium px-3 mb-1"
        >
          {props?.label}
        </label>
        <div className="relative">
          <input
            {...props}
            type="text"
            className={cn(
              "autofill-input placeholder-Neutral-200 w-full px-[1rem] rtl:pl-[2.5rem] ltr:pr-[2.5rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative",
              className
            )}
          />
          {props?.disabled !== "disabled" && (
            <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
              <div className="p-2">
                <div
                  className="flex cursor-pointer px-1"
                  onClick={() => handleClear(props?.id)}
                >
                  <CloseSquareIcon className={"text-Nutral-500"} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export const InputEmail = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-Neutral-300 text-[10px] font-medium px-3 mb-1"
      >
        {props?.label}
      </label>
      {props?.type == "auth" ? (
        <div className="relative">
          <input
            {...props}
            pattern="[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[a-zA-Z]{2,}(:[0-9]{1,5})?"
            type="email"
            placeholder={props?.placeholder}
            className={cn(
              "autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400  justify-between items-center text-Neutral-500 dark:text-white relative",
              className
            )}
            onBlur={() => {
              if (document.getElementById("input_email_validate"))
                document
                  .getElementById("input_email_validate")
                  .classList.add("hidden");
            }}
            onFocus={() => {
              document.getElementById("danger_email").classList.add("hidden");
              document.getElementById("close_email").classList.remove("hidden");
              document.getElementById("close_email").classList.add("flex");
            }}
          />
          <div
            id="close_email"
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center"
          >
            {props?.disabled !== "disabled" && (
              <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
                <div className="p-2">
                  <div
                    className="flex cursor-pointer px-1"
                    onClick={() => handleClear(props?.id)}
                  >
                    <CloseSquareIcon />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            id="danger_email"
            className="hidden absolute top-[6px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
          >
            <div className="flex">
              <DangerIcon />
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="flex">
              <EmailIcon />
            </div>
          </div>
          {/* input validate */}
          {typeof props?.error !== "undefined" && (
            <div
              id="input_email_validate"
              className="peer-focus:hidden absolute inset-x-0 mt-2 mx-3"
            >
              <div className="text-Error-400 text-xs font-medium">
                {t(props?.error)}
              </div>
            </div>
          )}
          <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
            <div className="text-Error-400 text-xs font-medium">
              {t("error_invalid_email")}
            </div>
          </div>

          {/* input validate */}
        </div>
      ) : (
        <div className="flex flex-col relative">
          <input
            {...props}
            type="text"
            id={props?.id}
            className={cn(
              "autofill-input rounded-2xl px-[2.7rem] h-12 py-6 border-2 border-Neutral-50 focus:outline-none focus:ring-0 focus:border-secondary-400",
              className
            )}
          />

          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="flex">
              <EmailIcon className={"text-Nutral-500"} />
            </div>
          </div>

          <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
            <div className="p-2">
              <div
                className="flex cursor-pointer px-1"
                onClick={() => handleClear(props?.id)}
              >
                <CloseSquareIcon className={"text-Nutral-500"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const InputMobile = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3 mb-1"
      >
        {props?.label}
      </label>

      <div className="relative">
        <input
          {...props}
          type="tel"
          inputMode="numeric"
          pattern="^09[0-9]{9}$"
          maxLength={11}
          placeholder={props?.placeholder}
          className={cn(
            "autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400  justify-between items-center text-Neutral-500 dark:text-white relative",
            className
          )}
          onBlur={() => {
            if (document.getElementById("input_mobile_validate"))
              document
                .getElementById("input_mobile_validate")
                .classList.add("hidden");
          }}
          onFocus={() => {
            document.getElementById("danger_mobile").classList.add("hidden");
            document.getElementById("close_mobile").classList.remove("hidden");
            document.getElementById("close_mobile").classList.add("flex");
          }}
        />
        <div
          id="close_mobile"
          className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center"
        >
          {props?.disabled !== "disabled" && (
            <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
              <div className="p-2">
                <div
                  className="flex cursor-pointer px-1"
                  onClick={() => handleClear(props?.id)}
                >
                  <CloseSquareIcon />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          id="danger_mobile"
          className="hidden absolute top-[6px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
        >
          <div className="flex">
            <DangerIcon />
          </div>
        </div>
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <div className="flex">
            <MobielIcon />
          </div>
        </div>
        {/* input validate */}
        {typeof props?.error !== "undefined" && (
          <div
            id="input_mobile_validate"
            className="peer-focus:hidden absolute inset-x-0 mt-2 mx-3"
          >
            <div className="text-Error-400 text-xs font-medium">
              {t(props?.error)}
            </div>
          </div>
        )}
        <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
          <div className="text-Error-400 text-xs font-medium">
            {t("error_invalid_mobile")}
          </div>
        </div>

        {/* input validate */}
      </div>
    </>
  );
};
export const InputTextArea = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={props?.id}
          className="text-Neutral-300 text-[10px] font-medium px-3 mb-1"
        >
          {props?.label}
        </label>
        <textarea
          {...props}
          id={props?.id}
          className={cn(
            "p-4 rounded-[20px] border-2 border-Neutral-50 focus:outline-none focus:ring-0 focus:border-secondary-400",
            className
          )}
        ></textarea>
      </div>
    </>
  );
};
export const InputSearch = ({ className, ...props }) => {
  return (
    <div
      ref={props?.input_search_ref}
      className={cn("relative", props?.class_name_parent)}
    >
      <div className="absolute rtl:right-3 ltr:left-3 h-full inline-flex items-center">
        <SearchIcon className={props?.search_classname} />
      </div>

      {props?.param && (
        <div className="absolute rtl:left-4 ltr:right-4 h-full inline-flex flex-row-reverse items-center">
          <span className="text-Neutral-300 dark:text-Neutral-100 *:text-sm font-semibold leading-tight tracking-tight">
            {props?.param}
          </span>
        </div>
      )}

      <input
        {...props}
        type="text"
        id={props?.id}
        className={cn(
          `autofill-input w-full bg-blue-100 dark:bg-background-light text-neutral-600 dark:text-neutral-100 rounded-3xl ${
            props?.param
              ? "rtl:pr-11 rtl:pl-12 ltr:pl-11 ltr:pr-12"
              : "rtl:pr-11 ltr:pl-11"
          } h-11 border-none focus-visible:outline focus-visible:outline-white`,
          className
        )}
      />
    </div>
  );
};
export const InputPassword = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3"
      >
        {props?.label}
      </label>
      {/* password */}
      {props?.type == "password" && (
        <>
          <div className="w-full relative mt-1">
            <input
              {...props}
              type="password"
              minLength={5}
              placeholder="xxxx xxxx xxxx xxxx"
              className={cn(
                "autofill-input peer placeholder-Neutral-200 w-full px-[2.5rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative",
                className
              )}
              onBlur={() => {
                document
                  .getElementById("input_password_validate")
                  .classList.add("hidden");
              }}
              onFocus={() => {
                document
                  .getElementById("danger_password")
                  .classList.add("hidden");
                document
                  .getElementById("close_password")
                  .classList.remove("hidden");
                document.getElementById("close_password").classList.add("flex");
              }}
            />
            <div
              id="close_password"
              className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center"
            >
              <div
                className="flex"
                onClick={() =>
                  handleClear(
                    props?.id,
                    props?.button_first_id,
                    props?.button_secound_id
                  )
                }
              >
                <CloseSquareIcon />
              </div>
            </div>
            <div
              id="danger_password"
              className="hidden absolute top-[6px] rtl:left-0 ltr:right-0 items-center "
            >
              <div className="p-2">
                <div className="flex">
                  <DangerIcon />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
              <div className="">
                <div className="flex">
                  <LockIcon />
                </div>
              </div>
            </div>
            {/* input validate */}
            {props?.error !== "" && (
              <div
                id="input_password_validate"
                className="peer-focus:hidden absolute mt-2 mx-3"
              >
                <div className="text-Error-400 text-xs font-medium">
                  {t(props?.error)}
                </div>
              </div>
            )}
            <div className="hidden peer-invalid:flex absolute my-2 mx-3">
              <div className="text-Error-400 text-xs font-medium">
                {t("error_min_length_password")}
              </div>
            </div>
            {/* input validate */}
          </div>
        </>
      )}

      {/* change_password */}
      {props?.type == "change_password" && (
        <div className="w-full relative mt-1">
          <input
            {...props}
            type="password"
            minLength={5}
            placeholder="xxxx xxxx xxxx xxxx"
            className="autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 invalid:focus:border-Error-400 invalid:border-Error-400 justify-between items-center text-Neutral-500 dark:text-white relative"
          />
          <div className=" absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center">
            <div className="flex" onClick={() => handleShow(props?.id)}>
              <div id={props?.id + "-ShowIcon"} className="">
                <ShowIcon />
              </div>
              <div id={props?.id + "-HideIcon"} className="hidden">
                <HideIcon />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="flex">
              <LockIcon />
            </div>
          </div>
          <div className="hidden peer-invalid:flex absolute my-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">
              {t("error_min_length_password")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const InputRePassword = ({ ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3"
      >
        {props?.label}
      </label>
      <div className="w-full relative mt-1">
        <input
          id={props?.id}
          type="password"
          placeholder="xxxx xxxx xxxx xxxx"
          className="autofill-input placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative"
          onChange={(event) => comparePassword(event, props?.button_id)}
        />
        <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center cursor-pointer">
          <div className="flex" onClick={() => handleShow(props?.id)}>
            <div id={props?.id + "-ShowIcon"} className="">
              <ShowIcon />
            </div>
            <div id={props?.id + "-HideIcon"} className="hidden">
              <HideIcon />
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <div className="flex">
            <LockIcon />
          </div>
        </div>

        <div id="error_message" className="hidden absolute mt-2 mx-3">
          <div className="text-Error-400 text-xs font-medium">
            {t("error_re_password")}
          </div>
        </div>
      </div>
    </>
  );
};
export const InputDarkLight = ({ className, ...props }) => {
  // states
  const { themeApp, setThemeApp } = useAppStore();
  const [isDark, setIsDark] = useState(themeApp == "dark" ? true : false);

  // functions
  const toggleTheme = () => {
    setIsDark(!isDark);

    if (document.documentElement.classList.value) {
      localStorage.setItem("theme", "");
      setThemeApp("light");
    } else {
      localStorage.setItem("theme", "dark");
      setThemeApp("dark");
    }

    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="inline-flex items-center relative cursor-pointer"
      onClick={toggleTheme}
    >
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        checked={!isDark}
        onChange={() => {}}
      />
      <div className="relative w-[4rem] h-[2rem] peer-checked:bg-white bg-background rounded-full after:absolute after:content-[''] after:w-[1.5rem] after:h-[1.5rem] after:rounded-full after:top-[0.25rem] after:left-[0.25rem] after:bg-[linear-gradient(to_right,_#444350,_#444350)] peer-checked:after:bg-[linear-gradient(to_right,_#f97316,_#facc15)] active:after:w-[1.875rem] peer-checked:after:left-[3.75rem] peer-checked:after:translate-x-[-100%] shadow-sm duration-500 after:duration-500 after:shadow-md"></div>

      <MoonIcon
        width={"1.25rem"}
        height={"1.25rem"}
        color={"white"}
        className="peer-checked:fill-black opacity-60 peer-checked:opacity-70 fill-white absolute w-4 h-4 left-[0.5rem]"
      />

      <SunIcon
        width={"1.25rem"}
        height={"1.25rem"}
        color={"white"}
        className="fill-white peer-checked:opacity-60 absolute w-4 h-4 right-[0.5rem]"
      />
    </div>
  );
};

export const InputRadioButton = ({ className, setSortRadio, ...props }) => {
  return (
    <>
      <input
        {...props}
        type="radio"
        id={props?.id + "_RadioDropDownItem"}
        name={"RadioInput" + props?.name}
        {...(props?.use_index !== "false"
          ? {
              onClick: () => {
                setSortRadio(props?.index);
              },
            }
          : {})}
        className={cn(
          "appearance-none w-5 h-5 transition-all bg-neutral-50 dark:bg-Neutral-50 border-gray-300 rounded cursor-pointer checked:bg-primary-400 checked:border-primary-400 focus:ring-0 focus:ring-offset-0 relative after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDYgOSAxNyA0IDEyIj48L3BvbHlsaW5lPjwvc3ZnPg==')] after:bg-no-repeat after:bg-center after:opacity-0 checked:after:opacity-100",
          className
        )}
      />
    </>
  );
};
