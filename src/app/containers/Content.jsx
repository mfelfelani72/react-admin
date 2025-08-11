import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// just for test
// const Test = lazy(() => import("../../components/TestCode.jsx"));


// Landing

const LazyDashboardLanding = lazy(() =>
    import("../../features/dashboard/DashboardLanding.jsx")
);

const LazyPostsLists = lazy(() =>
    import("../../features/posts/containers/PostLists.jsx")
);



  

const Content = () => {
    return (
        <>
            <Routes>
                {/* just for test */}
                {/* <Route path="/mohammad/test" element={<Test />}></Route> */}


                {/* just for test */}

                {/* Landing */}
                {/* <Route path="*" element={<Landing />}></Route> */}
                <Route path="/" element={<LazyDashboardLanding />}></Route>
                {/* <Route path="/landing" element={<LazyHomeLanding />}></Route> */}



                {/* Dashboard */}
                <Route path="/dashboard" element={<LazyDashboardLanding />}>
                    <Route path="/dashboard/posts" element={<LazyPostsLists />} />
                  
                </Route>


            </Routes>
        </>
    );
};

export default Content;