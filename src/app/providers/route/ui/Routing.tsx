import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../config/routes";

export const Routing = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                {routes.map(route => <Route {...route}/>)}
            </Routes>
        </Suspense>
    );
};