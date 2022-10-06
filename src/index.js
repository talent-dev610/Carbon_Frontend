import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import "react-multi-carousel/lib/styles.css";
import { StyledEngineProvider } from "@mui/material";

import configureStore from "./store";

import { auth } from "./store/constants/auth";
let DefaultData = {
  auth: auth,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(DefaultData)}>
      <StyledEngineProvider injectfirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
