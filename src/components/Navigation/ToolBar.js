import React from "react";
import logo from "../../images/logo.jpg";
import {
  HeaderStyles,
  Logo,
  NavContainer,
  DesktopOnly,
} from "../../styles/NavigationStyles";
import { FixedContainer } from "../../styles/global/global";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";

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
