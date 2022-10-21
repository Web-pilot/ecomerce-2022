import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import DashboardProductEdit from "./components/DashboardProductEdit/DashboardProductEdit";
import DashboardProductFullDetails from "./components/DashboardProductFullDetails/DashboardProductFullDetails";
import { axiosRequest } from "./axiosRequestMethod";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} from "./redux/userReducer";
import {
  fetchCategoryFailure,
  fetchCategoryStart,
  fetchCategorySuccess,
} from "./redux/categoryReducer";
import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
} from "./redux/productReducer";
import {
  fetchCartProductStart,
  fetchCartProductSuccess,
  fetchCartProductFailure,
} from "./redux/cartReducer";

function App() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const fetchLoginUser = async () => {
    dispatch(fetchUserStart());
    try {
      const res = await axiosRequest.get("auth/login/success");
      dispatch(fetchUserSuccess(res.data));
    } catch (error) {
      dispatch(fetchUserFailure());
    }
  };

  useEffect(() => {
    fetchLoginUser();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        dispatch(fetchCategoryStart());
        const res = await axiosRequest.get("/api/v1/categories");
        dispatch(fetchCategorySuccess(res.data));
      } catch (error) {
        dispatch(fetchCategoryFailure());
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchProductStart());
        const res = await axiosRequest.get("api/v1/products");
        dispatch(fetchProductSucess(res.data));
      } catch (error) {
        dispatch(fetchProductFailure());
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchCartProductStart());
        const res = await axiosRequest.get("api/v1/carts/user");
        dispatch(fetchCartProductSuccess(res.data));
      } catch (error) {
        dispatch(fetchCartProductFailure());
      }
    };
    fetchProduct();
  }, []);

  return (
    <BrowserRouter>
      <Category categoryOpen={categoryOpen} />
      <BottomNavbar
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <Routes>
        <Route
          path="/seller/dashboard"
          element={
            user.user ? <Dashboard /> : <Navigate to="/account/sign-in" />
          }
        />
        <Route
          path="/account/sign-in"
          element={user.user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/" element={<Home categoryOpen={categoryOpen} />} />
        <Route
          path="/cart"
          element={user.user ? <Cart /> : <Navigate to="/account/sign-in" />}
        />
        <Route path="/:title/:id" element={<ProductDetails />} />
        <Route
          path="/customer/account"
          element={user.user ? <Account /> : <Navigate to="/account/sign-in" />}
        />
        <Route
          path="/customer/account/inbox"
          element={user.user ? <Inbox /> : <Navigate to="/account/sign-in" />}
        />
        <Route
          path="/customer/orders/index"
          element={user.user ? <Order /> : <Navigate to="/account/sign-in" />}
        />
        <Route path="/customer/wishlists/index" element={<SavedItems />} />
        <Route path="/history" element={<RecentlyViewItems />} />
        <Route
          path="/dashboard/products/add"
          element={
            user.user ? <AddProduct /> : <Navigate to="/account/sign-in" />
          }
        />
        <Route
          path="/dashboard/products/edit/:id"
          element={
            user.user ? (
              <DashboardProductEdit />
            ) : (
              <Navigate to="/account/sign-in" />
            )
          }
        />
        <Route
          path="/dashboard/products/info"
          element={
            user.user ? (
              <DashboardProductFullDetails />
            ) : (
              <Navigate to="/account/sign-in" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
