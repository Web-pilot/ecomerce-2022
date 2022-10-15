import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./AddProduct.css";
import "../../Dashboard.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AddProductForm from "../AddProductForm/AddProductForm";

const AddProduct = () => {
  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="add_product_container">
          <AddProductForm />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
