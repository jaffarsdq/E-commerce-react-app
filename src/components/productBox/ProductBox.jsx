import React from 'react'
import { Link } from 'react-router-dom'

//css import
import './productBox.css'

function ProductBox({productImage, name, price}) {
  return (
    <div className="col-12  col-md-12 col-lg-9 product-list-box d-flex flex-wrap" id="product-list">              
        <Link  to="/products/2"  className="container col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 my-2">
            <div className="col-12  p-2 card ">
                <div className="col-12">
                    <img className="img-fluid" src={productImage} alt="product image"/>
                </div>
                <div className="col-12 text-center d-flex flex-column mt-2">
                    <h6>{name}</h6>
                    <p> &#8377; {price}</p>
                    <button className="btn btn-primary">Product Details</button>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductBox