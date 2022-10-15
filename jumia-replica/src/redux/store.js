import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
    user: userReducer,
    category: categoryReducer,
  },
});

export default store;
