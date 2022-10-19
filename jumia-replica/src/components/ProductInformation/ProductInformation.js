import "./ProductInformation.css";

const ProductInformation = ({ product }) => {
  return (
    <div className="container product_information">
      <h4 className="account_section_title">Product Full Information</h4>
      <p>{product?.desc}</p>
    </div>
  );
};

export default ProductInformation;
