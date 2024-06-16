// src/route.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Home from "./components/Home";
import Properties from "./components/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import AboutUs from "./pages/AboutUs";
import Contacts from "./components/Contacts";
import News from "./components/News";
import NewsDetail from "./pages/NewsDetail";

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
        path: "properties",
        element: <Properties />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsDetail />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export { router };
