import React from "react";
import { HamburgerStyle } from "../../styles/HamburgerStyles";

const Hamburger = ({ clicked }) => {
  return (
    <HamburgerStyle onClick={clicked}>
      <span />
      <span />
      <span />
    </HamburgerStyle>
  );
};

export default Hamburger;
