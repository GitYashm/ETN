import React from "react";
import "./item3data.css";
import Item3 from "../Item3/Item3";
import data_product3 from "../data3";

const Item3data = () => {
  return (
    <div className="Item3-data">
      <div className="item3-heading">
        <h1>POPULAR NECKBANDS </h1>
        <hr />
      </div>

      <div className="popular-item3">
        {data_product3.map((item, i) => {
          return (
            <Item3
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
export default Item3data;
