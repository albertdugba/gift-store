import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../store/action/ProductActions";
import {
  Details,
  LeftColumn,
  RightColumn,
  ProductPrice,
  ProductDesc,
} from "../../styles/StyledProducts/ProductDetailsStyle";

import Spinner from "../UI/Spinner/Spinner";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";

const ProductDetails = props => {
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);

  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(props.match.params.id));
  }, []);

  const loadedDetails = loading ? (
    <Spinner />
  ) : product.data === undefined ? (
    <h1>{error}</h1>
  ) : (
    <div>
      <Details>
        <LeftColumn>
          <img src={product.data.imageUrl} alt={product.data.name} />
        </LeftColumn>

        <RightColumn>
          <ProductDesc>
            <span>{product.data.slug}</span>
            <h1>{product.data.name}</h1>
            <div>{product.data.description}</div>
            <div>Number in stock: {product.data.numberInStock}</div>
          </ProductDesc>
          <ProductPrice>
            <span>${product.data.price.toFixed(2)}</span>
            <SecondaryBtn>Add to cart</SecondaryBtn>
          </ProductPrice>
        </RightColumn>
      </Details>
    </div>
  );

  return <div>{loadedDetails}</div>;
};

export default ProductDetails;
