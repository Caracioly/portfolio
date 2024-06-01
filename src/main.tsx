import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

import Home from "@/pages/home";
import Resume from "@/pages/resume";
import Works from "@/pages/works";
import Shelf from "@/pages/shelf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/shelf",
    element: <Shelf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
