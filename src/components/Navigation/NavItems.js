import React from "react";
import NavItem from "./NavItem";
import { NavItemsStyles } from "../../styles/StyledNavigation/NavigationStyles";
import { Container } from "../../styles/global/global";

const NavItems = () => {
  return (
    <Container>
      <NavItemsStyles>
        <NavItem exact link="/">
          Home
        </NavItem>
        <NavItem link="/cart/">Cart</NavItem>
        <NavItem link="/login">Login</NavItem>
      </NavItemsStyles>
    </Container>
  );
};
export default NavItems;
