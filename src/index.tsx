import * as React from "react";
import * as ReactDom from "react-dom/client";
import App from "./App";
import StoreProvider from "@Store/StoreProvider";
import "./styles.css";

const root = ReactDom.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
