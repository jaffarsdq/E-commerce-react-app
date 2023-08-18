import React from 'react'

//css import
import './productDetails.css'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <div className="product-details-wrapper container my-5">
            <div className="row col-11 mx-auto justify-content-between">
                <div className="col-sm-6 col-md-12 col-lg-5 col-xl-5 d-flex justify-content-around">
                    <img className="img-fluid" 
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                    alt="product" 
                    id="productImage"/>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-6 me-5 d-flex flex-column justify-content-between py-2">
                    <h3 className="display-5 fw-normal fs-1" id="productTitle">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                    </h3>
                    <h3 className="fw-normal" id="productPrice">
                        &#8377;1000
                    </h3>
                    <h4 className="text-muted fw-light fs-5">
                        Description
                    </h4>
                    <p className="lead" id="productDescription">
                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                    </p>
                    <div className="row d-flex justify-content-around g-0">
                        <button className="col-md-6 p-2 m-1 btn btn-primary">
                            <i className="bi bi-plus"></i> Add to cart
                        </button>
                        <Link to={'/cart'} className="col-md-5 p-2 m-1 btn btn-warning">
                            <i className="bi bi-cart3"></i> Go to cart
                        </Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default ProductDetails