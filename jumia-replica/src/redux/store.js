import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
    user: userReducer,
  },
});

export default store;
