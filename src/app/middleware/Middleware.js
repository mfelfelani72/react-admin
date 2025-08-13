// Functions

import IsSafe from "../../../utils/libs/IsSafe";

// Constants

import {
  REDIRECT_ROUTES,
  ALL_ROUTES,
  NOT_RELOAD_ROUTES,
  ACCESS_DENIED_ROUTES,
} from "../utils/constants/Routes.js";

const Middleware = (location, navigate) => {
  // 404 page
  if (!ALL_ROUTES.includes(location.pathname)) return "404";

  //403 page
  if (ACCESS_DENIED_ROUTES.includes(location.pathname) && !IsSafe()) {
    return "403";
  }

  // for prevent reload page
  for (let index = 0; index < NOT_RELOAD_ROUTES.length; index++)
    if (NOT_RELOAD_ROUTES[index][1].includes(location.pathname)) {
      if (NOT_RELOAD_ROUTES[index][0] === "is_login" && IsSafe() == true)
        navigate("/home");
      else if (NOT_RELOAD_ROUTES[index][0] === "is_login" && IsSafe() == false)
        navigate(location.pathname);
      else if (NOT_RELOAD_ROUTES[index][0] === "from_location")
        navigate("/" + location?.state?.from_location?.replace(/_/g, "-"), {
          state: { from_location: location?.state?.from_location },
        });
      else navigate(NOT_RELOAD_ROUTES[index][0]);
    }

  // redirect home
  if (REDIRECT_ROUTES.includes(location.pathname) && IsSafe() === false) {
    navigate("/home");
  }

  // redirect dashboard
  // else if (REDIRECT_ROUTES.includes(location.pathname) && IsSafe() === true) {
  //   navigate("/dashboard", { state: { from_location: "redirect" } });
  // }

  // Show home page
  else if (location.pathname === "/") {
    // if (IsSafe() === true) navigate("/dashboard");
    // else
    navigate("/home");
  }

  return "app";
};

export default Middleware;
