import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import NavItem from "./NavItem";
import { NavItemsStyles } from "../../styles/StyledNavigation/NavigationStyles";
import { Container } from "../../styles/global/global";

const NavItems = () => {
  const cart = useSelector(state => state.cart);
  const { qty } = cart;

  console.log(qty);

  const dispatch = useDispatch();
  return (
    <Container>
      <NavItemsStyles>
        <NavItem exact link="/">
          Home
        </NavItem>
        <NavItem link="/cart/">
          <FaShoppingCart /> {qty}items
        </NavItem>
        <NavItem link="/login">Login</NavItem>
      </NavItemsStyles>
    </Container>
  );
};
export default NavItems;
