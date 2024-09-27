import React from "react";
import "./TowerData.css";
import Towerdata from "../Tower";
import Toweritem from "./Toweritem";
import { Link } from "react-router-dom";

const TowerData = () => {
  return (
    <div className="Tower-data">
      <div className="Tower-heading">
        <h1>TOP TOWERS SPEAKERS </h1>
        <hr />
      </div>

      <div className="popular-Tower">
        {Towerdata.map((item, i) => {
          return (
            <Link to={`/product/${item.id}`}>
              <Toweritem
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

export default TowerData;
