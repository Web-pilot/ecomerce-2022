import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Category from "./components/SmallWidthCategory/Category";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetailsPage/ProductDetails";
import SignIn from "./components/Account/Login/SignIn";
import Account from "./components/Account/Account";
import Inbox from "./components/Inbox/Inbox";
import Order from "./components/Order/Order";
import SavedItems from "./components/SavedItems/SavedItems";
import RecentlyViewItems from "./components/RecentlyViewItems/RecentlyViewItems";
import { action } from "./utils/actionTypes";
import Dashboard from "./Dashboard";
import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import DashboardProductEdit from "./components/DashboardProductEdit/DashboardProductEdit";
import DashboardProductFullDetails from "./components/DashboardProductFullDetails/DashboardProductFullDetails";

function App() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  // const [dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const fetchLoginUser = () => {
  //   fetch("http://localhost:5000/auth/login/success", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Credential": true,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.user);
  //       dispatch({ type: action.LOGIN_SUCCESS, payload: data.user });
  //     })
  //     .catch((err) => console.log(err));
  //   dispatch({ type: action.LOGIN_FAILURE });
  // };

  // useEffect(() => {
  //   fetchLoginUser();
  // }, []);

  return (
    <BrowserRouter>
      <Category categoryOpen={categoryOpen} />
      <BottomNavbar
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <Routes>
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/account/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home categoryOpen={categoryOpen} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-name/:id" element={<ProductDetails />} />
        <Route path="/customer/account" element={<Account />} />
        <Route path="/customer/account/inbox" element={<Inbox />} />
        <Route path="/customer/orders/index" element={<Order />} />
        <Route path="/customer/wishlists/index" element={<SavedItems />} />
        <Route path="/history" element={<RecentlyViewItems />} />
        <Route path="/dashboard/products/add" element={<AddProduct />} />
        <Route
          path="/dashboard/products/edit"
          element={<DashboardProductEdit />}
        />
        <Route
          path="/dashboard/products/info"
          element={<DashboardProductFullDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
