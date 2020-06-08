import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/hoc/Layout";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <Layout>
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
