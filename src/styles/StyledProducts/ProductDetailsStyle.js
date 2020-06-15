import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const Details = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 0.8rem;
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  vertical-align: top;

  & img {
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 7px;
  }
`;

export const LeftColumn = styled.div`
  width: 65%;
  border: 2px solid red;
`;
export const RightColumn = styled.div`
  width: 35%;
  margin-top: 60px;
  border: 2px solid red;
  height: auto;
`;

export const ProductDesc = styled.div`
  border-bottom: 3px solid #e1e8ee;
  margin-bottom: 20px;

  & div {
    border-bottom: 1px solid #e1e8ee;
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
    border-bottom: 1px solid #e1e8ee;
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
