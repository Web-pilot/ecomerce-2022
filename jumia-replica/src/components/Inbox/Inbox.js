import AccountSidebar from "../AccountSideBar/AccountSidebar";
import Card from "../InboxMessageCard/InboxMessageCard";
import "./Inbox.css";

const Inbox = () => {
  return (
    <section className="container account_container">
    <AccountSidebar />
    <div className="main_content inbox">
    <h4>Inbox Messages</h4>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </section>
  )
}

export default Inbox