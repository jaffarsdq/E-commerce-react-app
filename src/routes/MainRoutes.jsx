import { Route, Routes } from "react-router";

// Custom Component imports
import Home from "../pages/home/home";
import Error from "../pages/error/Error";
import ProductList from "../pages/productList/ProductList";
import Login from "../pages/login/Login";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;