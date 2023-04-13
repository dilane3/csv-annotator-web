import GXProvider from "@dilane3/gx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./gx/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GXProvider store={store}>
    <App />
  </GXProvider>
);
