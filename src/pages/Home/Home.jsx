import React from 'react'
import './home.css'

import CategoryItem from '../../components/categoryItem/CategoryItem'
import useCategory from '../../hooks/useCategory';


function Home() {

    const [categories] = useCategory();


  return (
    <>
        <div className="container my-4">
            <div className="main row">
                <div className="display-1 welcome col text-center mb-5">
                    Welcome to <strong>S</strong>hoppy
                </div>
            </div>
            <div className="row product-list d-flex justify-content-center" 
                id="categories-list">
                <CategoryItem itemName={'All products'}/>
                {categories && categories.map((category) => 
                    <CategoryItem 
                        key={category} 
                        itemName={category}
                        filter={category}
                    />)}
            </div>
        </div>
        <div className="display-6 col text-center">
            <strong>S</strong>elect a category to start shopping
        </div>
    </>
  )
}

export default Home