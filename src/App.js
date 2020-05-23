import React from "react";

import "./App.css";
import Layout from "./components/hoc/Layout";
import Banner from "./components/HomePage/Banner";

function App() {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}

export default App;
