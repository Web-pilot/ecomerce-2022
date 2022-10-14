import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./DashboardProductFullDetails.css";
import "../../Dashboard.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const DashboardProductFullDetails = () => {
  return (
    <section className="dashboard">
      <DashboardSidebar />
      <div className="dashboard_content">
        <DashboardHeader />
        <div className="full_details">full details</div>
      </div>
    </section>
  );
};

export default DashboardProductFullDetails;
