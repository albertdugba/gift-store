import { ADD_ITEM_TO_CART } from "../../constants/cart";

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

    default:
      return state;
  }
};
