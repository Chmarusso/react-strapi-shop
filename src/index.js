import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./components/Cart.js";
import { CurrentUserProvider } from "./components/CurrentUser.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  rootElement
);
