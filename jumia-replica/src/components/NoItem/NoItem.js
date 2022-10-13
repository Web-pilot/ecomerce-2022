import { Link } from "react-router-dom"
import "./NoItem.css"
import { BsCartPlus } from "react-icons/bs"
import { GrHistory } from "react-icons/gr"


const NoItem = ({heading, body}) => {
  return (
    <div className="no_item_container">
        <div>
            <GrHistory className="no_item_icon"/>
            <h6>{heading}</h6>
        </div>
        <p>{body}</p>
        <Link to="/" className="button">START SHOPPING</Link>
    </div>
  )
}

export default NoItem