import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./containers/Sidebar";

const DashboardLanding = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full h-screen pl-96 bg-amber-300">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLanding;
