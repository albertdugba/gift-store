import React from "react";
import {
  ProductContainerStyle,
  CardInner,
} from "../../styles/StyledProducts/Product";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global/global";

const ProductContainer = ({ imageUrl, name, price, isFeatured, _id }) => {
  return (
    <ProductContainerStyle>
      <Container>
        <Link to={`/product/${_id}`}>
          <img src={imageUrl} alt={name} />
          <CardInner>
            <p>{name}</p>
            <p>${parseInt(price)}</p>
          </CardInner>
        </Link>
        <SecondaryBtn>Buy</SecondaryBtn>
      </Container>
    </ProductContainerStyle>
  );
};

export default ProductContainer;
