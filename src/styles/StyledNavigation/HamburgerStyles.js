import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const HamburgerStyle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 10px;

  & span {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.primaryColorPink};
  }

  @media ${mediaQueries.mobileLarge} {
    display: none;
  }
`;
