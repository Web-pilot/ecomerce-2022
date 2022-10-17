import "./TableGrid.css";
import { BsPen, BsFillLightbulbFill, BsLightbulbOff } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  showDisplayItemStart,
  showDisplayItemSuccess,
  showDisplayItemFailure,
} from "../../redux/productReducer";
import { axiosRequest } from "../../axiosRequestMethod";

const TableGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchProductStart());
        const res = await axiosRequest.get("api/v1/products");
        dispatch(fetchProductSucess(res.data));
      } catch (error) {
        dispatch(fetchProductFailure());
      }
    };
    fetchProduct();
  }, []);

  const handleDelete = async (id) => {
    try {
      dispatch(deleteProductStart());
      const res = await axiosRequest.delete(`api/v1/products/delete/${id}`);
      dispatch(deleteProductSuccess({ id: res.data._id }));
    } catch (err) {
      console.log(err.messsage);
      dispatch(deleteProductFailure());
    }
  };

  const handleDisplayItem = async ({ id, type }) => {
    try {
      dispatch(showDisplayItemStart());
      const res = await axiosRequest.put(`api/v1/products/edit/${id}`, {
        inStock: type === "true" ? true : false,
      });
      dispatch(showDisplayItemSuccess({ id: id, item: res.data }));
    } catch (error) {
      dispatch(showDisplayItemFailure());
      console.log(error.message);
    }
  };

  return (
    <div className="responsive_table_container">
      <table>
        <thead>
          <tr>
            <th>*</th>
            <th>Img</th>
            <th>Sold</th>
            <th>Display</th>
            <th>Price</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.products.map((item) => (
            <tr key={item._id}>
              <td>*</td>
              <td>
                <Link to="/dashboard/products/info">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="dash_product_img"
                    height="50"
                    width="50"
                  />
                </Link>
              </td>
              <td>{item.totalItemSold}</td>
              <td>
                {item.inStock ? (
                  <span
                    onClick={() =>
                      handleDisplayItem({ id: item._id, type: "false" })
                    }
                  >
                    <BsFillLightbulbFill className="onBulb" />
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      handleDisplayItem({ id: item._id, type: "true" })
                    }
                  >
                    <BsLightbulbOff />
                  </span>
                )}
              </td>
              <td className="product_title">{item.price}</td>
              <td className="product_title">{item.title}</td>
              <td className="dasbhoard_action_btn_cont">
                <span>
                  <Link to={`/dashboard/products/edit/${item._id}`}>
                    <BsPen className="action_btn edit" />
                  </Link>
                </span>
                {products.loading ? (
                  <h6>loading...</h6>
                ) : (
                  <span onClick={() => handleDelete(item._id)}>
                    <FiTrash2 className="action_btn del" />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGrid;
