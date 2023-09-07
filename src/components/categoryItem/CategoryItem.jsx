import React from 'react'
import { Link } from "react-router-dom";
//css imports
import './categoryItem.css'

function CategoryItem({itemName, filter=''}) {

  const redirectLink = `/products?category=${filter}`;

  return (
    <Link to={redirectLink} className="col-9 col-sm-6 col-md-4 col-lg-2 m-2  all-products text-capitalize text-center">
        {itemName}
    </Link>
  )
}

export default CategoryItem