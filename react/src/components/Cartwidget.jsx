import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"

export const CartWidget = () => {
    return (
        
            <button type="button" className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faShoppingBag}  />
                <span>0</span>
            </button>
       
    )
}

