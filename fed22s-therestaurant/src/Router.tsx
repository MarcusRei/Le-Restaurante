import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path:"/",
                index: true
            },
            {
                path: "/booking",
                element:
            },
            {
                path:"/contact",
                element:
            },
            {
                path:"/admin",
                element:
            }
        ]
    }
]);
