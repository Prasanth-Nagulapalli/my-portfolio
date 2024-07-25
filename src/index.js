import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScreenSizeProvider from "./customHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </React.StrictMode>
);


