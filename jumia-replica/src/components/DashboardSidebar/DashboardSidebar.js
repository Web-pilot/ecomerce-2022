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
import { FaGamepad } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <h4 className="dashboard_logo">
        <Link to="/">REALMKRT</Link>
      </h4>
      <ul className="">
        <li className="dash_title">OFTEN USE</li>
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
