import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//css import
import './productBox.css'

function ProductBox({productImage, name, price, id}) {
  return (      
    
      <Link  to={`/products/${id}`}  className="container col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center">
            <div className="col-12  p-2 card ">
                <div className="col-12 d-flex justify-content-center">
                    <LazyLoadImage className="img-fluid" src={productImage} alt="product image" effect="blur"/>
                </div>
                <div className="col-12 text-start d-flex flex-column mt-1 mx-2">
                    <h6>{name}</h6>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='my-auto'> $ {price}</p>
                        <i className="bi bi-arrow-up-right-square  ms-auto me-3 icon"></i>
                    </div>
                </div>
            </div>
        </Link>
       
  )
}

export default ProductBox