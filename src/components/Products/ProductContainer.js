import React, { useEffect } from "react";
import {
  ProductContainerStyle,
  CardInner,
} from "../../styles/StyledProducts/Product";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global/global";

const ProductContainer = ({ imageUrl, name, price, _id }) => {
  const onAddToCart = productId => {};

  useEffect(() => {}, []);

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
        <SecondaryBtn onClick={onAddToCart(_id)}>Buy</SecondaryBtn>
      </Container>
    </ProductContainerStyle>
  );
};

export default ProductContainer;
