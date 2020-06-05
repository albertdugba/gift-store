import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../store/action/ProductActions";
import { Details } from "../../styles/StyledProducts/ProductDetailsStyle";
import { Container } from "../../styles/global/global";
import Spinner from "../UI/Spinner/Spinner";

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
        <Container>
          <section>
            <h1 style={{ fontSize: "3rem" }}>{product.data.name}</h1>
            <div>{product.data.description}</div>
            <div>{product.data.numberInStock}</div>
            <div>{product.data.price}</div>
            <div>{product.data.slug}</div>
          </section>

          {/* <img src={product.data.imageUrl} alt={product.data.name} /> */}
        </Container>
      </Details>
    </div>
  );

  return <div>{loadedDetails}</div>;
};

export default ProductDetails;
