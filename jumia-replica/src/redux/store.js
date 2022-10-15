import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
  },
});

export default store;
