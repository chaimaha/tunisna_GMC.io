import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";

import DataProvider from "./redux/Store/store";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
