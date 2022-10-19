import "../../Dashboard.css";
import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { axiosRequest } from "../../axiosRequestMethod";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
} from "../../redux/productReducer";
import { useLocation } from "react-router-dom";
const EditProductForm = () => {
  const products = useSelector((state) => state.products.products);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const [upload, setUpload] = useState(null);
  const category = useSelector((state) => state.category);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[4];
  const [SingleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const product = products.filter((item) => item._id === id);
    if (product[0]) {
      setTitle(product[0].title);
      setDesc(product[0].desc);
      setPrice(product[0].price);
      setSingleProduct(product);
    }
    if (category) {
      setCategories(category.categories);
    }
  }, [id, products, category, categories]);

  // Send data to server
  const handleSubmit = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoading(true);
        console.log("Upload is " + progress + "% done");
        setUpload(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let catArray = [];
          categories.map((item) => catArray.push(item.id));
          setLoading(false);
          dispatch(fetchProductStart());
          axiosRequest
            .post(`api/v1/products/edit/${id}`, {
              title: title,
              img: downloadURL,
              price,
              categories: catArray,
              desc: desc,
            })
            .then((res) => {
              dispatch(fetchProductSucess(res.data));
              setTitle("");
              setPrice("");
              setDesc("");
              setCategories("");
              setFile("");
              window.location.replace("/seller/dashboard");
            })
            .catch((err) => dispatch(fetchProductFailure()));
        });
      }
    );
  };

  // populate array on checked box
  const toggleHandler = (item) => {
    if (item.target.checked) {
      setCategories([
        ...categories,
        {
          id: item.target.id,
          text: item.target.value,
          isChecked: true,
        },
      ]);
    } else {
      // remove from list
      const filteredCategories = categories.filter(
        (category) => category.id !== item.target.id
      );
      setCategories(filteredCategories);
    }
  };

  return (
    <form className="add_product_form" onSubmit={handleSubmit}>
      <div className="form_items">
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
          {categories?.map((category) => (
            <div
              key={category._id}
              style={{
                display: "flex",
                width: "150px",
                margin: "5px",
              }}
            >
              <input
                onChange={toggleHandler}
                value={category.text}
                type="checkbox"
                id={category._id}
              />
              {category.text}
              {category.loading && <h4>Loading...</h4>}
            </div>
          ))}
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
          <input type="submit" value="Update" className="btn" />
        </div>
      </div>
      <div className="product_img">
        <div>
          {file ? (
            <img src={URL.createObjectURL(file)} alt="" />
          ) : (
            <img src={SingleProduct[0]?.img} alt="" />
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
      {loading && <h5>{Math.round(upload)}% uploading</h5>}
      {category.loading && <h5>Pleas wait...</h5>}
    </form>
  );
};

export default EditProductForm;
