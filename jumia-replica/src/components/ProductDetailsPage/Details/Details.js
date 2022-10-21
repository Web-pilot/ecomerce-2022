import "./Details.css";

import {
  AiFillStar,
  AiFillTwitterCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsCartX, BsFacebook } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartFailure,
  addProductToCartStart,
  addProductToCartSuccess,
  increementQuantity,
} from "../../../redux/cartReducer";
import { axiosRequest } from "../../../axiosRequestMethod";

const Details = ({ product }) => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  const handleAddToCart = async (id) => {
    try {
      dispatch(addProductToCartStart());
      const res = await axiosRequest.post("api/v1/carts/add/" + productId);
      dispatch(
        addProductToCartSuccess({
          item: res.data,
          price: res.data.price,
        })
      );
      // const inCart = carts.products.find((item) => item.productId === id);
      // console.log(inCart.productId, id);
      // if (inCart.productId) {
      //   const res = await axiosRequest.put(`api/v1/carts/increement/${id}`);
      //   dispatch(increementQuantity({ id: res.data._id }));
      // } else {

      // }
    } catch (error) {
      dispatch(addProductToCartFailure());
    }
  };

  return (
    <div className="details">
      <div className="product_image_section">
        <div className="img_gallery">
          <img src={product?.img} alt="" />
        </div>
        <div className="share_buttons_container">
          <span>
            <BsFacebook />
          </span>
          <span>
            <AiFillTwitterCircle />
          </span>
        </div>
      </div>
      <div className="product_details">
        <div className="top">
          <div className="top_heading">
            <h3>{product?.title}</h3>
            <i>
              <AiOutlineHeart />
            </i>
          </div>
          <span>Brand:</span> <Link to="">Cloth</Link>
          <div className="rating">
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
          </div>
        </div>
        <div className="bottom">
          <h3>₦ {product?.price}</h3>
          <span className="variation">In stock</span>
          {carts.products.find((item) => item._productId === productId) ? (
            <div
              className="btn_block"
              style={{ opacity: "0.5", cursor: "not-allowed" }}
            >
              <span className="add_to_cart_btn_icon">
                <BsCartX />
              </span>{" "}
              <span>Item added to cart</span>
            </div>
          ) : (
            <div
              className="btn_block"
              onClick={() => handleAddToCart(product._id)}
            >
              <span className="add_to_cart_btn_icon">
                <BsCartX />
              </span>{" "}
              <span>Add To Cart</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
