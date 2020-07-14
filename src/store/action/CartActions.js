import axios from "axios";

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CART_SAVE_SHIPPING,
  CART_PAYMENT,
} from "../../constants/cart";

export const addToCart = (productId, qty) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/v1/products/${productId}`);
    console.log(data);
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product: data.data._id,
        name: data.data.name,
        slug: data.data.slug,
        imageUrl: data.data.imageUrl,
        numberInStock: data.data.numberInStock,
        price: data.data.price,
        qty,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveShipping = data => dispatch => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

export const payment = data => dispatch => {
  dispatch({ type: CART_PAYMENT, payload: data });
};

export const removeCart = productId => dispatch => {
  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });
};
