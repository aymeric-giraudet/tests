import React from "react";
import ReactDOM from "react-dom";

import "@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css";
import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";
import "@axa-fr/react-toolkit-form-input-text/dist/af-inputtext.css";
import "@axa-fr/react-toolkit-form-core/dist/af-form.css";
import "@axa-fr/react-toolkit-button/dist/af-button.css";

import App from "./Form.container";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
