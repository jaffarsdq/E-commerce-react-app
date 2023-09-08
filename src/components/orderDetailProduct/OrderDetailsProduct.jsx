import { useContext } from "react";
import QuantityContext from "../../context/QuantityContext.js";
import CartContext from "../../context/CartContext.js";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function OrderDetailsProduct({image, title, price, quantity, onQuantity, onRemove}) {

    const quantityAvailable = [1,2,3,4,5,6,7,8,9,10];

    const {cart, setCart} = useContext(CartContext);
    const {selectedQuantity, setSelectedQuantity} = useContext(QuantityContext);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
        onQuantity();
        console.log('incoming',quantity,'selected',selectedQuantity)
    } 

    useEffect(() => {}, [cart]);

  return (
    <div className="d-md-flex order-details-product text-center  text-md-start">
        <div className="order-details-product-img my-1 col-12 col-md-3">
            <img className='img-fluid' src={image} alt=""/>
        </div>
        <div className="order-details-product-data my-1 col-12 col-md-6">
            <div>{title}</div>
            <div>$ {Math.round(price)}</div>
        </div>
        <div className="order-details-product-actions my-1 col-12 col-md-3">
            <div className="order-details-product-quantity">
                <div className="fw-bold my-2">Quantity</div>
                <div className="form-group">
                    <select 
                        className="form-select"
                        selected={quantity}
                        onChange={(handleQuantityChange)}
                    >
                    {quantityAvailable.map((val) => <option value={val} key={val}>{val}</option>)}
                    </select>
                </div>
            </div>
            <div className="order-details-product-remove btn btn-danger" onClick={onRemove}>Remove</div>
        </div>
    </div>
  )
}

export default OrderDetailsProduct