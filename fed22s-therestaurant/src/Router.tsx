import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { BookingPage } from "./components/pages/BookingPage";
import { Contact } from "./components/pages/Contact";
import { Admin } from "./components/pages/Admin";
import { Menu } from "./components/pages/Menu";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/booking",
        element: <BookingPage></BookingPage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
]);
