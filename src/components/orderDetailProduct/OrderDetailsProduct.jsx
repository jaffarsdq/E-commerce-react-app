import React from 'react'

//asset import
import viteSvg from '../../../public/vite.svg'

function OrderDetailsProduct() {
  return (
    <div className="d-md-flex order-details-product text-center  text-md-start">
        <div className="order-details-product-img my-1 col-12 col-md-3">
            <img className='img-fluid' src={viteSvg} alt=""/>
        </div>
        <div className="order-details-product-data my-1 col-12 col-md-6">
            <div>Some product</div>
            <div>&#8377; 10000</div>
        </div>
        <div className="order-details-product-actions my-1 col-12 col-md-3">
            <div className="order-details-product-quantity">
                <div className="fw-bold my-2">Quantity</div>
                <div className="form-group">
                    <select name="" id="" className="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="order-details-product-remove btn btn-danger">Remove</div>
        </div>
    </div>
  )
}

export default OrderDetailsProduct