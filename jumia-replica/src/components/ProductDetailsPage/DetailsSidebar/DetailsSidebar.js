import "./DetailsSidebar.css";

const DetailsSidebar = () => {
  return (
    <div className="details_slide">
      <h4 className="account_section_title">DELIVERY DETAILS</h4>
      <div>
        <h5>NAME</h5>
        <input type="text" value="paul" readOnly />
      </div>
      <div>
        <h5>CONTACT</h5>
        <input type="text" value="0815809973" readOnly />
      </div>
      <div>
        <h5>LOCATION</h5>
        <input type="text" value="Oshodi" readOnly />
      </div>
    </div>
  );
};

export default DetailsSidebar;
