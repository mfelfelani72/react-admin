import i18n from "../../../../utils/services/i18n/index";

const prepareApp = () => {
  // { initial language

  const rootHtml = document.getElementById("root-html");

  if (
    rootHtml &&
    localStorage.getItem("currentLngId") &&
    localStorage.getItem("currentLngDir")
  ) {
    i18n.changeLanguage(localStorage.getItem("currentLngId"));
    rootHtml.setAttribute("dir", localStorage.getItem("currentLngDir"));
  }

  // initial language }

  // { initial theme mode (dark or light)

  // if (
  //   (window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  //   localStorage.getItem("theme") === "dark"
  // )
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // initial theme mode }

  if (process.env.NODE_ENV !== "development") {
    const noop = () => {};
    [
      "log",
      "debug",
      "info",
      "warn",
      "error",
      "trace",
      "dir",
      "group",
      "groupCollapsed",
      "groupEnd",
      "time",
      "timeEnd",
      "timeLog",
      "assert",
      "count",
      "countReset",
      "table",
      "clear",
    ].forEach((method) => {
      console[method] = noop;
      window.console[method] = noop;
    });
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
    console.trace = noop;
  }
};

export default prepareApp;