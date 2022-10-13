import "./NoCart.css";
import {Link} from 'react-router-dom';

import {BsCartPlus} from "react-icons/bs";

const NoCart = () => {
  return (
    <div className="container no_cart_container">
        <div>
            <BsCartPlus className="cart_icon"/>
            <h6>You cart is empty</h6>
        </div>
        <p>Browse our categories and discover our best deals!</p>
        <Link to="/" className="button">START SHOPPING</Link>
    </div>
  )
}

export default NoCart