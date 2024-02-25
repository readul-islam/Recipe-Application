import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/main/routes/routes.jsx";
import "./index.css";
import CustomCookieConsent from "./components/cookie/CustomCookieConsent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomCookieConsent/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
