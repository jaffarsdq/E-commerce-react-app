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

function ProductList() {
    
    const [products, setProducts] = useState();
    const [query] = useSearchParams();
    const {searchValue} = useContext(SearchContext);
    
    const response = async function fetchproducts (category) {
        const downloadCategory = category ? getAllProductsByCategory(category) : getAllProducts(); 
        const response = await axios.get(downloadCategory);
        setProducts(response.data);
    }

    const productsFilter = products && products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    //funtion to shrink if the length of the title has more than 18 characters
    function shrink (tit) {
        let result = "";
        if(tit.length > 18) {
            result = tit.substring(0,18) + '...';
        } else {
            result = tit;
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
                    <FilterProducts/>    
                </div>
                <div className="row col-12  col-md-10 col-lg-9 product-list-box d-flex flex-wrap mx-auto mt-4" id="product-list">

                    {/* <ProductBox productImage={reactImg} name={'dummy'} price={100}/> */}
                    {products && productsFilter.length > 0 ? productsFilter.map((product) =>
                        <ProductBox 
                            key={product.id} 
                            productImage={product.image} 
                            name={shrink(product.title)}
                            price={Math.round(product.price * 50)}
                            id={product.id}
                        />) :
                        <div className="container col-9 col-sm-6 text-break">There are no products available by the name of <span className="text-danger">"{searchValue}"</span> ...</div>
                    }
                </div>
            </div>
        </>
        
    )
}

export default ProductList;