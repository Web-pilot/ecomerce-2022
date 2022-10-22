import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdsBar from "../components/AdsBar/AdsBar";
import AppBar from "../components/AppBar/AppBar";
import SubTopBar from "../components/SubTopBar/SubTopBar";
import "./CheckoutSuccess.css";

const CheckoutSuccess = () => {
  const user = useSelector((state) => state.user);
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
      </div>
    </>
  );
};

export default CheckoutSuccess;
