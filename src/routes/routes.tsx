import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "../pages/home/Home";
import NOTIFICATION from "../pages/notification/Notification";
import Personal from "../pages/personal/Personal";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/notification",
        element: <NOTIFICATION />
    },
    {
        path: "/personal",
        element: <Personal />
    }
])