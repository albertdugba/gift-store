import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../../constants/users";

export const loginRequest = () => {
  return { type: USER_LOGIN_REQUEST };
};

export const loginSuccess = userData => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: userData,
  };
};
