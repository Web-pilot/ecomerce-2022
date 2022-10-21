import "./Cart.css";
import NoCart from "./NoCart/NoCart";
import { FiTrash } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import AppBar from "../AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import {
  decreementQuantity,
  deleteCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  increementQuantity,
} from "../../redux/cartReducer";
import { axiosRequest } from "../../axiosRequestMethod";

const Cart = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleQuanity = async ({ type, id }) => {
    if (type === "increement") {
      const res = await axiosRequest.put(`api/v1/carts/increement/${id}`);
      dispatch(increementQuantity({ id: res.data._id }));
    } else {
      const res = await axiosRequest.put(`api/v1/carts/decreement/${id}`);
      dispatch(decreementQuantity({ id: res.data._id }));
    }
  };

  const handleDeleteCart = async (id) => {
    try {
      dispatch(deleteCartStart());
      const res = await axiosRequest.delete(`api/v1/carts/delete/${id}`);
      dispatch(deleteCartSuccess({ id: res.data._id }));
    } catch (error) {
      dispatch(deleteCartFailure());
    }
  };

  return (
    <>
      <AppBar />
      <section className="container ">
        {!carts.products.length ? (
          <NoCart />
        ) : (
          <div className="cart_split">
            <div className="main_cart">
              <h4 className="account_section_title">Cart ({carts.quantity})</h4>
              {carts.products.map((item) => (
                <div className="cart_item_container" key={item._id}>
                  <div className="left_cart">
                    <div className="img_remove_btn">
                      <img src={item.img} alt="" />
                      <span
                        className="remove_btn"
                        onClick={() => handleDeleteCart(item._id)}
                      >
                        <FiTrash /> REMOVE
                      </span>
                    </div>
                    <div className="info">
                      <h3>{item.title}</h3>
                      <span>Seller: {item.seller}</span>
                      <br />
                      <span>In Stock</span>
                    </div>
                  </div>
                  <div className="right_cart">
                    <h3>₦ {item.price}</h3>
                    <div className="action_btn">
                      <span
                        className="btn"
                        onClick={() =>
                          handleQuanity({ type: "decreement", id: item._id })
                        }
                      >
                        <BiMinus />
                      </span>
                      <span>{item.quantity}</span>
                      <span
                        className="btn"
                        onClick={() =>
                          handleQuanity({ type: "increement", id: item._id })
                        }
                      >
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
