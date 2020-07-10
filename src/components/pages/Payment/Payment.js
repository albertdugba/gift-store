import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "../Auth/Shared.css";

import { SecondaryBtn } from "../../../styles/StyledUIElements/Button";
import { Container } from "../../../styles/global/global";
import CheckOutSteps from "../CheckOutSteps";

const Payment = props => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = event => {
    event.preventDefault();
    // dispatch(payment({ paymentMethod }));
    props.history.push("payment");
  };

  return (
    <>
      <div id="container">
        <Container>
          {" "}
          <CheckOutSteps step1 step2 step3 />
        </Container>
        <div id="wrapper">
          <div className="form-container">
            <motion.span
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="form-heading"
            >
              Payment
            </motion.span>
            <form onSubmit={onSubmitHandler}>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="radio"
                  placeholder="Address"
                  required
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <SecondaryBtn>Payment</SecondaryBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
