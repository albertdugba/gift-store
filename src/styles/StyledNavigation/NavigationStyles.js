import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.bannerBackground};
`;

export const Logo = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const NavItemsStyles = styled.ul`
  @media ${mediaQueries.mobileSmall} {
    margin: 20px 0;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
  }

  @media ${mediaQueries.mobileLarge} {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
`;

export const NavItemStyles = styled.li`
  @media ${mediaQueries.mobileSmall} {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    margin: 30px 10px 0 70px;

    & a {
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      display: block;
      color: ${({ theme }) => theme.primaryColorPink};
      height: 100%;

      &.active,
      &:hover,
      &:focus {
        color: pink;
      }
    }
  }

  @media ${mediaQueries.mobileLarge} {
    box-sizing: border-box;
    display: block;
    width: auto;
    height: 100%;
    margin: 15px;

    & a {
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      display: block;
      color: ${({ theme }) => theme.primaryColorPink};
      height: 100%;

      &.active,
      &:hover,
      &:focus {
        color: pink;
      }
    }
  }
`;

export const DesktopOnly = styled.nav`
  @media ${mediaQueries.mobileSmall} {
    display: none;
  }
`;
