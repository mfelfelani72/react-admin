import { Outlet } from "react-router-dom";

// Containers

import Header from "../../containers/Header";
import Sidebar from "../../containers/Sidebar";

const DashboardLanding = () => {
  return (
    <>
      <Sidebar />
      <div className="w-[calc(100vw-16rem)] ltr:ml-[16rem] rtl:mr-[16rem]">
        <Header />
        <div className="mt-[4.5rem] bg-BackgroundSection-light dark:bg-BackgroundSection-dark min-h-[calc(100vh-4.5rem)] p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLanding;
