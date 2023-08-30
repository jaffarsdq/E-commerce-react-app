import React from 'react'

function OrderDetailsProduct({ image, title, price, quantity}) {

    const quantityAvailable = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="d-md-flex order-details-product text-center  text-md-start">
        <div className="order-details-product-img my-1 col-12 col-md-3">
            <img className='img-fluid' src={image} alt=""/>
        </div>
        <div className="order-details-product-data my-1 col-12 col-md-6">
            <div>{title}</div>
            <div>&#8377; {price}</div>
        </div>
        <div className="order-details-product-actions my-1 col-12 col-md-3">
            <div className="order-details-product-quantity">
                <div className="fw-bold my-2">Quantity</div>
                <div className="form-group">
                    <select name="" id="" className="form-select">
                    {quantityAvailable.map((id) => <option selected={quantity == id} value={id} key={id}>{id}</option>)}
                    </select>
                </div>
            </div>
            <div className="order-details-product-remove btn btn-danger">Remove</div>
        </div>
    </div>
  )
}

export default OrderDetailsProduct