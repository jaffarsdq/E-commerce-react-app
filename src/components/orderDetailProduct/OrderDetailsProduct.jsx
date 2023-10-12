import { useContext } from "react";
import CartContext from "../../context/CartContext.js";
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// eslint-disable-next-line react/prop-types
function OrderDetailsProduct({image, title, price, quantity, onRemove}) {

    const quantityAvailable = [1,2,3,4,5,6,7,8,9,10];

    const {cart} = useContext(CartContext);

    // const handleQuantityChange = (e) => {
    //     setSelectedQuantity(Number(e.target.value));
    //     onQuantity();
    //     console.log('incoming',quantity,'selected',selectedQuantity)
    // } 

    useEffect(() => {}, [cart]);

  return (
    <div className="d-md-flex order-details-product text-center  text-md-start">
        <div className="order-details-product-img my-1 col-12 col-md-3">
            <LazyLoadImage className='img-fluid' src={image} alt="product" effect="blur"/>
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
                        name="quantity"
                        
                    >
                    {quantityAvailable.map((val) => <option selected={quantity} key={val}>{val}</option>)}
                    </select>
                </div>
            </div>
            <div className="order-details-product-remove btn btn-danger" onClick={onRemove}>Remove</div>
        </div>
    </div>
  )
}

export default OrderDetailsProduct