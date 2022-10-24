import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosRequest } from "../../axiosRequestMethod";
import AdsBar from "../AdsBar/AdsBar";
import AppBar from "../AppBar/AppBar";
import SubTopBar from "../SubTopBar/SubTopBar";
import "./CheckoutSuccess.css";

const CheckoutSuccess = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axiosRequest.post("stripe/webhook");
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOrder();
  }, []);
  return (
    <>
      <AdsBar />
      <SubTopBar />
      <AppBar />
      <div className="container success_checkout">
        <h3 className="user_checkout_success">
          <span className="success_color">{user.user.family_name}</span> your
          payment was <span className="success_color">successful</span> and your
          order was placed
        </h3>
        <p>
          <Link to="/customer/orders/index" className="success_color">
            View Order
          </Link>
          <Link to="/" className="btn">
            Continue Shopping
          </Link>
        </p>
        <h1>Thanks for your order!</h1>
        <p>
          We appreciate your business! If you have any questions, please email
          <a href="mailto:ochagwupaul1@gmail.com.com">ochagwupaul1@gmail</a>.
        </p>
      </div>
    </>
  );
};

export default CheckoutSuccess;
