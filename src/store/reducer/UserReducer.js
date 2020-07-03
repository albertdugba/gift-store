import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
} from "../../constants/users";

const intialState = {};

// loginInfo: {},
//   registerationInfo: {},
//   loading: false,
//   error: null,

export const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const registerationReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return { ...state, loading: true };

    case USER_REGISTRATION_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };

    case USER_REGISTRATION_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
