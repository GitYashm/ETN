import React from "react";
import "./item3.css";
const Item3 = (props) => {
  return (
    <div className="item3">
      <div className="Homepage-item3-details">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="price3">
        <div className="oldprice3">{props.oldPrice} $</div>
        <div className="newprice3">{props.newPrice} $</div>
      </div>
    </div>
  );
};
export default Item3;
