import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Contact from "../pages/Contact";

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
        element: <Contact/>,
    }
]);