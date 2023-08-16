import FilterProducts from "../../components/filterProducts/FilterProducts";
import ProductBox from "../../components/productBox/ProductBox";
import reactImg from '../../assets/react.svg'
//css import
import './productList.css'
import ProductTile from "../../components/pageTitle/PageTitle";

function ProductList() {
    return (
        <>
           <ProductTile word={'All products'}/>
            <div className="main container">
                <div className="row  col-12  col-md-12 col-lg-3 search-products-wrapper mx-auto">
                        <FilterProducts/>    
                </div>
                <div className="row col-12  col-md-10 col-lg-9 product-list-box d-flex flex-wrap mx-auto mt-4" id="product-list">

                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                    <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
                </div>
            </div>
        </>
        
    )
}

export default ProductList;