import "./AddressBook.css";

const AddressBook = () => {
  return (
    <div className="grid_items address_book">
      <h5 className="heading">SHIPPING ADDRESS </h5>
      <div className="body">
        <h5>Your default shipping address</h5>
        <p>
          <span>Ochagwu Paul</span>
          <br />
          <span>11, OLALUBI, STREET, MAFOLUKU-OSHODI</span>
          <br />
          <span>OSHODI-MAFOLUKU, LAGOS</span>
          <br />
          <span>+234 9068155992 / + 234 8158099730</span>
        </p>
      </div>
    </div>
  );
};

export default AddressBook;
