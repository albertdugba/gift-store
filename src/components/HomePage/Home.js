import React from "react";

import Banner from "./Banner";
import ProductList from "../Products/ProductList";
import Tabs from "../Tab/Tabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tabs />
      <ProductList />
    </div>
  );
};

export default Home;
