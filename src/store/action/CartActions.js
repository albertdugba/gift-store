import axios from "axios";
import Cookie from "js-cookie";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../../constants/cart";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
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

    const { cart } = getState();
    const { cartItems } = cart;
    Cookie.set("cartItems", JSON.stringify(cartItems));

    console.log(cartItems);
  } catch (error) {
    console.log(error);
  }
};

export const removeCart = productId => async (dispatch, getState) => {
  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });

  const { cart } = getState();
  const { cartItems } = cart;
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
