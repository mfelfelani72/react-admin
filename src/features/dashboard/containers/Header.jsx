import { useState } from "react";

// Components

import { InputRadioButton, InputSearch } from "../../core/components/Input";
import {
  BellIcon,
  IranIcon,
  LanguageIcon,
  UserSettingIcon,
  USIcon,
} from "../../core/components/Icon";

const Header = () => {
  // states
  const [bellVisible, setBellVisible] = useState(false);
  const [langVisible, setLangVisible] = useState(false);
  const [language, setLanguage] = useState("");
  const [userSettingVisible, setUserSettingVisible] = useState(false);
  return (
    <>
      <div className="w-[calc(100vw-16rem)] bg-gray-50 py-4 px-8 flex flex-row justify-between items-center border-b border-gray-300">
        {/* search */}
        <div className="w-96">
          <InputSearch placeholder={"search..."} />
        </div>

        <div className="flex flex-row gap-4">
          {/* notification */}
          <div className="relative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
            <div className="absolute top-2 right-2 rounded-full w-2 h-2 bg-red-500 "></div>
            <div className="absolute top-1.5 right-1.5 rounded-full w-3 h-3 bg-red-500 animate-ping"></div>
            <div className="">
              <BellIcon className={"text-gray-600"} />
            </div>
          </div>

          {/* language */}
          <div
            onClick={() => setLangVisible((prev) => !prev)}
            className="relative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer"
          >
            <LanguageIcon className={"text-gray-600"} />
          </div>

          {langVisible && (
            <div className="absolute top-15 right-19 inline-flex flex-col gap-4 bg-white z-[20] p-5 border border-gray-300 rounded-xl">
              <div className="flex flex-row justify-between w-48">
                <div className="flex flex-row gap-2 items-center">
                  <div className="relative w-10 h-10 rounded-full border border-gray-300 overflow-hidden">
                    <div className="absolute top-[-0.65rem] right-[-0.675rem]">
                      <USIcon className={"w-15 h-15"} />
                    </div>
                  </div>
                  <div className="font-bold">English</div>
                </div>
                <div className="flex items-center">
                  <InputRadioButton
                    id="sad"
                    name={"language"}
                    setSortRadio={setLanguage}
                    //   index={index}
                    //   checked={
                    //     props?.default_check === item.toUpperCase() ||
                    //     props?.default_check === index ||
                    //     props?.default_check === String(index)
                    //   }
                    //   onChange={() => {
                    //     if (useIndex) {
                    //       props?.set_index?.(index);
                    //     } else {
                    //       props?.set_name?.(item.toUpperCase());
                    //     }
                    //   }}
                    className={"bg-neutral-100"}
                    //   {...(props?.set_name
                    //     ? {
                    //         onClick: () => {
                    //           if (props?.default_check !== item.toUpperCase()) {
                    //             props?.set_name(item.toUpperCase());
                    //           }
                    //         },
                    //       }
                    //     : {})}
                    //   use_index={useIndex.toString()}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between w-48">
                <div className="flex flex-row gap-2 items-center">
                  <div className="relative w-10 h-10 rounded-full border border-gray-300 overflow-hidden">
                    <div className="absolute top-[-0.65rem] right-[-0.675rem]">
                      <IranIcon className={"w-15 h-15"} />
                    </div>
                  </div>
                  <div className="font-bold">Persian</div>
                </div>
                <div className="flex items-center">
                  <InputRadioButton
                    id="sad"
                    name={"language"}
                    setSortRadio={setLanguage}
                    //   index={index}
                    //   checked={
                    //     props?.default_check === item.toUpperCase() ||
                    //     props?.default_check === index ||
                    //     props?.default_check === String(index)
                    //   }
                    //   onChange={() => {
                    //     if (useIndex) {
                    //       props?.set_index?.(index);
                    //     } else {
                    //       props?.set_name?.(item.toUpperCase());
                    //     }
                    //   }}
                    className={"bg-neutral-100"}
                    //   {...(props?.set_name
                    //     ? {
                    //         onClick: () => {
                    //           if (props?.default_check !== item.toUpperCase()) {
                    //             props?.set_name(item.toUpperCase());
                    //           }
                    //         },
                    //       }
                    //     : {})}
                    //   use_index={useIndex.toString()}
                  />
                </div>
              </div>
            </div>
          )}

          {/* user setting */}
          <div
            onClick={() => setUserSettingVisible((prev) => !prev)}
            className="elative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer"
          >
            <UserSettingIcon />
          </div>
          {!userSettingVisible && (
            <div className="absolute top-15 right-4 inline-flex flex-col gap-4 bg-white z-[20] p-5 border border-gray-300 rounded-xl">
             <div className="flex flex-col">
                <div className="flex flex-row">gjh</div>
             </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
