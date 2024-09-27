import React from "react";
import "./Earbudsitem.css";
const Earbudsitem = (props) => {
  return (
    <div className="item">
      <div className="Homepage-item-details">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
      <div className="price">
        <div className="oldprice">{props.oldPrice} $</div>
        <div className="newprice">{props.newPrice} $</div>
      </div>
    </div>
  );
};
export default Earbudsitem;
