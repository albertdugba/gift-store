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
        <NavItem link="/cart/">Shopping Cart</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <NavItem link="/faq">FAQ</NavItem>
      </NavItemsStyles>
    </Container>
  );
};

export default NavItems;
