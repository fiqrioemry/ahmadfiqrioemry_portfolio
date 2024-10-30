import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/reducer/productsReducer";
import { interfaceReducer } from "./features/reducer/interfaceReducer";

const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    products: productsReducer,
  },
});

export default store;
