import "./Dashboard.css";

import { Link } from "react-router-dom";
import TableGrid from "./components/TableGrid/TableGrid";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="main">
          <div className="top_bar">
            <input type="text" name="" id="" placeholder="Search product" />
            <Link to="/dashboard/products/add" className="btn">
              Add Product
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
