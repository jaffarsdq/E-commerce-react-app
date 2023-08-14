import FilterProducts from "../../components/filterProducts/FilterProducts";
import ProductBox from "../../components/productBox/ProductBox";
import reactImg from '../../assets/react.svg'
//css import
import './productList.css'

function ProductList() {
    return (
        <div className="main container">
            <div className="row  search-products-wrapper">
                <FilterProducts/>
                <ProductBox productImage={reactImg} name={'dummy'} price={100}/>
            </div>
        </div>
    )
}

export default ProductList;