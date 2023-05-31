import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Layout></Layout>,
        index: true
    },
    {
        path:"/booking",
        element:
    },
    {
        path:"/contact",
        element:
    },
    {
        path: "/admin",
        element:
    }
]);
