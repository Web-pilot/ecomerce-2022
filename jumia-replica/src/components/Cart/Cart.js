import "./Cart.css";
import { useState } from "react";
import NoCart from "./NoCart/NoCart";
import { FiTrash } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import AppBar from "../AppBar/AppBar";
import { useSelector } from "react-redux";

const Cart = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <>
      <AppBar />
      <section className="container ">
        {!carts.products.length ? (
          <NoCart />
        ) : (
          <div className="cart_split">
            <div className="main_cart">
              <h4 className="account_section_title">
                Cart ({carts.products.length})
              </h4>

              {carts.products.map((item) => (
                <div className="cart_item_container">
                  <div className="left_cart">
                    <div className="img_remove_btn">
                      <img src={item.img} alt="" />
                      <span className="remove_btn">
                        <FiTrash /> REMOVE
                      </span>
                    </div>
                    <div className="info">
                      <h3>{item.title}</h3>
                      <span>Seller: YMKJ</span>
                      <br />
                      <span>In Stock</span>
                    </div>
                  </div>
                  <div className="right_cart">
                    <h3>₦ {item.price}</h3>
                    <div className="action_btn">
                      <span className="btn">
                        <BiMinus />
                      </span>
                      <span>{item.quantity}</span>
                      <span className="btn">
                        <GoPlus />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="check_out_card">
              <h4 className="account_section_title">Cart Summary</h4>
              <div className="total_container">
                <span className="account_section_title">Subtotal </span>
                <h2> ₦ {carts.total}</h2>
              </div>
              <div className="check_out">
                <a href="@" className="btn">
                  Check Out ₦({carts.total})
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
