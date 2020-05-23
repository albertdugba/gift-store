import React, { Fragment } from "react";

import logo from "../../images/logo.jpg";
import { Logo } from "../../styles/NavigationStyles";
import NavItems from "./NavItems";
import classes from "../../styles/SideDrawer.module.css";
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
