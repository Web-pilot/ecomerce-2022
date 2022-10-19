import "./MediumCard.css";

const MediumCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt="" />
      <span className="product_title">{product.title}</span>
      <br />
      <span className="product_price">N {product.price}</span>
      <br />
      <del className="product_initial_price">N 8,000</del>
    </div>
  );
};

export default MediumCard;
