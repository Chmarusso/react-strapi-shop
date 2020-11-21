import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cart";

const Header = () => {
  const items = useCart();

  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <Link className="link dim white dib mr3" to="/">
          Store
        </Link>
        <Link className="link dim white dib mr3" to="/cart">
          Cart ({items.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
