import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/hoc/Layout";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/pages/Cart/Cart";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Shipping from "./components/pages/Shipping";
import Payment from "./components/pages/Payment/Payment";
import PlaceOrder from "./components/pages/Order/PlaceOrder";

function App() {
  const authLogin = useSelector(state => state.login);
  const { userInfo } = authLogin;
  console.log("Auth login", userInfo);

  return (
    <Layout>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/payment" component={Payment} />
      <Route path="/order" component={PlaceOrder} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
