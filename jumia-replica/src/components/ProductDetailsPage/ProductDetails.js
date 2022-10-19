import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AdsBar from "../AdsBar/AdsBar";
import AppBar from "../AppBar/AppBar";
import ProductComments from "../ProductComments/ProductComments";
import ProductInformation from "../ProductInformation/ProductInformation";
import SubTopBar from "../SubTopBar/SubTopBar";
import Details from "./Details/Details";
import DetailsSidebar from "./DetailsSidebar/DetailsSidebar";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const products = useSelector((state) => state.products);
  const [product, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products.products.filter((item) => item._id === id));
  }, [id, products]);

  return (
    <>
      <AdsBar />
      <SubTopBar />
      <AppBar />
      <div className="container ">
        <div className="product_details_container">
          <Details product={product[0]} />
          <DetailsSidebar />
        </div>
        <ProductInformation product={product[0]} />
        <ProductComments />
      </div>
    </>
  );
};

export default ProductDetails;
