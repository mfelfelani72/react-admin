import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Components

import DropListBox from "../../core/components/DropListBox";
import {
  DashboardIcon,
  HomeIcon,
  ListIcon,
  PostsIcon,
} from "../../core/components/Icon";

// Functions

import { cn } from "../../../../utils/libs/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const Sidebar = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <>
      <div className="w-[16rem] h-screen fixed bg-Background-light dark:bg-Background-dark flex flex-col py-5 px-3 border-x border-Line-light dark:border-Line-dark">
        <div className="flex flex-row w-full gap-4 justify-center items-center">
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
        <div className="flex flex-col py-4">
          <DropListBox
            id={"home"}
            to="/home"
            icon={
              <HomeIcon
                className={`text-${themeColor} dark:text-${themeColor}`}
              />
            }
            title={"home"}
          />

          <DropListBox
            id={"posts"}
            icon={
              <PostsIcon
                className={`text-${themeColor} dark:text-${themeColor}`}
              />
            }
            title={"posts"}
            items={[
              {
                name: "create_post",
                icon: (
                  <ListIcon
                    className={`w-5 h-5 text-${themeColor} dark:text-${themeColor}`}
                  />
                ),
                link: "/create-post",
              },
              {
                name: "posts_list",
                icon: (
                  <ListIcon
                    className={`w-5 h-5 text-${themeColor} dark:text-${themeColor}`}
                  />
                ),
                link: "/posts",
              },
            ]}
          />

          <hr className="border-Line-light dark:border-Line-dark mt-3.5"/>

          <h5 className="font-bold text-Text-light dark:text-Text-dark m-3">{t("settings")}</h5>

          <DropListBox
            id={"authentication"}
            icon={
              <PostsIcon
                className={`text-${themeColor} dark:text-${themeColor}`}
              />
            }
            title={"authentication"}
            items={[
              {
                name: "log_in",
                icon: (
                  <ListIcon
                    className={`w-5 h-5 text-${themeColor} dark:text-${themeColor}`}
                  />
                ),
                link: "/login",
              },
              {
                name: "register",
                icon: (
                  <ListIcon
                    className={`w-5 h-5 text-${themeColor} dark:text-${themeColor}`}
                  />
                ),
                link: "/register",
              }
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
