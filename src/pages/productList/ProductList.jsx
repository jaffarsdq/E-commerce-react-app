import FilterProducts from "../../components/filterProducts/FilterProducts";
import ProductBox from "../../components/productBox/ProductBox";
import reactImg from '../../assets/react.svg'
//css import
import './productList.css'
import ProductTile from "../../components/productTile/ProductTile";

function ProductList() {
    return (
        <>
           <ProductTile/>
            <div className="main container">
                <div class="row  col-12  col-md-12 col-lg-3 search-products-wrapper mx-auto">
                        <FilterProducts/>    
                </div>
                <div class="row col-12  col-md-10 col-lg-9 product-list-box d-flex flex-wrap mx-auto mt-4" id="product-list">

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