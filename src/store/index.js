import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllProductsReducer } from "./reducer/ProductReducer";
import { getProductDetails } from "../store/reducer/ProductDetail";
import { cartReducer } from "./reducer/CartReducer";

const rootReducer = combineReducers({
  allProducts: getAllProductsReducer,
  productDetails: getProductDetails,
  cart: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
