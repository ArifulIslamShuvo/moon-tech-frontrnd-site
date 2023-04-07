import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  console.log(products);

  let content;
  if (loading) {
    content = <p className="text-blue-400 text-2xl">loading...</p>;
  }
  if (error) {
    content = <p className="text-red-500">Error</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p className="text-yellow-400 text-2xl">Nothing to show</p>
  }

  if (!loading && !error && products.length) {
    content = products.filter(product=> product.rating >= 4).map((product) => (
      <ProductCard product={product} key={product._id} />
    ))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
