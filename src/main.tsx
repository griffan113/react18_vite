import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./contexts";

import Routes from "./routes/Routes";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>
);
