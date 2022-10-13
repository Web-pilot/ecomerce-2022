import { Link } from "react-router-dom";
import "./SavedItemsCard.css";
import {GiTrashCan} from "react-icons/gi";

const SavedItemsCard = () => {
  return (
    <div className="saved_items">
      <img
        src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/64/797617/1.jpg?0780"
        alt=""
      />
      <div className="save_content_details">
        <div className="">
          <h4>Pen Flash Drive 3.0 64GB - Metal OTG Micro USB Type-C</h4>
          <span className="variation">Variation: </span>64G
          <br />
          <strong className="saved_items_price">
            <span>₦</span> 12,500
          </strong>
          <br />
          <span className="saved_items_discount">
            <del>₦ 34,906</del> <span className="off_discount">-30%</span>
          </span>
        </div>
        <div className="action_container">
          <Link to="/" className="btn">
            BUY NOW
          </Link>
          <span className="remove_btn"><GiTrashCan /> REMOVE</span>
        </div>
      </div>
    </div>
  );
};

export default SavedItemsCard;
