import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { CssBaseline } from "@mui/material";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
