import { Link } from "react-router-dom";
import "./SubTopBar.css";

const SubTopBar = () => {
  return (
    <div className="container sub_bar">
      <div className="sell_btn_link">
        <Link to="/seller/dashboard">Sell on RealMarkt</Link>
      </div>
    </div>
  );
};

export default SubTopBar;
