import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/action/productActions";
import ProductCard from "./ProductCard";
import { ProductItemStyle } from "../../styles/StyledProducts/ProductCardStyles";
import { FixedContainer } from "../../styles/global/global";

const ProductList = () => {
  const loadProducts = useSelector(state => state.allProducts);

  const dispatch = useDispatch();
  const { products, loading, error } = loadProducts;
  console.log(products.data);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const loadedData = loading ? (
    <h1>loading....</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : products.data === undefined ? (
    <h1>loading</h1>
  ) : (
    products.data.map((p, idx) => <ProductCard {...p} key={idx} />)
  );
  return (
    <FixedContainer>
      <ProductItemStyle>{loadedData}</ProductItemStyle>
    </FixedContainer>
  );
};

export default ProductList;
