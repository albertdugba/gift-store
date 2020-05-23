import React from "react";
import NavItem from "./NavItem";
import { NavItemsStyles } from "../../styles/NavigationStyles";

const NavItems = () => {
  return (
    <NavItemsStyles>
      <NavItem exact link="/">
        Home
      </NavItem>
      <NavItem link="/store">Store</NavItem>
      <NavItem link="/contact">Contact</NavItem>
      <NavItem link="/faq">FAQ</NavItem>
    </NavItemsStyles>
  );
};

export default NavItems;
