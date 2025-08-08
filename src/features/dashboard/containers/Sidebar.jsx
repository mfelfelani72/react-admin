import React from "react";
import { useNavigate } from "react-router-dom";

// Components

import DropListBox from "../../core/components/DropListBox";
import { DashboardIcon } from "../../core/components/Icon";

const Sidebar = () => {
  // hooks
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[16rem] h-screen fixed bg-white flex flex-col p-5 border-x border-gray-300">
        <div className="flex flex-row w-full gap-4 justify-center items-center">
          <DashboardIcon className={"w-8 h-8 text-blue-700"} />
          <div className="text-2xl font-bold">Dashboard</div>
        </div>
        <div className="flex flex-col py-4">
          <DropListBox icon={<DashboardIcon />} title={"student"} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
1;
