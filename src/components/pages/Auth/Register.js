import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthButton } from "../../../styles/StyledUIElements/Button";
import { login, register } from "../../../store/action/UserActions";
import {
  FormContainer,
  Form,
  FormInput,
} from "../../../styles/StyledUIElements/Form";

const Register = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registeration = useSelector(state => state.register);

  const { userInfo } = registeration;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [userInfo]);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <h2>Your Account</h2>
          <label htmlFor="name">Name</label>
          <FormInput
            type="name"
            placeholder="Name..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <FormInput
            type="email"
            placeholder="Email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <FormInput
            value={password}
            type="password"
            placeholder="Password..."
            onChange={e => setPassword(e.target.value)}
          />
          <AuthButton>Register</AuthButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default Register;
