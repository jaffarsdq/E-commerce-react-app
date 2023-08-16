import { Route, Routes } from "react-router";

// Custom Component imports
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import ProductList from "../pages/productList/ProductList";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Login from "../pages/authentication/login";
import Signup from "../pages/authentication/signup"
import Cart from "../pages/cart/Cart";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/products/2" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/products/2/cart" element={<Cart />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;