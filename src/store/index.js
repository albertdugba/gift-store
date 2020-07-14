import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import { getAllProductsReducer } from "./reducer/ProductReducer";
import { getProductDetails } from "../store/reducer/ProductDetail";
import { cartReducer } from "./reducer/CartReducer";
import { loginReducer, registerationReducer } from "./reducer/UserReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userlogin: { userInfo },
};

const rootReducer = combineReducers({
  allProducts: getAllProductsReducer,
  productDetails: getProductDetails,
  cart: cartReducer,
  login: loginReducer,
  register: registerationReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);
