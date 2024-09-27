import React from "react";
import Neckbanddata from "../Components/assets/Neckband/Neckband";
import "./CSS/productdetails.css";
import { useParams } from "react-router-dom";
import star from "./images/514b0215e93fc3f2ee518064d963fc39_t.jpeg";
const ProductNeckbandDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = Neckbanddata.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="productDetails">
      <div className="side4images">
        <img src={product.image} alt="" />
        <hr />
        <img src={product.image} alt="" />
        <hr />
        <img src={product.image} alt="" />
        <hr />
        <img src={product.image} alt="" />
      </div>
      <div className="productimagesNeckband">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="righty-product-details">
        <h1>{product.name}</h1>
        <div className="star-comment">
          <img className="star" src={star} alt="" />
          <p>(78)</p>
        </div>
        <div className="price">
          <div className="paragraph">
            <p className="oldprice">${product.old_price}</p>
            <p className="newprice">${product.new_price}</p>
          </div>
          <p className="para">{product.para}</p>

          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        <p>Inclusive of all taxes</p>
      </div>
    </div>
  );
};
export default ProductNeckbandDetails;
