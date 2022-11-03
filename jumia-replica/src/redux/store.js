import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
// import thunk from "redux-thunk";

// configureStore.js

// import { persistStore, persistReducer } from "redux-persist";
// import sessionStorage from "redux-persist/es/storage/session";
import dashboardReducer from "./dashboardReducer";
import orderReducer from "./orderReducer";

// const persistConfig = {
//   key: "root",
//   storage: sessionStorage,
// };

const rootReducer = combineReducers({
  carts: cartReducer,
  products: productReducer,
  user: userReducer,
  category: categoryReducer,
  dashboard: dashboardReducer,
  orders: orderReducer,
});
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
});

// export const persistor = persistStore(store);
