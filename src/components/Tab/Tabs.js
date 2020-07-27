import React, { useState, useEffect } from "react";
import axios from "axios";

import { Centered, Container } from "../../styles/global/global";
import "./Tabs.css";

const Tabs = () => {
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    axios
      .get(`/api/v1/products`)
      .then(response => {
        console.log(response.data.data[1]);
      })
      .catch(error => console.log(error));
  });

  const onFilter = event => {
    setQuery(event.target.value);
  };
  return (
    <Container style={{ marginTop: "40px" }}>
      <Centered>
        <div className="Filter-select__container">
          <div>
            <select>
              <option value="all">All Products</option>
              <option value="cups">Jewerly</option>
              <option value="bags">Bags</option>
              <option value="flowers">Flowers</option>
              <option value="perfume">Perfume</option>
              <option value="jar">Jar</option>
              <option value="mug">Mug</option>
            </select>
          </div>
          <input
            type="text"
            value={query}
            placeholder="Search gifts..."
            onChange={onFilter}
          />
        </div>
      </Centered>
    </Container>
  );
};

export default Tabs;
