import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Mesolithica from "./components/Mesolithica";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Mesolithica mount={rootElement} />
  </StrictMode>,
  rootElement
);
