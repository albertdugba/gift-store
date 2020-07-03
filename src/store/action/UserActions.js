import axios from "axios";
import Cookie from "js-cookie";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_SUCCESS,
} from "../../constants/users";

export const login = (email, password) => async dispatch => {
  const loginInfo = { email, password };
  dispatch({ type: USER_LOGIN_REQUEST, loginInfo });
  try {
    const { data } = await axios.post(`/api/v1/auth/login`, loginInfo);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
    console.error(error);
  }
};

export const register = (name, email, password) => async dispatch => {
  const registrationInfo = { name, email, password };
  dispatch({ type: USER_REGISTRATION_REQUEST, registrationInfo });
  try {
    const { data } = await axios.post(
      `/api/v1/auth/register`,
      registrationInfo,
    );
    dispatch({ type: USER_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTRATION_FAIL });
    console.error(error);
  }
};
