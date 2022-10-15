import "./Cart.css";
import { useState } from "react";
import NoCart from "./NoCart/NoCart";
import { FiTrash } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

const Cart = () => {
  const [cart, setCart] = useState([{ id: 1 }]);

  return (
    <>
      <section className="container ">
        {!cart.length ? (
          <NoCart />
        ) : (
          <div className="cart_split">
            <div className="main_cart">
              <h4 className="account_section_title">Cart (4)</h4>
              <div className="cart_item_container">
                <div className="left_cart">
                  <div className="img_remove_btn">
                    <img
                      src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/61/594497/1.jpg?9457"
                      alt=""
                    />
                    <span>REMOVE</span>
                  </div>
                  <div className="info">
                    <h3>
                      128GB 2 in 1 OTG USB 2.0 Flash Drive For PC & Android
                    </h3>
                    <span>Seller: YMKJ</span>
                    <br />
                    <span>In Stock</span>
                  </div>
                </div>
                <div className="right_cart">right</div>
              </div>
              <div className="cart_item_container">
                <div className="left_cart">
                  <div className="img_remove_btn">
                    <img
                      src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/61/594497/1.jpg?9457"
                      alt=""
                    />
                    <span className="remove_btn">
                      <FiTrash /> REMOVE
                    </span>
                  </div>
                  <div className="info">
                    <h3>
                      128GB 2 in 1 OTG USB 2.0 Flash Drive For PC & Android
                    </h3>
                    <span>Seller: YMKJ</span>
                    <br />
                    <span>In Stock</span>
                  </div>
                </div>
                <div className="right_cart">
                  <h3>₦ 760</h3>
                  <div className="action_btn">
                    <span className="btn">
                      <BiMinus />
                    </span>
                    <span>2</span>
                    <span className="btn">
                      <GoPlus />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="check_out_card">
              <h4 className="account_section_title">Cart Summary</h4>
              <div className="total_container">
                <span className="account_section_title">Subtotal </span>
                <h2> ₦ 11,313</h2>
              </div>
              <div className="check_out">
                <a href="@" className="btn">
                  CheckOut (₦ 11,313)
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
