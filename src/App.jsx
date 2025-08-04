import React, { useEffect, lazy, Suspense } from "react";

// Functions
import prepareApp from "./app/utils/libs/prepareApp.js";

// Components
import LoaderPage from "./app/components/LoaderPage.jsx";

const Landing = lazy(() => import("./app/containers/Landing.jsx"));

const App = () => {
  useEffect(() => {
    prepareApp();
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <LoaderPage className={"h-screen bg-white dark:bg-background"} />
        }
      >
        <Landing />
      </Suspense>
    </>
  );
};

export default App;