import React from "react";
import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App.jsx";
import "primeicons/primeicons.css";
import "./styles.css";
import "./rebrand/rebrand.css";
import "./rebrand/polish.css";

inject({ mode: "auto" });

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
