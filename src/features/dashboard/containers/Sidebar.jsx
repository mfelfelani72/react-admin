import React from "react";
import { useNavigate } from "react-router-dom";

// Components

import DropListBox from "../../core/components/DropListBox";

const Sidebar = () => {
  // hooks
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[16rem] h-screen fixed bg-gray-100 flex flex-col p-5">
        <DropListBox icon={"X"} title={"student"} />
        <DropListBox icon={"X"} title={"student"} />
        <DropListBox icon={"X"} title={"student"} />
        <DropListBox icon={"X"} title={"student"} />
      </div>
    </>
  );
};

export default Sidebar;
1;
