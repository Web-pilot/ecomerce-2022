import "./Dashboard.css";
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
import { BsPen, BsFillLightbulbFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="sidebar">
        <h4 className="">REALMRKT DASHBOARD</h4>
        <ul className="">
          <li className="dash_title">OFTEN USE</li>
          <li>
            <a href="@">
              <GiHealthIncrease /> Health & Beauty
            </a>
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
      <div className="dashboard_content">
        <header className="dash_navbar">
          <div className="logo">HOME</div>
          <div className="profile">
            <img src="" alt="logo" />
          </div>
        </header>
        <div className="">
          <table>
            <thead>
              <tr>
                <th>*</th>
                <th>Img</th>
                <th>Sold</th>
                <th>Display</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>*</td>
                <td>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </td>
                <td>Sold</td>
                <td>
                  <span>
                    <BsFillLightbulbFill />
                  </span>
                </td>
                <td>Travel laptop backpack with usb port grey</td>
                <td>
                  <span>
                    <BsPen />
                  </span>
                  <span>
                    <FiTrash2 />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
