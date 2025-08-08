import { useState } from "react";

// Components

import { InputRadioButton, InputSearch } from "../../core/components/Input";
import {
  BellIcon,
  LanguageIcon,
  UserSettingIcon,
} from "../../core/components/Icon";

const Header = () => {
  // states
  const [bellVisible, setBellVisible] = useState(false);
  const [langVisible, setLangVisible] = useState(false);
  const [UserSettingVisible, setUserSettingVisible] = useState(false);
  return (
    <>
      <div className="w-[calc(100vw-16rem)] bg-gray-50 py-4 px-8 flex flex-row justify-between items-center border-b border-gray-300">
        {/* search */}
        <div className="w-96">
          <InputSearch placeholder={"search..."} />
        </div>

        <div className="flex flex-row gap-4">
          {/* notification */}
          <div onClick={() => setBellVisible(prev => !prev)} className="relative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
            <div className="absolute top-2 right-2 rounded-full w-2 h-2 bg-red-500 "></div>
            <div className="absolute top-1.5 right-1.5 rounded-full w-3 h-3 bg-red-500 animate-ping"></div>
            <div className="">
              <BellIcon className={"text-gray-600"} />
            </div>
          </div>

          {!bellVisible && (
            <div className="absolute top-15 right-19 bg-white z-[20] p-5 border border-gray-300 rounded-xl">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-10 h-10 rounded-full border border-gray-300"></div>
                        <div className="font-bold">Arabic</div>
                    </div>
                    <InputRadioButton />
                </div>
            </div>
          )}

          {/* language */}
          <div className="relative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
            <LanguageIcon className={"text-gray-600"} />
          </div>

          {/* user setting */}
          <div className="elative bg-blue-200 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer">
            <UserSettingIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
