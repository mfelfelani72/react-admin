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
      <div className="w-[calc(100vw-16rem)] ml-[16rem]">
        <Header />
        <div className="mt-[4.5rem] bg-blue-50 min-h-[calc(100vh-4.5rem)] p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLanding;
