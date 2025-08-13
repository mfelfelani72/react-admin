import React, { lazy } from "react";
import { useTranslation } from "react-i18next";

// Components

const components = {
  404: lazy(() => import("./containers/Page404.jsx")),
  403: lazy(() => import("./containers/Page403.jsx")),
};

const SystemPageDesktopLanding = ({ pageCode }) => {
  // hooks
  const { t } = useTranslation();

  const PageComponent = components[pageCode] || "";

  return (
    <>
      <PageComponent />
    </>
  );
};

export default SystemPageDesktopLanding;
