import React from 'react'
import { Link } from 'react-router-dom'

//css import
import './productBox.css'

function ProductBox({productImage, name, price, id}) {
  return (      
    
      <Link  to={`/products/${id}`}  className="container col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center">
            <div className="col-12  p-2 card ">
                <div className="col-12 d-flex justify-content-center">
                    <img className="img-fluid" src={productImage} alt="product image"/>
                </div>
                <div className="col-12 text-start d-flex flex-column mt-1 mx-2">
                    <h6>{name}</h6>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='my-auto'> &#8377; {price}</p>
                        <i class="bi bi-arrow-up-right-square  ms-auto me-3 icon"></i>
                    </div>
                </div>
            </div>
        </Link>
       
  )
}

export default ProductBox