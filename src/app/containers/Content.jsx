import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Landing from "./Landing.jsx";

// just for test
// const Test = lazy(() => import("../../components/TestCode.jsx"));


// Landing

const LazyDashboardLanding = lazy(() =>
    import("../../features/dashboard/DashboardLanding.jsx")
);

const LazyBody = lazy(() =>
    import("../../features/dashboard/components/Body.jsx")
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
                    <Route path="/dashboard/home" element={<LazyBody />} />
                    

                </Route>


            </Routes>
        </>
    );
};

export default Content;