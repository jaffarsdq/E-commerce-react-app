import FilterProducts from "../../components/filterProducts/FilterProducts";
import ProductBox from "../../components/productBox/ProductBox";
import reactImg from '../../assets/react.svg'
//css import
import './productList.css'

function ProductList() {
    return (
        <div className="main container  mt-5">
           <div class="row search-products-wrapper">
                <FilterProducts/>    
           </div>
            <div class="row col-12  col-md-10 col-lg-9 product-list-box d-flex flex-wrap mx-auto" id="product-list">

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
    )
}

export default ProductList;