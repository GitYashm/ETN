import React from "react";
import "./item2.css";

const Item2 = (props) => {
  return (
    <div className="item2">
      <div className="Homepage-item2-details">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="price2">
        <div className="oldprice2">{props.oldPrice} $</div>
        <div className="newprice2">{props.newPrice} $</div>
      </div>
    </div>
  );
};
export default Item2;
