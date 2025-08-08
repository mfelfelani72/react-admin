import React from "react";
import { Outlet } from "react-router-dom";

// Components

import Sidebar from "./containers/Sidebar";

// Containers

import Header from "./containers/Header";

const DashboardLanding = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full h-screen ml-[16rem] bg-amber-100">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLanding;
