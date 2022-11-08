import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
const Home = React.lazy(() => import("../../pages/Home/Home"));
const Estimate = React.lazy(() => import("../../pages/Estimate/Estimate"));
const Contacts = React.lazy(() => import("../../pages/Contacts/Contacts"));
const Constructor = React.lazy(() => import("../../pages/Constructor/Constructor"));


const RoutingOverlay = () => {

    return (
        <div>
            <Routes>
                <Route index element={
                    <React.Suspense fallback={<Loading/>}>
                        <Home/>
                    </React.Suspense>
                }/>
                <Route path={"estimate"} element={
                    <React.Suspense fallback={<Loading/>}>
                        <Estimate/>
                    </React.Suspense>
                }/>
                <Route path={"contact"} element={
                    <React.Suspense fallback={<Loading/>}>
                        <Contacts/>
                    </React.Suspense>
                }/>
                <Route path={"constructor"} element={
                    <React.Suspense fallback={<Loading/>}>
                        <Constructor/>
                    </React.Suspense>
                }/>

            </Routes>
        </div>
    );
};

export default RoutingOverlay;