import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllProductsReducer } from "./reducer/ProductReducer";
import { getProductDetails } from "../store/reducer/ProductDetail";
const rootReducer = combineReducers({
  allProducts: getAllProductsReducer,
  productDetails: getProductDetails,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
