import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])