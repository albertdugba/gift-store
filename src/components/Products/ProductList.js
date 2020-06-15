import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../../store/action/ProductActions";
import { ProductItemStyle } from "../../styles/StyledProducts/Product";
import { Container } from "../../styles/global/global";
import { Details } from "../../styles/StyledProducts/ProductDetailsStyle";
import ProductContainer from "./ProductContainer";
import Spinner from "../UI/Spinner/Spinner";

const ProductList = () => {
  const loadProducts = useSelector(state => state.allProducts);

  const dispatch = useDispatch();
  const { products, loading, error } = loadProducts;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const loadedData = loading ? (
    <div>
      <Details>
        <Spinner />
      </Details>
    </div>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : products.data === undefined ? (
    <div>
      <Details>
        <Spinner />
      </Details>
    </div>
  ) : (
    products.data.map((p, idx) => <ProductContainer {...p} key={idx} />)
  );
  return (
    <Container>
      <ProductItemStyle>{loadedData}</ProductItemStyle>
    </Container>
  );
};

export default ProductList;
