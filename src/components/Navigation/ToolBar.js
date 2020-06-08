import React from "react";

import { Container } from "../../styles/global/global";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";
import {
  DesktopOnly,
  HeaderStyles,
  NavContainer,
} from "../../styles/StyledNavigation/NavigationStyles";

const ToolBar = ({ drawerToggle }) => {
  return (
    <HeaderStyles>
      <Container>
        <NavContainer>
          <Hamburger clicked={drawerToggle} />

          <h3 style={{ color: "pink" }}>GiftStore</h3>
          <DesktopOnly>
            <NavItems />
          </DesktopOnly>
        </NavContainer>
      </Container>
    </HeaderStyles>
  );
};

export default ToolBar;
