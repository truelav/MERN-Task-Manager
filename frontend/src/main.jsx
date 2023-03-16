import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SaasProvider } from "@saas-ui/react";

import CSSBaseline from "@mui/material/CSSBaseline";

import App from "./App";
import "./styles/index.css";
import store from "../redux/store";

// import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
