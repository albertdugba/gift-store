import React from "react";
import {
  ProductCardStyle,
  CardInner,
  ProductImage,
} from "../../styles/StyledProducts/ProductCardStyles";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <ProductCardStyle>
      <ProductImage src={imageUrl} alt={name} />
      <CardInner>
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
      </CardInner>
      <SecondaryBtn>Buy</SecondaryBtn>
    </ProductCardStyle>
  );
};

export default ProductCard;
