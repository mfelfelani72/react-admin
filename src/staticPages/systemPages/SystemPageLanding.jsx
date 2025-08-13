import React, { lazy } from "react";

// Layouts

const SystemPageMobileLanding = lazy(() =>
  import("./layout/mobile/SystemPageMobileLanding.jsx")
);
const SystemPageDesktopLanding = lazy(() =>
  import("./layout/desktop/SystemPageDesktopLanding.jsx")
);

// Hooks

import useDevice from "../../../utils/hooks/useDevice.js";

const SystemPageLanding = ({ pageCode }) => {
  // hooks
  const { type, orientation, screenWidth, isMobile, isIpad, isDesktop } =
    useDevice();

  return (
    <>
      <div className="left-to-right">
        {isMobile && <SystemPageMobileLanding pageCode={pageCode} />}
        {isDesktop && <SystemPageDesktopLanding pageCode={pageCode} />}
      </div>
    </>
  );
};

export default SystemPageLanding;
