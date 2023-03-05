import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/productContext";
import { AppProviderFilter } from "./context/filterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AppProviderFilter>
        <App />
      </AppProviderFilter>
    </AppProvider>
  </React.StrictMode>
);
