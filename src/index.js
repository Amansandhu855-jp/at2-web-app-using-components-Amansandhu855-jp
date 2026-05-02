import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);