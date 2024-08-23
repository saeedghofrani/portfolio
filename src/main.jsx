import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
    </ThemeProvider>
  </React.StrictMode>
);
