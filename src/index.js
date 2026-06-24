import React from "react";
import { createRoot } from "react-dom/client";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";

import App from "./App";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
