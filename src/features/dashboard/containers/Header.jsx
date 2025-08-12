import { useState } from "react";

// Components

import { InputSearch } from "../../core/components/Input";
import {
  BellIcon,
  LanguageIcon,
  LogoutIcon,
  SettingIcon,
  UserIcon,
  UserSettingIcon,
} from "../../core/components/Icon";
import Languages from "../components/Languages.jsx";
import GhostBox from "../../core/components/GhostBox/GhostBox.jsx";

const Header = () => {
  return (
    <>
      <div className="fixed w-[calc(100vw-16rem)] bg-white py-4 px-8 flex flex-row justify-between items-center border-b border-gray-300">
        {/* search */}
        <div className="w-96">
          <InputSearch placeholder={"search..."} />
        </div>

        <div className="flex flex-row-reverse">
          {/* user */}

          <GhostBox
            id={"notification"}
            className={"bottom-5"}
            gap={16}
            trigger={
              <div className="elative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <UserSettingIcon />
              </div>
            }
            triggerClassName={""}
            childrenClassName={""}
          >
            <div className="absolute top-12 ltr:-right-7 rtl:-left-7 w-[18rem] inline-flex flex-col gap-4 bg-white z-[20] p-5 border border-gray-300 rounded-xl select-none">
              <div className="flex flex-col border-b border-gray-300">
                <div className="flex flex-row gap-4 items-center pb-4">
                  <UserIcon className={"w-10 h-10"} />
                  <div className="flex flex-col gap-2 w-full">
                    <div className="font-bold">Mohammad Felfelani</div>
                    <div className="text-xs font-medium">
                      mfelflani72@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 p-2 rounded-lg hover:bg-blue-100 cursor-pointer">
                <SettingIcon className={"text-blue-300"} />
                <div className="text-gray-500 font-medium">Account setting</div>
              </div>
              <div className="flex flex-row gap-2 cursor-pointer border-t border-gray-300 pt-4">
                <LogoutIcon className={"text-orange-600"} />
                <div className="font-medium">Log out</div>
              </div>
            </div>
          </GhostBox>

          {/* language */}
          <GhostBox
            id={"language"}
            className={"bottom-5"}
            gap={16}
            trigger={
              <div className="bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <LanguageIcon className={"text-gray-600"} />
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
              <div className="relative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
                <div className="absolute top-2 right-2 rounded-full w-2 h-2 bg-red-500 "></div>
                <div className="absolute top-1.5 right-1.5 rounded-full w-3 h-3 bg-red-500 animate-ping"></div>
                <div className="">
                  <BellIcon className={"text-gray-600"} />
                </div>
              </div>
            }
            triggerClassName={""}
            childrenClassName={""}
          >
            <div className="absolute top-12 ltr:-right-7 rtl:-left-7 inline-flex flex-col gap-4 bg-white z-[20] p-5 border border-gray-300 rounded-xl">
              notification
            </div>
          </GhostBox>
        </div>
      </div>
    </>
  );
};

export default Header;
