import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/pomoc",
        element: <Home/>,
    },
    {
        path: "/zwierzeta",
        element: <Home/>,
    },
    {
        path: "/kontakt",
        element: <Home/>,
    }
]);