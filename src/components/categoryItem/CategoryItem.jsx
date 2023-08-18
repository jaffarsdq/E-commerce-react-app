import React from 'react'
import { Link } from "react-router-dom";
//css imports
import './categoryItem.css'

function CategoryItem({itemName}) {

  return (
    <Link to="/products" className="col-9 col-sm-6 col-md-4 col-lg-2 m-2  all-products">
        {itemName}
    </Link>
  )
}

export default CategoryItem