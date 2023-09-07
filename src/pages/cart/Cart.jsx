import { useContext, useEffect, useState } from 'react';
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


function Cart() {

    const navigator = useNavigate();
    const {cart, setCart} = useContext(CartContext);
    const {user} = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0)

    // Calculate the total price, discount, and discounted total price when items or their quantities change
  useEffect(() => {
    const calculatedTotalPrice = products && products.reduce((accumulator, item) => {
      const itemTotalPrice = Math.round(item.price* 50 * item.quantity);
      return accumulator + itemTotalPrice;
    }, 0);

    const calculatedDiscount = Math.round(calculatedTotalPrice * 0.1); // 10% discount
    const calculatedDiscountedTotalPrice = calculatedTotalPrice - calculatedDiscount;

    setTotalPrice(calculatedTotalPrice);
    setDiscount(calculatedDiscount);
    setDiscountedTotalPrice(calculatedDiscountedTotalPrice);
  }, [products]);

    function navigate() {
        return  navigator('/products');
    }
    
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

    async function onProductUpdate(productId, quantity) {
        if(!user) return;
        const response = await axios.put(updateProductInCart(), {userId: user.id, productId, quantity});
        setCart({...response.data});
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
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    quantity={product.quantity}
                                    onRemove={() => onProductUpdate(product.id, 0)}
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
                                            <div id="total-price">&#8377;{totalPrice}</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Discount</div>
                                            <div className='text-success'>- &#8377;{discount}</div>
                                        </div>
                                        <div className="price-details-item d-flex flex-row justify-content-between">
                                            <div>Delivery Charges</div>
                                            <div className='text-success fw-semibold'>FREE</div>
                                        </div>
                                        <div className="price d-flex flex-row justify-content-between">
                                            <div>Total Amount</div>
                                            {/* total price */}
                                            <div id="net-price">&#8377;{discountedTotalPrice}</div>
                                        </div>
                                    </div>
                                </div>
                            <div className="price-details-btn-group">
                                <a className="btn continue-shopping-btn text-decoration-none"
                                    onClick={navigate}    
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

export default Cart