import "./CreditStore.css";
import {TbCurrencyNaira} from "react-icons/tb"
import {AiFillIdcard} from "react-icons/ai"

const CreditStore = () => {
  return (
    <div className="grid_items store_credit">
    <h5 className="heading">CREDIT STORE </h5>
    <div className="body">
      <h4> <i><AiFillIdcard /> </i><TbCurrencyNaira />0.00</h4>
    </div>
  </div>
  )
}

export default CreditStore