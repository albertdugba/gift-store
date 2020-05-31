import React from "react";
import { Container } from "../../styles/global/global";

const Product = ({ imageUrl, name, description }) => {
  return (
    <Container>
      <img src={imageUrl} alt={name} />
    </Container>
  );
};

export default Product;
