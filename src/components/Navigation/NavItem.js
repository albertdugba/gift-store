import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemStyles } from "../../styles/NavigationStyles";

const NavItem = ({ children, link, exact }) => {
  return (
    <NavItemStyles>
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </NavItemStyles>
  );
};

export default NavItem;
