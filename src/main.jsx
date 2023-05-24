import React from "react";
import ReactDOM from "react-dom/client";
import AppGroup from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Terms } from "./routes/terms.jsx";
import { Conditions } from "./routes/conditions.jsx";
import Root from "./routes/home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/terminos",
    element: <Terms />,
  },
  {
    path: "/condiciones",
    element: <Conditions />,
  },
  {
    path: "/extraccion",
    element: <AppGroup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
