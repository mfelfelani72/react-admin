import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// just for test
// const Test = lazy(() => import("../../components/TestCode.jsx"));

// Landing

import Landing from "./Landing.jsx";

// Dashboard

const LazyDashboardLanding = lazy(() =>
  import("../../features/dashboard/DashboardLanding.jsx")
);

// Home

const LazyHomeLanding = lazy(() =>
  import("../../features/home/HomeLanding.jsx")
);

// Posts

const LazyPostsLists = lazy(() =>
  import("../../features/posts/containers/PostLists.jsx")
);

const LazyCreatePost = lazy(() =>
  import("../../features/posts/containers/CreatePost.jsx")
);

const Content = () => {
  return (
    <>
      <Routes>
        {/* just for test */}
        {/* <Route path="/mohammad/test" element={<Test />}></Route> */}

        {/* just for test */}

        {/* Landing */}
        <Route path="*" element={<Landing />}></Route>

        {/* Dashboard */}
        <Route path="/" element={<LazyDashboardLanding />}>
          <Route path="/home" element={<LazyHomeLanding />}/>
          <Route path="/create-post" element={<LazyCreatePost />} />
          <Route path="/posts" element={<LazyPostsLists />} />
        </Route>
      </Routes>
    </>
  );
};

export default Content;
