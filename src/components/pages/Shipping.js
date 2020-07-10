import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./Auth/Shared.css";

import { Link } from "react-router-dom";
import { saveShipping } from "../../store/action/CartActions";
import { SecondaryBtn } from "../../styles/StyledUIElements/Button";

const Shipping = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(saveShipping(address, city, postalCode, country));
  };

  return (
    <>
      <div id="container">
        <h2 style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet.</h2>
        <div id="wrapper">
          {/* {loading && <div>{loading}</div>}
          {error && <div>{error}</div>} */}
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
                  type="email"
                  placeholder="Address"
                  required
                  value={email}
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
                  value={email}
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
                  value={email}
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
                  value={email}
                  onChange={e => setCountry(e.target.value)}
                />
                <span className="bar"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
