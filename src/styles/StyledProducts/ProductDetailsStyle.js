import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const Details = styled.div`
  width: 100%;
  max-width: 940px;
  margin: auto;
  display: flex;
  border-radius: 7px;
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
    border-radius: 7px;
  }

  @media ${mediaQueries.mediumSize} {
    flex-flow: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1.5;
  margin: 20px;
`;
export const RightColumn = styled.div`
  flex: 1.5;
  margin: 20px;
`;

export const ProductDesc = styled.div`
  & div,
  h1,
  span {
    border-bottom: 1px solid #e1e8ee;
    line-height: 1.5;
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
    font-size: 40px;
    @media ${mediaQueries.mediumSize} {
      font-weight: 300;
      font-size: 27px;
      color: #43484d;
      letter-spacing: -2px;
    }
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
