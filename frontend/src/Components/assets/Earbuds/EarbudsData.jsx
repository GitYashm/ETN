import React from "react";
import Earbudsitem from "./Earbudsitem";
import Earbuds from "../Earbuds";
import "./EarbudsData.css";
import { Link } from "react-router-dom";
const EarbudsData = () => {
  return (
    <div className="Earbuds-data">
      <div className="Earbuds-heading">
        <h1>TOP EARBUDS </h1>
        <hr />
      </div>

      <div className="popular-Earbuds">
        {Earbuds.map((item, i) => {
          return (
            <Link to={`/productearbuds/${item.id}`}>
              <Earbudsitem
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default EarbudsData;
