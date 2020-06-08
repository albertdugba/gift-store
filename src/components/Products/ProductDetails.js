import React, { useState, useEffect } from "react";
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
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);

  const { product, loading, error } = productDetails;

  const onAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(getProductDetails(props.match.params.id));
  }, [props.match.params.id, dispatch]);

  const loadedDetails = loading ? (
    <Spinner />
  ) : product.data === undefined ? (
    <h1>{error}</h1>
  ) : (
    <>
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
            <div>
              Quantity
              <select value={qty} onChange={e => setQty(e.target.value)}>
                {[...Array(product.data.numberInStock).keys()].map(x => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </ProductDesc>
          <ProductPrice>
            <span>${product.data.price.toFixed(2)}</span>
            <SecondaryBtn
              onClick={onAddToCart}
              disabled={product.data.numberInStock < 0}
            >
              {product.data.numberInStock < 0 ? "Out of stock" : "Add to cart"}
            </SecondaryBtn>
          </ProductPrice>
        </RightColumn>
      </Details>
    </>
  );

  return <>{loadedDetails}</>;
};

export default ProductDetails;
