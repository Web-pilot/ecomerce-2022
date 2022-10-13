import "./MediumCard.css";

const MediumCard = () => {
  return (
    <div className="card">
        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636" alt="" />
        <span className="product_title">2 in 1 Men's short sleeve</span>
        <br />
        <span className="product_price">N 5,200</span>
        <br />
        <del className="product_initial_price">N 8,000</del>
    </div>
  )
}

export default MediumCard