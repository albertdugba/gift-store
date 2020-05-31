import React from "react";
import Banner from "./Banner";
import ProductCard from "../Products/ProductCard";
import ProductList from "../Products/ProductList";
import Tabs from "../Tab/Tabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tabs />
      <ProductCard />
      <ProductList />
    </div>
  );
};

export default Home;
