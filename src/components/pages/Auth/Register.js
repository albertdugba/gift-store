import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SecondaryBtn } from "../../../styles/StyledUIElements/Button";
import { register } from "../../../store/action/UserActions";

const Register = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registeration = useSelector(state => state.register);

  const { userInfo, loading, error } = registeration;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <div id="container">
        {loading && <div>{loading}</div>}
        {error && <div>{error}</div>}
        <div id="wrapper">
          <div className="form-container">
            <span className="form-heading">Create A New Account</span>
            <form onSubmit={onSubmitHandler}>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="name"
                  placeholder="Username"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <span className="bar"></span>
              </div>
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
                <SecondaryBtn>Register</SecondaryBtn>
              </div>

              <div className="switch-login">
                <span>
                  Already have an account?{" "}
                  <Link
                    to={
                      redirect === "/" ? "/login" : "login?redirect=" + redirect
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

export default Register;
