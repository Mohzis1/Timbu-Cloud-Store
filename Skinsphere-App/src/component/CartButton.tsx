import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartButton() {
    return (
      <button style={{borderRadius:"8px", width:"44px", height:"44px",border:"none", padding:"10px", backgroundColor:"#69A7D0"}}>
        <FontAwesomeIcon icon={faShoppingCart} style={{color:"#FFFFFF", }} /> 
      </button>
    );
  }
  
  export default CartButton;
  