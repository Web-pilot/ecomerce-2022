import "./AppBar.css";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdPerson,
} from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../../axiosRequestMethod";
import { searchProduct } from "../../redux/productReducer";

const AppBar = () => {
  // const [ user] = useReducer(INITIAL_STATE.user);
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((state) => state.user.user);
  const badge = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searchProduct({ searchTerm: search.toString() }));
  }, [search, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProduct({ searchTerm: search.toString() }));
  };
  const logOut = async () => {
    try {
      const res = await axiosRequest.get("auth/logout");
      console.log(res);
      dispatch(logOut());
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header className="navbar">
      <nav className="container nav">
        <div className="logo">
          <Link to="/" className="hide">
            RealMarkt
          </Link>
          <Link to="/">Real</Link>
        </div>
        <div className="nav_left">
          <div className="search_form">
            <form onSubmit={handleSubmit}>
              <AiOutlineSearch className="search_icon" />
              <input
                type="search"
                name=""
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="search products, offer collection"
              />
              <button className="btn">Search</button>
            </form>
          </div>
          <div className="account_cart">
            <div className="user" onClick={() => setDropDown(!dropDown)}>
              <span>
                <AiOutlineUser />{" "}
                <span className="">{user ? user.family_name : "Account"}</span>
                <MdOutlineArrowDropDown />
              </span>
              {dropDown && (
                <div className="dropdown">
                  <MdOutlineArrowDropUp className="toparrow" />
                  {!user && (
                    <Link to="/account/sign-in" className="btn">
                      SIGN IN
                    </Link>
                  )}
                  <hr style={{ marginTop: "1rem" }} />
                  <ul>
                    <li>
                      <Link to="/customer/account/">
                        <MdPerson /> My Account{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer/orders/index">
                        <VscPackage /> Orders{" "}
                      </Link>
                    </li>
                    {user && (
                      <li>
                        <Link to="/customer/orders/index">
                          <VscPackage /> Inbox{" "}
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/customer/wishlists/index">
                        <AiOutlineHeart /> Saved Items{" "}
                      </Link>
                    </li>
                    {user && (
                      <li className="logout" onClick={logOut}>
                        LOGOUT
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="cart">
              <Link to="/cart">
                <span className="cart_icon_cont">
                  <BsCartPlus /> <span className="hide">Cart</span>
                  <span className="cart_badge">
                    {badge.quantity > 0 && badge.quantity}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
