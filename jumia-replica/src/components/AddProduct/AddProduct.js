import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./AddProduct.css";
import "../../Dashboard.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, price, desc);
  };

  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="add_product_container">
          <form className="add_product_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="title">Item Name</label>
              <input
                type="text"
                className="form_control"
                id="title"
                placeholder="lunch pack"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form_control"
                id="price"
                placeholder="lunch pack"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="category">Categories</label>
              <fieldset>
                <legend>Add to Categories</legend>
                <input type="checkbox" name="categories" value="Cats" />
                Cats
                <br />
                <input type="checkbox" name="categories" value="Dogs" />
                Dogs
                <br />
                <input type="checkbox" name="categories" value="Birds" />
                Birds
                <br />
                <br />
              </fieldset>
            </div>
            <div className="form_group">
              <label htmlFor="desc">Product Description</label>
              <textarea
                name=""
                id="desc"
                cols="30"
                rows="10"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="form_group">
              <input type="submit" value="Sell Item" className="btn" />
            </div>
            <div className="product_img">
              <div>
                {file ? (
                  <img src={URL.createObjectURL(file)} alt="" />
                ) : (
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                )}
                <h1 className="account_section_title ">Display Image</h1>
              </div>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="file" className="btn">
                Choose
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
