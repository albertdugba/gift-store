import React from "react";
import logo from "../../images/logo.jpg";
import {
  HeaderStyles,
  Logo,
  NavContainer,
  DesktopOnly,
} from "../../styles/NavigationStyles";
import { FixedContainer } from "../../styles/global";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";

const ToolBar = () => {
  return (
    <HeaderStyles>
      <FixedContainer>
        <NavContainer>
          <Hamburger />
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
