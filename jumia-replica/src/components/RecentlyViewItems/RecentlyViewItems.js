import { useState } from "react";
import { Link } from "react-router-dom";
import NoItem from "../NoItem/NoItem";
import MediumCard from "../ProductMediumCard/MediumCard";
import "./RecentlyViewItems.css";

const RecentlyViewItems = () => {
  const [history, setHistory] = useState([{ id: 1 }]);
  return (
    <div className="container recent_view_items">
      <h4 className="account_section_title">Recently Viewed Products</h4>
      {history.length ? (
        <div className="recent_grid_container">
          <Link to="">
            <MediumCard />
          </Link>
          <Link to="">
            <MediumCard />
          </Link>
          <Link to="">
            <MediumCard />
          </Link>
          <Link to="">
            <MediumCard />
          </Link>
        </div>
      ) : (
        <NoItem heading="No history" body="check an item to see history" />
      )}
    </div>
  );
};

export default RecentlyViewItems;
