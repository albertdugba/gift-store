import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CART_SAVE_SHIPPING,
} from "../../constants/cart";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === product.product ? item : x,
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, item] };

    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      };

    default:
      return state;
  }
};
