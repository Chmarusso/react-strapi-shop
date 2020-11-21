import React from "react";
import Product from "../components/Product";

const products = [
  {
    id: "1",
    title: "Luxury Cat",
    price: 1000,
    imageUrl: "http://placekitten.com/g/600/300",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  },

  {
    id: "2",
    title: "Other Cat",
    price: 1200,
    imageUrl: "http://placekitten.com/g/600/300",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  }
];

export default function Store() {
  return (
    <main>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
