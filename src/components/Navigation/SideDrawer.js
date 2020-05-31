import React, { Fragment } from "react";

import { Logo } from "../../styles/StyledNavigation/NavigationStyles";
import logo from "../../images/logo.jpg";
import classes from "../../styles/StyledNavigation/SideDrawer.module.css";
import NavItems from "./NavItems";
import BackDrop from "./BackDrop";

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <BackDrop clicked={closed} show={open} />
      <div className={attachedClasses.join(" ")} onClick={closed}>
        <Logo>
          <img src={logo} alt="GiftShop" />
        </Logo>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
