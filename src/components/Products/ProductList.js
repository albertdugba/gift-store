import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/action/ProductActions";
import { ProductItemStyle } from "../../styles/StyledProducts/Product";
import { Container } from "../../styles/global/global";
import Spinner from "../UI/Spinner/Spinner";
import ProductContainer from "./ProductContainer";

const ProductList = () => {
  const loadProducts = useSelector(state => state.allProducts);

  const dispatch = useDispatch();
  const { products, loading, error } = loadProducts;
  console.log(products.data);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const loadedData = loading ? (
    <div style={{ textAlign: "center" }}>
      <Spinner />
    </div>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : products.data === undefined ? (
    <div style={{ textAlign: "center" }}>
      <Spinner />
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
