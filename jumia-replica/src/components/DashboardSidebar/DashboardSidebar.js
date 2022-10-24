import "../../Dashboard.css";
import {
  GiHealthIncrease,
  GiHomeGarage,
  GiBabyBottle,
  GiClothes,
} from "react-icons/gi";
import { FcTwoSmartphones } from "react-icons/fc";
import { AiFillCar } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { FaGamepad, FaTimes } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const DashboardSidebar = () => {
  const [small, setSmall] = useState(true);

  return (
    <div className={`sidebar ${small && "small"}`}>
      <h4 className="dashboard_logo">
        <Link to="/">RECORMERCE</Link>
        {small && (
          <BiMenu className="menu_icon" onClick={() => setSmall(false)} />
        )}
        {!small && (
          <FaTimes className="close_menu" onClick={() => setSmall(true)} />
        )}
      </h4>
      <ul className="">
        <li className="dash_title">MENU</li>
        <li>
          <Link to="/seller/dashboard">
            <GiHomeGarage /> Home
          </Link>
        </li>
        <li>
          <a href="@">
            <GiHomeGarage /> Home & Office
          </a>
        </li>
        <li>
          <a href="@">
            <FcTwoSmartphones /> Phones & Tablets
          </a>
        </li>
        <li>
          <a href="@">
            <AiFillCar /> Automobile
          </a>
        </li>
        <li>
          <a href="@">
            <RiComputerLine /> Computing
          </a>
        </li>
        <li>
          <a href="@">
            <FaGamepad /> Gaming
          </a>
        </li>
        <li>
          <a href="@">
            <GiBabyBottle /> Baby Product
          </a>
        </li>
        <li>
          <a href="@">
            <GiClothes /> Fashion
          </a>
        </li>
        <li>
          <a href="@">
            <MdOutlineSportsVolleyball /> Sporting Goods
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
