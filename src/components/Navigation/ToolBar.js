import React from "react";
import logo from "../../images/logo.jpg";
import { FixedContainer } from "../../styles/global/global";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";
import {
  DesktopOnly,
  HeaderStyles,
  Logo,
  NavContainer,
} from "../../styles/StyledNavigation/NavigationStyles";

const ToolBar = ({ drawerToggle }) => {
  return (
    <HeaderStyles>
      <FixedContainer>
        <NavContainer>
          <Hamburger clicked={drawerToggle} />
          <Logo>
            {" "}
            <img src={logo} alt="" />
          </Logo>
          <DesktopOnly>
            <NavItems />
          </DesktopOnly>
        </NavContainer>
      </FixedContainer>
    </HeaderStyles>
  );
};

export default ToolBar;
