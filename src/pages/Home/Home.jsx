import React from 'react'
import './home.css'

import CategoryItem from '../../components/categoryItem/CategoryItem'

function Home() {
  return (
    <>
        <div className="container my-4">
            <div className="main row">
                <div className="display-1 welcome col text-center mb-5">
                    Welcome to <strong>S</strong>hoppy
                </div>
            </div>
            <CategoryItem itemName={'All products'}/>
        </div>
        <div className="display-6 col text-center">
            <strong>S</strong>elect a category to start shopping
        </div>
    </>
  )
}

export default Home