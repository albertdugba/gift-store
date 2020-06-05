import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../../constants/product";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getAllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCT_LIST_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
