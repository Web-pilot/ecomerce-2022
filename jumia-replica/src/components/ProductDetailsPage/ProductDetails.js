import ProductComments from "../ProductComments/ProductComments";
import ProductInformation from "../ProductInformation/ProductInformation";
import Details from "./Details/Details";
import DetailsSidebar from "./DetailsSidebar/DetailsSidebar";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="container ">
      <div className="product_details_container">
        <Details />
        <DetailsSidebar />
      </div>
      <ProductInformation />
      <ProductComments />
    </div>
  );
};

export default ProductDetails;
