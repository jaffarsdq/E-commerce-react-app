import { useContext, useEffect, useState } from 'react';

//axios import
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//context import
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';

//api import
import { getProduct, updateProductInCart } from '../../apis/fakeStoreApi';

//css import
import './cart.css'

//component import
import OrderDetailsProduct from '../../components/orderDetailProduct/OrderDetailsProduct';
import ProductTitle from '../../components/pageTitle/PageTitle';
import MiniLoader from '../../components/loader/MiniLoader';

//custom hook import
import usePriceDetails from '../../hooks/usePriceDetails';

//toast import
import toast from 'react-hot-toast';
import { dismissLoadingToast, showLoadingToast } from '../../helper/loadingToast';


function Cart() {

    const navigate = useNavigate();
    const {cart, setCart} = useContext(CartContext);
    const {user} = useContext(UserContext);
    const [products, setProducts] = useState([]);

    const [totalPrice, discount, discountedTotalPrice] = usePriceDetails(products);
    
    async function downloadCartProducts(cart) {
        if(!cart || !cart.products) return;

        // object productid->quantity
        const productQuantityMapping = {}; // { 1: 3, 2: 1}
        cart.products.forEach(product => {
            productQuantityMapping[product.productId] = product.quantity;
        })

        const productsPromise = cart.products.map(product => axios.get(getProduct(product.productId)));
        const productPromiseResponse = await axios.all(productsPromise);  
        
        const downloadedProducts = productPromiseResponse.map(product => ({...product.data, quantity: productQuantityMapping[product.data.id]}));
        setProducts(downloadedProducts);
    }

    async function onProductUpdate(productId, quantity, message) {
       try{
        if (!user) return;
        showLoadingToast("Updating...");
        // console.log("Updating product with ID:", productId, "to quantity:", quantity);
      
        const response = await axios.put(updateProductInCart(), { userId: user.id, productId, quantity });

        // console.log("API response:", response.data);
      
        setCart({ ...response.data });

        dismissLoadingToast();
        toast.success(message)
       } catch {
        dismissLoadingToast();
        toast.error("Something went wrong")
       }
    }
      
    useEffect(() => {
        downloadCartProducts(cart);
    }, [cart])
    

  return (
    <>
        <ProductTitle word={'Your cart'}/>
        <div className="container">
            <div className="row">
                <div className="col-11  col-lg-8 order-2 order-lg-1 mx-auto">
                            {/* <!-- Order Details --> */}
                        <div className="order-details d-flex flex-column" id="orderDetails">
                            <div className="order-details-title text-muted">Order Details</div>
                                {/* order detail card */}
                                {products.length > 0 ? products.map(product => <OrderDetailsProduct 
                                    key={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    quantity={product.quantity}
                                    onQuantityChange={(newQuantity, message) => onProductUpdate(product.id, newQuantity, message)}
                                    onRemove={(message) => onProductUpdate(product.id, 0, message)}
                                />) : (user && cart && cart.products.length === 0) ? 
                                <div className='d-flex justify-content-center text-danger'>
                                    try to add some products
                                </div> : (!user) ? 
                                <div className='d-flex justify-content-center text-danger'>
                                    Please Login in to add some products
                                </div> :
                                <MiniLoader/>
                                }
                        </div>    
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2 mx-auto mb-5">
                            {/* <!-- Price Details --> */}
                            <div className="price-details d-flex flex-column col-12" id="priceDetails">
                                <div className="price-details-box">
                                    <div className="price-details-title text-muted">Price Details</div>
                                    <div className="price-details-data">
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Price</div>
                                            {/* Price */}
                                            <div id="total-price">${totalPrice}</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Discount</div>
                                            <div className='text-success'>- ${discount}</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Delivery Charges</div>
                                            <div className='text-success fw-semibold'>FREE</div>
                                        </div>
                                        <div className="price d-flex flex-row justify-content-between">
                                            <div>Total Amount</div>
                                            {/* total price */}
                                            <div id="net-price">${discountedTotalPrice}</div>
                                        </div>
                                    </div>
                                </div>
                            <div className="price-details-btn-group">
                                <a className="btn continue-shopping-btn text-decoration-none"
                                    onClick={() => navigate('/products')}    
                                >
                                    <i className="bi bi-chevron-right"></i> Continue Shopping
                                </a>
                                <a className="btn btn-dark checkout-btn text-decoration-none">
                                    <i className="bi bi-cart-check"></i> Checkout
                                </a>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cart;