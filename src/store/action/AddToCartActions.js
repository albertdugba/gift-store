import axios from "axios";
import { ADD_ITEM_TO_CART } from "../../constants/cart";

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
