import React from "react";
import { BrowserRouter, ReactDOM } from "react-router-dom";
import App from "./src/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
