import React, { lazy, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Pages

const Content = lazy(() => import("./Content.jsx"));
const SystemPageLanding = lazy(() =>
  import("../../staticPages/systemPages/SystemPageLanding.jsx")
);

// Functions

import Middleware from "../middleware/Middleware.js";

const Landing = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();

  // states
  const [certificate, setCertificate] = useState();

  useEffect(() => {
    setCertificate(Middleware(location, navigate));
  }, []);

  return (
    <div className="ltr:!font-satoshi rtl:!font-yekanBakh flex flex-col w-full h-full">
      <div className="flex flex-col">
        {certificate === "app" && <Content />}
        {certificate === "404" && <SystemPageLanding pageCode={"404"} />}
        {certificate === "403" && <SystemPageLanding pageCode={"403"} />}
      </div>
    </div>
  );
};

export default Landing;
