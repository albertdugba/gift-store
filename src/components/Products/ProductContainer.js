import React from "react";
import {
  ProductContainerStyle,
  CardInner,
  ProductImage,
} from "../../styles/StyledProducts/Product";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global/global";

const ProductContainer = ({ imageUrl, name, price, _id }) => {
  return (
    <Container>
      <ProductContainerStyle>
        <Link to={`/product/${_id}`}>
          <ProductImage>
            <img src={imageUrl} alt={name} />
          </ProductImage>
          <CardInner>
            <p>{name}</p>
            <p>${parseInt(price)}</p>
          </CardInner>
        </Link>
      </ProductContainerStyle>
    </Container>
  );
};

export default ProductContainer;
