import { Link } from "react-router-dom";
import "./InboxMessageCard.css";

const Card = () => {
  return (
    <div className="inbox_messages_container">
      <div className="message_heading">
        <span className="date">5th August, 2022</span>
        <Link to="" className="heading_link">Details</Link>
      </div>
      <h5>How was your Experience? ⭐⭐⭐⭐⭐</h5>
      <p>
        Package# JE-B06-1962961342-6316 has been successfully delivered. If you
        have any questions or comments on your product, use the Helpcentre to
        find a solution. Thank you for shopping on Jumia!
      </p>
      <div className="img_container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h5>Pen Flash Drive 3.0 64GB - Metal OTG Micro USB Type-C</h5>
      </div>
    </div>
  );
};

export default Card;