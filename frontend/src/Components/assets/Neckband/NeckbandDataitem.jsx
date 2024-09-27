import React from "react";
import "./Neckbanddata.css";
import Neckbanditem from "./Neckbanditem";

import Neckband from "./Neckband";
import { Link } from "react-router-dom";

const NeckbandDataitem = () => {
  return (
    <div className="Neckband-data">
      <div className="Neckband-heading">
        <h1>TOP NECKBANDS </h1>
        <hr />
      </div>

      <div className="popular-Neckband">
        {Neckband.map((item, i) => {
          return (
            <Link to={`/productneckband/${item.id}`}>
              <Neckbanditem
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
export default NeckbandDataitem;
