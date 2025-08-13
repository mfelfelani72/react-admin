// Layouts

import HomeLandingMobile from "./layouts/mobile/HomeLanding.jsx"
import HomeLandingIpad from "./layouts/ipad/HomeLanding.jsx"
import HomeLandingDesktop from "./layouts/desktop/HomeLanding.jsx"

// Hooks

import useDevice from "../../../utils/hooks/useDevice.js";

const HomeLanding = () => {
  // hooks
  const { type, orientation, screenWidth, isMobile, isIpad, isDesktop } =
    useDevice();
  return (
    <>
      {isMobile && <HomeLandingMobile />}
      {isIpad && <HomeLandingIpad />}
      {isDesktop && <HomeLandingDesktop />}
    </>
  );
};

export default HomeLanding;
