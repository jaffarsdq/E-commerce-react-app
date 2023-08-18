import React, { useEffect, useState } from 'react'
import './home.css'

import CategoryItem from '../../components/categoryItem/CategoryItem'
import axios from 'axios';
import { getAllCategories } from '../../apis/fakeStoreApi';


function Home() {

    const [categories, setCategories] = useState();

    const response = async function fetchCategories () {
        const response = await axios.get(getAllCategories());
        const data = response.data
        setCategories(data);
    }
    useEffect(() => {
        response();
    },[])


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
                {categories && categories.map((category, idx) => <CategoryItem key={category} itemName={category}/>)}
            </div>
        </div>
        <div className="display-6 col text-center">
            <strong>S</strong>elect a category to start shopping
        </div>
    </>
  )
}

export default Home