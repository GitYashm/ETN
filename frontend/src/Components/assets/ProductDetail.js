// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import Towerdata from "./Towerdata";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Towerdata.find((item) => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>New Price: ${product.new_price}</p>
      <p>Old Price: ${product.old_price}</p>
    </div>
  );
};

export default ProductDetail;
