import "./Account.css";

import AccountGrids from "../AccountGrids/AccountGrids";
import Accountsidebar from "../AccountSideBar/AccountSidebar";
import AddressBook from "../AddressBook/AddressBook";
import CreditStore from "../CreditStore/CreditStore";

const Account = () => {
  return (
    <section className="container account_container">
      <Accountsidebar />
      <div className="main_content">
        <h3 className="main_content_title">Account Overview</h3>
        <div className="grids">
          <AccountGrids />
          <AddressBook />
          <CreditStore />
        </div>
      </div>
    </section>
  );
};

export default Account;
