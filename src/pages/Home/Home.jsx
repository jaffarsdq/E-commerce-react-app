import React from 'react'
import './home.css'

//components import
import Footer from '../../components/Footer/Footer';
import CategoryItem from '../../components/categoryItem/CategoryItem'
import useCategory from '../../hooks/useCategory';
import MiniLoader from '../../components/loader/MiniLoader';

function Home() {

    const [categories] = useCategory();


  return (
    <>
        <div className="hero container-sm p-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="main row">
                <div className="col-lg-3 col-xl-4 welcome mb-5 mx-2 mx-xl-4 text-center">
                    <span >Welcome</span> to <strong className='welcome-note'>S</strong>hoppy
                </div>
            </div>

            <div className="row col-lg-8 col-xl-7 product-list d-flex justify-content-center" 
                id="categories-list">
                {(categories) ?  <CategoryItem itemName={'All products'}/> : null}
                {(categories) ? categories.map((category) => 
                    <CategoryItem 
                    key={category} 
                    itemName={category}
                    filter={category}
                    />) : 
                    <>
                        <CategoryItem 
                    itemName={<MiniLoader/>}/>
                        <CategoryItem 
                    itemName={<MiniLoader/>}/>
                        <CategoryItem 
                    itemName={<MiniLoader/>}/>
                        <CategoryItem 
                    itemName={<MiniLoader/>}/>
                        <CategoryItem 
                    itemName={<MiniLoader/>}/>
                    </>
                }
            </div>
        </div>
                <div className="sub text-muted text-center">
                    Please select a catogery from above to continue
                </div>
        <Footer/>
    </>
  )
}

export default Home