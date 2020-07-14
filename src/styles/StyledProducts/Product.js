import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const ProductContainerStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background: #f6efef;
  /* margin: auto; */
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColor};
  }

  & img {
    height: auto;
    max-width: 290px;
    border-radius: 5px;
  }

  @media ${mediaQueries.smartSize} {
    & {
      flex: 1 46%;
    }
  }

  @media ${mediaQueries.mediumSize} {
    flex: 1 21%;
  }

  @media ${mediaQueries.mobileSmall} {
    height: 350px;

    & img {
      height: auto;
      width: 100%;
      max-width: 310px;
    }
  }
`;

export const ProductItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  justify-items: center;
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-top: -10px;
  justify-items: center;
`;

export const ProductImage = styled.div`
  img {
    width: 100%;
    width: 240px;
    height: 170px;
  }
`;
