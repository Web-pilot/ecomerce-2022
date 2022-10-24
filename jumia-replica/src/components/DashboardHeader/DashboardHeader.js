import { useSelector } from "react-redux";
import "../../Dashboard.css";

const DashboardHeader = () => {
  const user = useSelector((state) => state.user);
  return (
    <header className="dash_navbar">
      <div className="logo">DASHBOARD</div>
      <div className="profile">
        {user.user && (
          <img src={user.user.picture} alt={user.user.family_name} />
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
