import React from "react";
import ReactDom from "react-dom/client";
import "./tailwind.css";

import { CarRental } from "./CarRental.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarRental />
  </React.StrictMode>,
);
