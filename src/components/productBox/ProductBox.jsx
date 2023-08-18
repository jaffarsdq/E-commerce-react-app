import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

//css import
import './productBox.css'

function ProductBox({productImage, name, price, key}) {
  return (      
    
      <Link  to={`/products/${key}`}  className="container col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center">
            <div className="col-12  p-2 card ">
                <div className="col-12">
                    <img className="img-fluid" src={productImage} alt="product image"/>
                </div>
                <div className="col-12 text-center d-flex flex-column mt-2">
                    <h6>{name}</h6>
                    <p> &#8377; {price}</p>
                    <button className="btn btn-primary">
                        Product Details
                    </button>
                </div>
            </div>
        </Link>
       
  )
}

export default ProductBox