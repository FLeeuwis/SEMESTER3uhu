import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import { Home } from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Fetch from "./components/Fetch.jsx";
import ErrorLayout from "./pages/ErrorLayout.jsx";
import SimpleFetch from "./components/SimpleFetch.jsx";
import GoodFetch from "./components/GoodFetch.jsx";
import BetterFetch from "./components/BetterFetch.jsx";
import BestFetch from "./components/BestFetch.jsx";
import BestestFetch from "./components/BestestFetch.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/workshops/ReactFetch",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/fetch",
        element: <Fetch />,
      },
      {
        path: "/simplefetch",
        element: <SimpleFetch />,
      },
      {
        path: "/goodfetch",
        element: <GoodFetch />,
      },
      {
        path: "/betterfetch",
        element: <BetterFetch />,
      },
      {
        path: "/bestfetch",
        element: <BestFetch />,
      },
      {
        path: "/bestestfetch",
        element: <BestestFetch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} basename="/workshops/ReactFetch" />
);
