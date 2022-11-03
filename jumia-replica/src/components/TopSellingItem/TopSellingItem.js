import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MediumCard from "../ProductMediumCard/MediumCard";
import "./TopSellingItem.css";

const TopSellingItem = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="container container_section">
      <h3 className="container_title">Top selling Item</h3>
      {products.products ? (
        <div className="top_selling_item">
          {products.searchProducts.map((product) => (
            <Link to={`/${product.title}/${product._id}`} key={product._id}>
              <MediumCard product={product} />
            </Link>
          ))}
          {products.loading && <h6>Loading...</h6>}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100px",
          }}
        >
          <span>NO item to display</span>
        </div>
      )}
    </div>
  );
};

export default TopSellingItem;
