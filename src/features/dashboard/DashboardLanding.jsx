// Layouts

import DashboardLandingMobile from "./layouts/mobile/DashboardLanding.jsx"
import DashboardLandingIpad from "./layouts/ipad/DashboardLanding.jsx"
import DashboardLandingDesktop from "./layouts/desktop/DashboardLanding.jsx"

// Hooks

import useDevice from "../../../utils/hooks/useDevice.js";

const DashboardLanding = () => {
  // hooks
  const { type, orientation, screenWidth, isMobile, isIpad, isDesktop } =
    useDevice();
  return (
    <>
      {isMobile && <DashboardLandingMobile />}
      {isIpad && <DashboardLandingIpad />}
      {isDesktop && <DashboardLandingDesktop />}
    </>
  );
};

export default DashboardLanding;
