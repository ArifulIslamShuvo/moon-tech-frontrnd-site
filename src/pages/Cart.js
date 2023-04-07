import React from "react";
import ProductCard from "../components/ProductCard";
import {  useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <p className="text-blue-400 text-2xl">loading...</p>;
  }
  if (error) {
    content = <p className="text-red-500">Error</p>;
  }
  if (!loading && !error && cart.length === 0) {
    content = <p className="text-yellow-400 text-2xl">Nothing to show</p>
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ProductCard product={product} key={product._id} />
    ))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
