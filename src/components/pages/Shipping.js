import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./Auth/Shared.css";

import { Link } from "react-router-dom";
import { saveShipping } from "../../store/action/CartActions";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";
import CheckOutSteps from "./CheckOutSteps";
import { Container } from "../../styles/global/global";

const Shipping = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(saveShipping(address, city, postalCode, country));
    props.history.push("payment");
  };

  return (
    <>
      <div id="container">
        <Container>
          {" "}
          <CheckOutSteps step1 step2 />
        </Container>
        <div id="wrapper">
          <div className="form-container">
            <motion.span
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="form-heading"
            >
              Shipping
            </motion.span>
            <form onSubmit={onSubmitHandler}>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="number"
                  placeholder="Postal Code"
                  required
                  value={postalCode}
                  onChange={e => setPostalCode(e.target.value)}
                />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Country"
                  required
                  value={country}
                  onChange={e => setCountry(e.target.value)}
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

export default Shipping;
