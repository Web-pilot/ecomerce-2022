import "./SavedItems.css";

import AccountSidebar from "../AccountSideBar/AccountSidebar"
import SavedItemsCard from "../SavedItemsCard/SavedItemsCard";
const SavedItems = () => {
  return (
    <section className="container account_container">
      <AccountSidebar />
      <div className="main_content save_items">
        <h4 className="account_section_title">Saved Items</h4>
        <SavedItemsCard />
        <SavedItemsCard />
        <SavedItemsCard />
      </div>
    </section>
  )
}

export default SavedItems