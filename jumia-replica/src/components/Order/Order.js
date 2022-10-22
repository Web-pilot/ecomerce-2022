import { Link } from "react-router-dom";
import AccountSidebar from "../AccountSideBar/AccountSidebar";
import AdsBar from "../AdsBar/AdsBar";
import AppBar from "../AppBar/AppBar";
import SubTopBar from "../SubTopBar/SubTopBar";
import OrderCard from "../SuccessOrdersCard/SuccessOrders";
import "./Order.css";

const Order = () => {
  return (
    <>
      <AdsBar />
      <SubTopBar />
      <AppBar />
      <section className="container account_container">
        <AccountSidebar />
        <div className="main_content inbox">
          <h4>Orders</h4>
          <div className="sub_nav_bar">
            <ul>
              <li>
                <Link to="" className="active">
                  SUCCESS ORDERS(3)
                </Link>
              </li>
              <li>
                <Link href="">CANCELLED ORDERS(4) </Link>
              </li>
            </ul>
          </div>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </section>
    </>
  );
};

export default Order;
