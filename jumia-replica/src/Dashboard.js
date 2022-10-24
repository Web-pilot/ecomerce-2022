import "./Dashboard.css";

import { Link } from "react-router-dom";
import TableGrid from "./components/TableGrid/TableGrid";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect } from "react";
import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSucess,
} from "./redux/dashboardReducer";
import { axiosRequest } from "./axiosRequestMethod";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchProductStart());
        const res = await axiosRequest.get("api/v1/products/user");
        dispatch(fetchProductSucess(res.data));
      } catch (error) {
        dispatch(fetchProductFailure());
      }
    };
    fetchProduct();
  }, []);

  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="main">
          <div className="top_bar">
            <input type="text" name="" id="" placeholder="Search product" />
            <Link to="/dashboard/products/add" className="btn">
              <FaPlusCircle /> <span className="hide">Add Product</span>
            </Link>
          </div>
          <div className="table_summary">
            <h5>(35)</h5>
          </div>
          <TableGrid />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
