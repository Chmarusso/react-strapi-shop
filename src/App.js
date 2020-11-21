import React from "react";
import Header from "./components/Header.js";
import Store from "./pages/Store.js";
import Cart from "./pages/Cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
