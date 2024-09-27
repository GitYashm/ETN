import React from "react";
import "./Neckbanditem.css";
const NeckbandItem = (props) => {
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
export default NeckbandItem;
