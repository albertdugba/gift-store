import React, { Fragment } from "react";
import { Logo } from "../../styles/NavigationStyles";
import NavItems from "./NavItems";
import classes from "../../styles/SideDrawer.module.css";

const SideDrawer = () => {
  return (
    <Fragment>
      <div className={classes.SideDrawer}>
        <Logo>LOGO</Logo>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
