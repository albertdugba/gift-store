import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxStoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/global";
import { theme } from "./styles/global/theme";

import App from "./App";
import { store } from "./store";

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ReduxStoreProvider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
