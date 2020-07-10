import React from "react";
import { Container } from "../../styles/global/global";

import "./Cart/CheckOutSteps.css";

const CheckOutSteps = props => {
  return (
    <>
      <Container>
        <div className="Checkout__steps">
          <div className={props.step1 ? "active" : ""}>Login</div>
          <div className={props.step2 ? "active" : ""}>Shipping</div>
          <div className={props.step3 ? "active" : ""}>Payment</div>
          <div className={props.step4 ? "active" : ""}>Order</div>
        </div>
      </Container>
    </>
  );
};

export default CheckOutSteps;
