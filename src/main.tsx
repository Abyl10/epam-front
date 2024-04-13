import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user-context.tsx";
import { DrawerProvider } from "./context/drawer-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </UserProvider>
  </BrowserRouter>
);
