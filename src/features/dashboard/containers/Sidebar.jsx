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
      <div className="w-[16rem] h-screen fixed bg-Background-light dark:bg-Background-dark flex flex-col p-5 border-x border-Line-light dark:border-Line-dark">
        <div className="flex flex-row w-full gap-4 justify-center items-center">
          <DashboardIcon
            className={cn(
              "w-8 h-8",
              "text-" + themeColor,
              "dark:text-" + themeColor
            )}
          />
          <div className="text-2xl font-bold">{t("dashboard")}</div>
        </div>
        <div className="flex flex-col py-4">
          <DropListBox
            id={"home"}
            to="/home"
            icon={<HomeIcon />}
            title={"home"}
          />
          <DropListBox
            id={"posts"}
            icon={<PostsIcon />}
            title={"posts"}
            items={[
              {
                name: "posts_list",
                icon: <ListIcon className={"w-5 h-5"} />,
                link: "/posts",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
