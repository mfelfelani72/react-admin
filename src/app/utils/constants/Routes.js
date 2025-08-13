export const REDIRECT_ROUTES = ["/home"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",

  // Home
  "/",
  "/home",

  // Auth

  "/login",
  "/register",

  // Posts
  "/posts",
];

export const ACCESS_DENIED_ROUTES = [
  "",
];

export const NOT_RELOAD_ROUTES = [
  ["is_login", ["/login", "/register"]],
  [
    "from_location",
    [
      "/confirm",
      "/change-password",
      "/change-password-confirm",
      // profile
      // "/profile/user-level-up",
    ],
  ],
  // Coin
  [
    "/dashboard/coin-list",
    [
      // "/dashboard/coin",
    ],
  ],
];

const ROOT_SECTIONS = ["/coin-list", "/author-list", "/admin"];
