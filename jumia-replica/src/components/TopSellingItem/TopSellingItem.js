import { Link } from "react-router-dom";
import MediumCard from "../ProductMediumCard/MediumCard";
import "./TopSellingItem.css";

const TopSellingItem = () => {
  return (
    <div className="container container_section">
      <h3 className="container_title">Top selling Item</h3>
      <div className="top_selling_item">
        <Link to="/product-name/1">
          <MediumCard />
        </Link>
      </div>
    </div>
  );
};

export default TopSellingItem;
