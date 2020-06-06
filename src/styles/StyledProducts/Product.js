import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const ProductContainerStyle = styled.div`
  width: 600vw;
  height: auto;
  display: flex;
  padding-left: 4.5%;
  padding-right: 4.5%;
  padding-top: 4.5%;
  border: 1px solid #eeed;
  border-radius: 4px;
  flex: 1 18%;
  background: #f9f8fa;
  margin-top: 20px 20px auto;

  & a {
    text-decoration: none;
  }

  & img {
    max-height: auto;
    width: 100%;
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
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  row-gap: 1.3rem;
  column-gap: 2.5rem;
  padding: 0.5rem;
  justify-items: center; */
  display: flex;
  flex-wrap: wrap;
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-top: -10px;
`;
