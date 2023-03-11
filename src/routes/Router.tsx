import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Contact from "../pages/Contact";
import Etr from "../pages/Etr";

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
    },
    {
        path: "/etr",
        element: <Etr/>,
    }
]);