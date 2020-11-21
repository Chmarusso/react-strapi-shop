import React from "react";
import { useDispatchCart } from "./Cart";

const Product = ({ product }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img
        src={product.imageUrl}
        className="db w-100 br2 br--top"
        alt="kitten looking menacing."
      />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{product.title}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">{product.desc}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
