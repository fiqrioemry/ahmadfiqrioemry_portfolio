import {
  GET_PRODUCTS_PROCESS,
  GET_PRODUCTS_SUCCESS,
} from "../type/productsType";

const initialState = {
  products: [],
  total: 0,
  loading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PROCESS:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS: {
      const products = action.payload.products;
      const total = action.payload.total;
      return {
        ...state,
        products: products,
        total: total,
        loading: false,
      };
    }

    default:
      return state;
  }
};
