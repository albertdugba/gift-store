import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "./Shared.css";
import { SecondaryBtn } from "../../../styles/StyledUIElements/Button";
import { Link } from "react-router-dom";
import { login } from "../../../store/action/UserActions";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginInfo = useSelector(state => state.login);
  const { userInfo, loading, error } = loginInfo;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, redirect, props.history]);

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div id="container">
        <div id="wrapper">
          {loading && <div>{loading}</div>}
          {error && <div>{error}</div>}
          <div className="form-container">
            <motion.span
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="form-heading"
            >
              Login Your Account
            </motion.span>
            <form onSubmit={onSubmitHandler}>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <SecondaryBtn>Login</SecondaryBtn>
              </div>

              <div className="switch-login">
                <span>
                  Haven't created an account yet?{" "}
                  <Link
                    to={
                      redirect === "/"
                        ? "/register"
                        : "register?redirect=" + redirect
                    }
                  >
                    Sign up now!
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
