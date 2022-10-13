import "./BottomNavbar.css";
import {AiOutlineHome, AiOutlineQuestionCircle} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
import {MdManageAccounts} from 'react-icons/md';

const BottomNavbar = ({categoryOpen, setCategoryOpen}) => {
  return (
    <section className=" bottom_navbar">
        <ul className="small_screen_navbar">
           <li><a href="@">Home <AiOutlineHome /></a></li> 
           <li onClick={() => setCategoryOpen(!categoryOpen)}>Categories <BiCategoryAlt /></li> 
           <li><a href="@">Account <MdManageAccounts /></a></li> 
           <li><a href="@">Help <AiOutlineQuestionCircle /></a></li> 
        </ul>
    </section>
  )
}

export default BottomNavbar;