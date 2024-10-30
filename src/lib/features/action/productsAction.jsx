import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_PROCESS,
} from "../type/productsType";

export const getProducts = async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_PROCESS });

  const response = await fetch("www.dummyjson.com/products");

  const { data } = await response.json();

  dispatch({ type: GET_PRODUCTS_SUCCESS });
};
