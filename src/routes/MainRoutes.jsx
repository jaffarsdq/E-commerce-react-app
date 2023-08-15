import { Route, Routes } from "react-router";

// Custom Component imports
import Home from "../pages/home/home";
import Error from "../pages/error/Error";
import ProductList from "../pages/productList/ProductList";
import ProductDetails from "../pages/productDetails/ProductDetails";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/2" element={<ProductDetails />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;