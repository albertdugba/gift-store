import styled from "styled-components";
import { mediaQueries } from "./theme";

export const HamburgerStyle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 10px;

  & span {
    width: 45px;
    height: 3px;
    background-color: white;
  }

  @media ${mediaQueries.mobileLarge} {
    display: none;
  }
`;
