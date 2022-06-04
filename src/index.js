import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./app/store";
import "./styles/main.css";
import "./styles/main.scss";
import "./styles/fonts.css";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  rootEl
);
