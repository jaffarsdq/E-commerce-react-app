import React from 'react'
//css imports
import './categoryItem.css'

function CategoryItem({itemName}) {
  return (
    <div className="row product-list d-flex justify-content-center" 
        id="categories-list">
        <a className="col-12 col-sm-6 col-md-4 col-lg-2 m-2  all-products" href="#">
            {itemName}
        </a>
    </div>
  )
}

export default CategoryItem