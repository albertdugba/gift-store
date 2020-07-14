import React from "react";
import { Centered, Container } from "../../styles/global/global";
import "./Tabs.css";

const Tabs = () => {
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
          <input type="text" placeholder="Search gifts..." />
        </div>
      </Centered>
    </Container>
  );
};

export default Tabs;
