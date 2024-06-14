// src/route.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import AboutUs from "./pages/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export { router };
