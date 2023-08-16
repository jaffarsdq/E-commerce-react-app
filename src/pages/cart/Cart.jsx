import React from 'react'

//css import
import './cart.css'

//component import
import OrderDetailsProduct from '../../components/orderDetailProduct/OrderDetailsProduct'
import ProductTile from '../../components/pageTitle/PageTitle'

function Cart() {
  return (
    <>
        <ProductTile word={'Your cart'}/>
        <div className="container">
            <div className="row">
                <div className="col-11  col-lg-9 order-2 order-lg-1 mx-auto">
                            {/* <!-- Order Details --> */}
                        <div className="order-details d-flex flex-column" id="orderDetails">
                            <div className="order-details-title fw-bold">Order Details</div>
                                {/* order detail card */}
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                                <OrderDetailsProduct/>
                        </div>    
                </div>
                <div className="col-12 col-lg-3 order-1 order-lg-2 mx-auto mb-5">
                            {/* <!-- Price Details --> */}
                            <div className="price-details d-flex flex-column col-12" id="priceDetails">
                                <div className="price-details-box">
                                    <div className="price-details-title fw-bold">Price Details</div>
                                    <div className="price-details-data">
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Price</div>
                                            <div id="total-price">1000</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Discount</div>
                                            <div>10</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Delivery Charges</div>
                                            <div>FREE</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Total</div>
                                            <div id="net-price">990</div>
                                        </div>
                                    </div>
                                </div>
                            <div className="price-details-btn-group">
                                <a className="btn continue-shopping-btn text-decoration-none">
                                    Continue Shopping
                                </a>
                                <a className="btn btn-primary checkout-btn text-decoration-none">
                                    Checkout
                                </a>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cart