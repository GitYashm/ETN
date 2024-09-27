import React from "react";
import "./item2data.css";
import Item2 from "../Item2/Item2";
import data_product2 from "../data2";

const Item2data = () => {
  return (
    <div className="Item2-data">
      <div className="item2-heading">
        <h1>POPULAR TOWERS </h1>
        <hr />
      </div>

      <div className="popular-item2">
        {data_product2.map((item, i) => {
          return (
            <Item2
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
export default Item2data;
