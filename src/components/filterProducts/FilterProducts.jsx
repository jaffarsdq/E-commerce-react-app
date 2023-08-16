import React from 'react'

function FilterProducts() {

    const minPriceOptions = [0, 10, 20, 50, 100, 200];
    const maxPriceOptions = [10, 20, 50, 100, 200, 1000];

  return (
    <div className="col-10 col-md-10 col-lg-12  mx-auto search-products-wrapper">
        <div className="col">
            <h6 htmlFor="search-products" className="form-label text-muted">
                Search products   
            </h6>
            <input type="text" className="form-control" placeholder="Search by name" id="search-products" aria-describedby="search-bar"/>
        </div>
        <div className="col mt-2">
            <h6 className="fs-6 text-muted">Categories</h6>
        </div>
        <div className="col categories text-center" id="categoryList">
            <a href="#" className="col-md-12 ">
                Electronics
            </a>
            <a href="#" className="col-md-12 ">
                Kitchen ware
            </a>
            <a href="#" className="col-md-12 ">
                Woman outfit
            </a>
            <a href="#" className="col-md-12 ">
                Sports
            </a>
            <a href="#" className="col-md-12">
                Gaming
            </a>
        </div>
        <div className="col mt-2">
            <h6 className="col fs-6 text-muted">Filter by price</h6>   
        </div>
        <div className="col  mt-2">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <select name="minPrice" id="minPrice" className="form-select">
                        {minPriceOptions.map(optionValue => 
                                <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                    </div>
                    <p>Min Price</p>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <select name="maxPrice" id="maxPrice" className="form-select">
                        {maxPriceOptions.map(optionValue => 
                                <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                        </select>
                        <p>Max Price</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col mb-2">
            <div className="d-grid col-12 mb-3">
                <button className="btn btn-warning" id="search-btn">
                    <i class="bi bi-search"></i> Search
                </button>
                <button className="btn btn-danger mt-1" id="clear-btn">
                    <i class="bi bi-stars"></i> Clear Filters
                </button>
            </div>
        </div>
    </div>
  )
}

export default FilterProducts
