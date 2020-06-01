import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const ProductCardStyle = styled.div`
  @media ${mediaQueries.mobileLarge} {
    height: 250px;
    background: white;
    color: black;
    cursor: pointer;
    max-width: 230px;
    max-height: 400px;
    margin: 1rem;
    padding: 0.45rem;
    border-radius: 13px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media ${mediaQueries.mobileSmall} {
    height: 200px;
  }

  @media ${mediaQueries.mobileXtraSmall} {
    height: 270px;
  }
`;

export const ProductItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 1.1rem;
  column-gap: 1.3rem;
  padding: 0.5rem;
  justify-items: center;
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 240px;
  border-radius: 13px;
`;
