import React, { useContext } from 'react'
import useCategory from '../../hooks/useCategory';
import { useNavigate } from 'react-router-dom';
import MiniLoader from '../loader/MiniLoader'

import './filterProducts.css'
import FilterContext from '../../context/FilterContext';
import SearchContext from '../../context/SearchContext';

function FilterProducts({clear}) {

    const minPriceOptions = [0, 10, 20, 50, 100, 200, 500];
    const maxPriceOptions = [0, 10, 20, 50, 100, 200, 500, 1000];

    const {searchValue, setSearchValue} = useContext(SearchContext);
    const [categories] = useCategory();
    const {filterValue, setFilterValue} = useContext(FilterContext);

    const navigate = useNavigate();

    function handleMinValue(e) {
        setFilterValue({...filterValue, minPrice : e.target.value})
        console.log(filterValue);
    }
    function handleMaxValue(e) {
        setFilterValue({...filterValue, maxPrice : e.target.value})
        console.log(filterValue);
    }

    function handleSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleCategoryClick(category) {
        navigate(`/products?category=${category}`)
        setSearchValue('')
    }

  return (
    <div className="col-10 col-md-10 col-lg-10  mx-auto search-products-wrapper">
        <div className="col">
            <h6 htmlFor="search-products" className="form-label text-muted">
                Search products   
            </h6>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search by name" 
                id="search-products" 
                aria-describedby="search-bar"
                value={searchValue}
                onChange={handleSearch}
            />
        </div>
        <div className="col mt-2">
            <h6 className="fs-6 text-muted">Categories</h6>
        </div>
        <div className="col categories text-center" id="categoryList">
                <a onClick={() => handleCategoryClick('')} key={'All-products'} className="category col-md-12 text-capitalize">
                    All Products
                </a>
            {categories ? categories.map((category) => 
                <a onClick={() => handleCategoryClick(category)} key={category} className="category col-md-12 text-capitalize">
                    {category}
                </a>
            ) : 
                <a className="category col-md-12 text-capitalize">
                {<MiniLoader/>}
                </a>
            }
        </div>
        <div className="col mt-2">
            <h6 className="col fs-6 text-muted">Filter by price</h6>   
        </div>
        <div className="col  mt-2">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <select 
                            name="minPrice" id="minPrice" 
                            className="form-select"
                            value={filterValue.minPrice}
                            onChange={handleMinValue}>
                        {minPriceOptions.map(optionValue => 
                                <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                    </div>
                    <p>Min Price</p>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <select 
                            name="maxPrice" 
                            id="maxPrice" 
                            className="form-select"
                            value={filterValue.maxPrice}
                            onChange={handleMaxValue}>
                        {maxPriceOptions.map(optionValue => 
                                <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                        <p>Max Price</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col mb-2">
            <div className="d-flex mb-3 justify-content-around">
                <button 
                    className="col-12 btn clear-btn text-white" 
                    id="clear-btn"
                    onClick={clear}>
                    <i className="bi bi-stars"></i> Clear Filters
                </button>
            </div>
        </div>
    </div>
  )
}

export default FilterProducts
