import "./ProductComments.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductComments = () => {
  return (
    <section className="container product_comments">
      <div className="top_heading">
        <h4 className="account_section_title">Customers Feedback</h4>
        <Link to="all-comments" className="link">SEE ALL</Link>
      </div>
      <div className="comments_container">
        <div className="rating">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <p>Good and quality product</p>
        <span className="variation">27-09-2022by Adeoti</span>
      </div>
      <div className="comments_container">
        <div className="rating">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <p>Good and quality product</p>
        <span className="variation">27-09-2022by Adeoti</span>
      </div>
      <div className="comments_container">
        <div className="rating">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <p>Good and quality product</p>
        <span className="variation">27-09-2022by Adeoti</span>
      </div>
    </section>
  );
};

export default ProductComments;
