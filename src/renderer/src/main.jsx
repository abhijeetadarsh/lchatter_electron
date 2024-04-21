import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/globals.css";
import CustomTitleBar from "./components/layout/CustomTitleBar";

ReactDOM.createRoot(document.getElementById("titlebar")).render(
  <React.StrictMode>
    <CustomTitleBar />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
