import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes"; // Your routing setup
import { BrowserRouter } from "react-router-dom"; // Correct import for routing
import "./index.css"; // Optional global styles

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
