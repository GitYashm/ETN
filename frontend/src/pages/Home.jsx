import React from "react";
import HomePage from "../Components/HomePage/HomePage";
import Dataitem from "../Components/assets/ItemData/Dataitem";

import Item2data from "../Components/assets/item2data/item2data";
import Item3data from "../Components/assets/item3data/item3data";

const Home = () => {
  return (
    <>
      <HomePage />
      <Dataitem />
      <Item2data />
      <Item3data />
    </>
  );
};
export default Home;
