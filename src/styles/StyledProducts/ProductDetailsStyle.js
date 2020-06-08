import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const Details = styled.div`
  width: 100%;
  background: #f9f8fa;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-left: 20px;
  margin-right: -20px;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-x: hidden;

  @media ${mediaQueries.mediumSize1} {
    flex-direction: column;
    margin-top: 60px;
  }

  & img {
    width: 100%;
    height: auto;
    max-width: 600px;
    border-radius: 7px;
  }
`;

export const LeftColumn = styled.aside`
  @media ${mediaQueries.mediumSize1} {
    width: 100%;
  }
  width: 65%;
  position: relative;

  & img {
    @media ${mediaQueries.mediumSize1} {
      width: 100%;
      max-width: 550px;
      right: 0;
      top: -65px;
      left: initial;
    }
    width: 100%;
    /* position: absolute; */
    left: 0;
    top: 0;
  }
`;
export const RightColumn = styled.div`
  @media ${mediaQueries.mediumSize1} {
    width: 100%;
  }
  width: 35%;
  margin-top: 60px;
`;

export const ProductDesc = styled.div`
  border-bottom: 3px solid #e1e8ee;
  margin-bottom: 20px;

  & div {
    border-bottom: 3px solid #e1e8ee;
  }

  & span {
    font-size: 12px;
    color: #358ed7;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    background: ${({ theme }) => theme.buttonColor};
    padding: 0.5rem;
    height: 30px;
    border-radius: 50px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  }

  & h1 {
    font-weight: 300;
    font-size: 52px;
    color: #43484d;
    letter-spacing: -2px;
  }

  & p {
    font-size: 16px;
    font-weight: 300;
    color: #86939e;
    line-height: 24px;
    border-bottom: 3px solid #e1e8ee;
  }
`;
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  & span {
    font-size: 26px;
    font-weight: 300;
    color: #43474d;
    margin-right: 20px;
  }
`;
