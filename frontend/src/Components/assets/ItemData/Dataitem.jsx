import React from "react";
import data_product from "../data";
import Item from "../Item/Item";
import "./data.css";

const Dataitem = () => {
  return (
    <div className="Item-data">
      <div className="item-heading">
        <h1>POPULAR EARBUDS</h1>
        <hr />
      </div>

      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Dataitem;
