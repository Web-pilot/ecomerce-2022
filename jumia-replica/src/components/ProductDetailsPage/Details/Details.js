import "./Details.css";

import {
  AiFillStar,
  AiFillTwitterCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsCartX, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

import React from "react";

const Details = () => {
  return (
    <div className="details">
      <div className="product_image_section">
        <div className="img_gallery">
          <img
            src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/429948/1.jpg?9871"
            alt=""
          />
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
            <h3>EILIFINTE B06 Casual Crossbody Bag-Grey</h3>
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
          <h3>₦ 875</h3>
          <span className="variation">In stock</span>
          <div className="btn_block">
            <span className="add_to_cart_btn_icon">
              <BsCartX />
            </span>{" "}
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
