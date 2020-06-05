import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/hoc/Layout";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <Layout>
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
