import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoviesProvider } from "./context/MoviesContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </BrowserRouter>
);
