import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Shared.css";

const Login = props => {
  return (
    <>
      <div id="container">
        <div id="wrapper">
          <div className="form-container">
            <span className="form-heading">Your Account</span>
            <form>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <button>
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </div>

              <div className="switch-login">
                <a href="!#">
                  Already have an account? <span>Login</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
