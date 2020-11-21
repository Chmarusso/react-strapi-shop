import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./components/Cart.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  rootElement
);
