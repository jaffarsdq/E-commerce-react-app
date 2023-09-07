import FilterProducts from "../../components/filterProducts/FilterProducts";
import ProductBox from "../../components/productBox/ProductBox";
//css import
import './productList.css'
import ProductTitle from "../../components/pageTitle/PageTitle";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { getAllProducts, getAllProductsByCategory } from "../../apis/fakeStoreApi";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import SearchContext from "../../context/SearchContext";
import FilterContext from "../../context/FilterContext";

function ProductList() {
    
    const [products, setProducts] = useState();
    const [query] = useSearchParams();
    const {searchValue, setSearchValue} = useContext(SearchContext);
    const {filterValue, setFilterValue} = useContext(FilterContext);
    const [filtered, setFiltered] = useState('')
    
    const response = async function fetchproducts (category) {
        const downloadCategory = category ? getAllProductsByCategory(category) : getAllProducts(); 
        const response = await axios.get(downloadCategory);
        setProducts(response.data);
    }

    // useEffect(() => {
    //     if (products) {
    //         const filteredProducts = products.filter((product) =>
    //           product.title.toLowerCase().includes(searchValue.toLowerCase())
    //         );
    //         setFiltered(filteredProducts);
    //     }
    // }, [searchValue, products])

    useEffect(() => {
        if (products) {
          const filteredByTitle = products.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
          );
      
          if (filterValue.maxPrice !== 0) {
            const filteredByPrice = filteredByTitle.filter((product) =>
              product.price >= filterValue.minPrice && product.price <= filterValue.maxPrice
            );
            setFiltered(filteredByPrice);
          } else {
            // If either minPrice or maxPrice is not set, show all products
            setFiltered(filteredByTitle);
          }
        }
      }, [searchValue, filterValue, products]);
      
      const clearFilters = () => {
        setSearchValue('');
        setFiltered('');
        setFilterValue({minPrice : 0, maxPrice : 0})
      }

    //funtion to shrink if the length of the title has more than 18 characters
    function shrink (title) {
        let result = "";
        if(title.length > 18) {
            result = title.substring(0,18) + '...';
        } else {
            result = title;
        }
        return result;
    }
    
    useEffect(() => {
        response(query.get('category'));
    },[query])
  
    if (!products) {
        return <Loader/>;
    }

    return (
        <>
           <ProductTitle word={query.get('category') || "All Products"}/>
            <div className="main container">
                <div className="row  col-12  col-md-12 col-lg-3 search-products-wrapper mx-auto">
                    <FilterProducts clear={clearFilters}/>    
                </div>
                <div className="row col-12  col-md-10 col-lg-9 product-list-box d-flex flex-wrap mx-auto mt-4" id="product-list">

                    {/* <ProductBox productImage={reactImg} name={'dummy'} price={100}/> */}
                    {products && filtered.length > 0 ? filtered.map((product) =>
                        <ProductBox 
                            key={product.id} 
                            productImage={product.image} 
                            name={shrink(product.title)}
                            price={Math.round(product.price)}
                            id={product.id}
                        />) :
                        <div className="container col-9 col-sm-6 text-break text-danger">There are no items that match this filter.</div>
                    }
                </div>
            </div>
        </>
        
    )
}

export default ProductList;