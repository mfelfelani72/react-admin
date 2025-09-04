// AppStore.js
import { create } from "zustand";
import ReactDOMServer from "react-dom/server";

const useAppStore = create((set) => ({
  // language

  languageApp: localStorage.getItem("currentLngId") || "fa",
  setLanguageApp: (id) => set({ languageApp: id }),

  // Default function
  defaultFunction: () => console.log("Default function"),
  setDefaultFunction: (newFunction) => set({ defaultFunction: newFunction }),

  
  themeApp: localStorage.getItem("theme") || "light",
  setThemeApp: (status) => set({ themeApp: status }),

  themeColor: localStorage.getItem("themeColor") || "blue-theme",
  setThemeColor: (status) => set({ themeColor: status }),

  sendRequest: false,
  setSendRequest: (status) => set({ sendRequest: status }),

  backAddress: "/landing",
  setBackAddress: (status) => set({ backAddress: status }),

  titlePage: "dashboard",
  setTitlePage: (status) => set({ titlePage: status }),
}));

export default useAppStore;