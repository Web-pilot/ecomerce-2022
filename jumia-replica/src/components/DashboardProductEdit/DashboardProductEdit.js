import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./DashboardProductEdit.css";
import "../../Dashboard.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import TableGrid from "../TableGrid/TableGrid";
import EditProductForm from "../EditProductForm/EditProductForm";

const DashboardProductEdit = () => {
  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="add_product_container">
          <EditProductForm />
          <div className="product_details">
            <TableGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardProductEdit;
