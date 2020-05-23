import React from "react";
import { BackDropStyles } from "../../styles/BackDropStyles";

const BackDrop = ({ clicked, show }) => {
  return show ? <BackDropStyles onClick={clicked}></BackDropStyles> : null;
};

export default BackDrop;
